import React from "react";

class Home extends React.Component{
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
                    <button>Create event</button>
                </div>
                <div class="box-container center right">
                    <h2>TO DO</h2>
                    <p>Database Data will be inserted here eventually</p>
                </div>
                <div class="box-container right">
                    <h2>Future events</h2>
                    <p>Database Data</p>
                </div>
            </div>
        </main>
        )
    }
}

export default Home;