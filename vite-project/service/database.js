// I'm assuming this is supposed to be its own file? It only mentions this later and
// doesn't mention it at all beforehand in the data services assignment
// https://cloud.mongodb.com/v2/673d23a5fda2d97c4ed29b8e#/metrics/replicaSet/673d249b887b16391275ac26/explorer/rental/house/find
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const eventCollection = db.collection('event');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// addScore -> addEvent
// scoreCollection -> eventCollection
async function addEvent(score) {
  return eventCollection.insertOne(score);
}

// BREAKDOWN OF CALENDAR:
// Each event
  // name, time (str, str) [event.name, event.time] [eventName, eventTime]
// events is like a dictionary
  // {time: event, time: event} (str: (str, str), str: (str, str))
// sortedEvents is an ordered list sorted by time (when it is generated) from events 
  // [event, event, event] ((str, str), (str, str), (str, str))

// Conclusion: We want to store events and call it so that it sorts
// We also want adding an event to insert it into events

// Ambition: Actually storing a userEvents as {user: Events, ...} 
// expands to {user: {time: (name, time), time: (name, time), ...}, user...}
// so that users all have their own calendar
// (The best way to do this would be with UUID as user so their token)
// {userToken: {time: (name, time), time: (name, time), ...}, userToken...}

// The best way I could think of this is making getCalendar 
// return the events dictionary based upon the user, as well
// as addEvent to factor in the user

// getHighScores -> getCalendar
// This code DEFINITELY needs to change
// query needs to include user
// it shouldn't be eventCollection it should be calendarCollection which is the 
// {user: {time: (name, time), time: (name, time), ...}, user...} dictionary
function getCalendar() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = eventCollection.find(query, options);
  return cursor.toArray();
}

// maybe add a clear scores here as well?

// change score stuff here as well
module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addEvent,
  getCalendar,
};
