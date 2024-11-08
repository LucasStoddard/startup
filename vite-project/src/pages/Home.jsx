import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            events: {},
            eventName: "", 
            eventTime: "", 
        };
    }

    openDialog = () => {
        this.setState({ isDialogOpen: true });
    };
    
    closeDialog = () => {
        this.setState({ isDialogOpen: false });
    };

    handleInputChange = (tempEvent) => {
        this.setState({ [tempEvent.target.name]: tempEvent.target.value });
    };

    handleSaveEvent = (tempEvent) => {
        tempEvent.preventDefault();

        const {eventName, eventTime} = this.state;

        if (!eventName || !eventTime) {
            alert("Please enter both event name and time.");
            return;
        }

        const newEvent = {
            name: eventName,
            time: eventTime,
        };

        this.setState((prevState) => ({
            events: {...prevState.events, [eventTime]: newEvent},
            eventName: "",
            eventTime: "",
            isDialogOpen: false,
        }));
    }

    render() {
        const sortedEvents = Object.values(this.state.events).sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.time}:00`);
            const timeB = new Date(`1970-01-01T${b.time}:00`);
            return timeA - timeB;
        });

        return (
        <main>
            <div class="container">
                <div class="box-container left">
                    <h2>Weather</h2>
                    <p>WebSocket Data from a third party service</p>
                </div>
                <div class="box-container-calendar">
                    <h2>Calendar</h2>
                    <div class="box-calendar">
                        {sortedEvents.map((tempEvent, index) => (
                            <div key={index} class="box-event">
                                <h3>{tempEvent.name}</h3> 
                                <p>{tempEvent.time}</p> {/* May convert in the future to AM/PM but it seems like a nightmare to do */}
                            </div>
                        ))}
                    </div>
                    <button onClick={this.openDialog}>Create event</button>
                </div>
                <div class="box-container center right">
                    <h2>TO DO</h2>
                    <p>Database Data will be inserted here eventually</p>
                </div>
                <div class="box-container right">
                    <h2>Future events</h2>
                    <p>Database Data</p>
                </div>

                {this.state.isDialogOpen && (
                    <div className="backdrop" onClick={this.closeDialog}></div>
                )}
                {this.state.isDialogOpen && (
                <dialog open>
                    <h3>Create New Event</h3>
                    <form onSubmit={this.handleSaveEvent}>
                        <label>
                            Event Name<br></br>
                            <input type="text" name="eventName" value={this.state.eventName} onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Event Time<br></br>
                            <input type="time" name="eventTime" value={this.state.eventTime} onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <button type="submit">Save</button>
                        <button type="button" onClick={this.closeDialog}>Cancel</button>
                    </form>
                </dialog>
                )}
            </div>
        </main>
        )
    }
}

export default Home;