import React, {useState} from "react";
import Weather from '../components/Weather';
import { getCurrentDate } from './date';

function Home() {
    // Normal parts
    const [isDialogOpenEvent, setIsDialogOpenEvent] = useState(false);
    const [isDialogOpenTodo, setIsDialogOpenTodo] = useState(false);
    const [isDialogOpenFutureEvents, FutureEvents] = useState(false);    
    const [events, setEvents] = useState({});
    const [eventName, setEventName] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [todo, setTodo] = useState({});
    const [todoName, setTodoName] = useState("");
    const [todoTime, settodoTime] = useState("");

    const openDialogEvent = () => {
        setIsDialogOpenEvent(true);
    };
    
    const closeDialogEvent = () => {
        setIsDialogOpenEvent(false);
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
        // fetch('/api/event', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newEvent),
        // });
        setEventName("");
        setEventTime("");
        setIsDialogOpenEvent(false);
    }

    const sortedEvents = Object.values(events).sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}:00`);
        const timeB = new Date(`1970-01-01T${b.time}:00`);
        return timeA - timeB;
    });

    const sortedTodo = Object.values(events).sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}:00`);
        const timeB = new Date(`1970-01-01T${b.time}:00`);
        return timeA - timeB;
    });

    const sortedFutureEvents = Object.values(events).sort((a, b) => {
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
                            <p>{tempEvent.time}</p>
                        </div>
                    ))}
                </div>
                <button onClick={openDialogEvent}>Create event</button>
            </div>
            <div className="box-container-calendar">   
                <h2>To Do</h2>
                <div className="box-calendar">
                    {sortedTodo.map((tempEvent, index) => (
                        <div key={index} className="box-event">
                            <h3>{tempEvent.name}</h3> 
                            <p>{tempEvent.time}</p> 
                        </div>
                    ))}
                </div>
                <button onClick={openDialogEvent}>Create To Do Item</button>
            </div>
            <div className="box-container-calendar">   
                <h2>Future Events</h2>
                <div className="box-calendar">
                    {sortedFutureEvents.map((tempEvent, index) => (
                        <div key={index} className="box-event">
                            <h3>{tempEvent.name}</h3> 
                            <p>{tempEvent.time}</p> 
                        </div>
                    ))}
                </div>
                <button onClick={openDialogEvent}>Create To Do Item</button>
            </div>

            {isDialogOpenEvent && (
                <div className="backdrop" onClick={closeDialog}></div>
            )}
            {isDialogOpenEvent && (
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