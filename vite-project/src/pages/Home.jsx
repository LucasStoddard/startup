import React, {useState} from "react";
import Weather from '../components/Weather';
import { getCurrentDate } from './date';

function Home() {
    // Normal parts
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [events, setEvents] = useState({});
    const [eventName, setEventName] = useState("");
    const [eventTime, setEventTime] = useState("");

    const openDialog = () => {
        setIsDialogOpen(true);
    };
    
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleInputChange = (tempEvent) => {
        const { name, value } = tempEvent.target;
        if (name === "eventName") {
            setEventName(value);
        } else if (name === "eventTime") {
            setEventTime(value);
        }
    };

    const handleSaveEvent = (tempEvent) => {
        tempEvent.preventDefault();

        if (!eventName || !eventTime) {
            alert("Please enter both event name and time.");
            return;
        }

        const newEvent = { name: eventName, time: eventTime };

        setEvents((prevEvents) => ({
            ...prevEvents,
            [eventTime]: newEvent,
        }));
        setEventName("");
        setEventTime("");
        setIsDialogOpen(false);
    }

    const sortedEvents = Object.values(events).sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}:00`);
        const timeB = new Date(`1970-01-01T${b.time}:00`);
        return timeA - timeB;
    });

    return (
    <main>
        <div className="container">
            <div className="box-container-weather">
                <h2>Weather in Provo</h2>
                <Weather />
            </div>
            <div className="box-container-calendar">   
                <h2>Calendar</h2>
                <h4 id="calendar">Date failed to load</h4>
                <div className="box-calendar">
                    {sortedEvents.map((tempEvent, index) => (
                        <div key={index} className="box-event">
                            <h3>{tempEvent.name}</h3> 
                            <p>{tempEvent.time}</p> {/* May convert in the future to AM/PM but it seems like a nightmare to do */}
                        </div>
                    ))}
                </div>
                <button onClick={openDialog}>Create event</button>
            </div>
            <div className="box-container-other">
                <h2>To Do</h2>
                <div className="box-other">
                    <div className="box-event">
                        <h3>I have many things to do</h3>
                        <p>^This is indeed true</p>
                    </div>
                </div>
            </div>
            <div className="box-container-other">
                <h2>Future events</h2>
                <div className="box-other">
                    <div className="box-event">
                        <h3>I have many events coming up</h3>
                        <p>^Some of which are to sup</p>
                    </div>
                </div>
            </div>

            {isDialogOpen && (
                <div className="backdrop" onClick={closeDialog}></div>
            )}
            {isDialogOpen && (
            <dialog open>
                <h3>Create New Event</h3>
                <form onSubmit={handleSaveEvent}>
                    <label>
                        Event Name<br></br>
                        <input type="text" name="eventName" value={eventName} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Event Time<br></br>
                        <input type="time" name="eventTime" value={eventTime} onChange={handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={closeDialog}>Cancel</button>
                </form>
            </dialog>
            )}
        </div>
    </main>
    )
}

export default Home;