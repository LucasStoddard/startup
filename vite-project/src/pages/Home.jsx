import React, {useState} from "react";
import Weather from '../components/Weather';
import { getCurrentDate } from './date';

function Home() {
    // Normal parts
    const [isDialogOpenEvent, setIsDialogOpenEvent] = useState(false);
    const [isDialogOpenTodo, setIsDialogOpenTodo] = useState(false);
    const [isDialogOpenFutureEvents, setIsDialogOpenFutureEvents] = useState(false);    
    const [events, setEvents] = useState({});
    const [eventName, setEventName] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [todo, setTodo] = useState({});
    const [futureEvents, setFutureEvents] = useState({});


    const openDialogEvent = () => {
        setIsDialogOpenEvent(true);
    };
    
    const closeDialogEvent = () => {
        setIsDialogOpenEvent(false);
    };

    const openDialogTodo = () => {
        setIsDialogOpenTodo(true);
    };
    
    const closeDialogTodo = () => {
        setIsDialogOpenTodo(false);
    };

    const openDialogFutureEvents = () => {
        setIsDialogOpenFutureEvents(true);
    };
    
    const closeDialogFutureEvents = () => {
        setIsDialogOpenFutureEvents(false);
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

    const handleSaveTodo = (tempEvent) => {
        tempEvent.preventDefault();

        if (!eventName || !eventTime) {
            alert("Please enter both to do name and time.");
            return;
        }

        const newEvent = { name: eventName, time: eventTime };

        setTodo((prevTodos) => ({
            ...prevTodos,
            [eventTime]: newEvent,
        }));
        // fetch('/api/event', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newEvent),
        // });
        setEventName("");
        setEventTime("");
        setIsDialogOpenTodo(false);
    }

    const handleSaveFutureEvents = (tempEvent) => {
        tempEvent.preventDefault();

        if (!eventName || !eventTime) {
            alert("Please enter both future name and time.");
            return;
        }

        const newEvent = { name: eventName, time: eventTime };

        setFutureEvents((prevFutureEvents) => ({
            ...prevFutureEvents,
            [eventTime]: newEvent,
        }));
        // fetch('/api/event', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newEvent),
        // });
        setEventName("");
        setEventTime("");
        setIsDialogOpenFutureEvents(false);
    }

    const sortedEvents = Object.values(events).sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}:00`);
        const timeB = new Date(`1970-01-01T${b.time}:00`);
        return timeA - timeB;
    });

    const sortedTodo = Object.values(todo).sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}:00`);
        const timeB = new Date(`1970-01-01T${b.time}:00`);
        return timeA - timeB;
    });

    const sortedFutureEvents = Object.values(futureEvents).sort((a, b) => {
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
                <h4 id="calendar"></h4>
                <div className="box-calendar">
                    {sortedEvents.map((tempEvent, index) => (
                        <div key={index} className="box-event">
                            <h3>{tempEvent.name}</h3> 
                            <p>{tempEvent.time}</p>
                        </div>
                    ))}
                </div>
                <button onClick={openDialogEvent}>Create Event</button>
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
                <button onClick={openDialogTodo}>Create To Do Item</button>
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
                <button onClick={openDialogFutureEvents}>Create Future Event</button>
            </div>
            
            {isDialogOpenEvent && (
                <div className="backdrop" onClick={closeDialogEvent}></div>
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
                    <button type="button" onClick={closeDialogEvent}>Cancel</button>
                </form>
            </dialog>
            )}
            
            {isDialogOpenTodo && (
                <div className="backdrop" onClick={closeDialogTodo}></div>
            )}
            {isDialogOpenTodo && (
            <dialog open>
                <h3>Create New To Do Item</h3>
                <form onSubmit={handleSaveTodo}>
                    <label>
                        To Do Name<br></br>
                        <input type="text" name="eventName" value={eventName} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        To Do Time<br></br>
                        <input type="time" name="eventTime" value={eventTime} onChange={handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={closeDialogTodo}>Cancel</button>
                </form>
            </dialog>
            )}

            {isDialogOpenFutureEvents && (
                <div className="backdrop" onClick={closeDialogFutureEvents}></div>
            )}
            {isDialogOpenFutureEvents && (
            <dialog open>
                <h3>Create New Future Event</h3>
                <form onSubmit={handleSaveFutureEvents}>
                    <label>
                        Future Event Name<br></br>
                        <input type="text" name="eventName" value={eventName} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Future Event Time<br></br>
                        <input type="time" name="eventTime" value={eventTime} onChange={handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={closeDialogFutureEvents}>Cancel</button>
                </form>
            </dialog>
            )}
        </div>
    </main>
    )
}

export default Home;