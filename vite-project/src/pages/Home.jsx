import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
        };
    }
    
    openDialog = () => {
        this.setState({ isDialogOpen: true });
    };
    
    closeDialog = () => {
        this.setState({ isDialogOpen: false });
    };

    render() {
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
                    <form>
                    <label>
                        Event Name<br></br>
                        <input type="text" name="eventName" />
                    </label>
                    <br />
                    <label>
                        Event Time<br></br>
                        <input type="time" name="eventDate" />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={this.closeDialog}>
                        Cancel
                    </button>
                    </form>
                </dialog>
                )}
            </div>
        </main>
        )
    }
}

export default Home;