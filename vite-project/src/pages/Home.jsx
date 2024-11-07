import React from "react";

class Home extends React.Component{
    render() {
        return (
        <main>
            <div class="container">
                <div class="box-container left">
                <p>Weather will go here</p>
                <p>WebSocket Data from a third party service</p>
                </div>
                <div class="box-container center left">
                <p>Calendar will go here</p>
                <p>Application Data & WebSocket Data & Database Data</p>
                </div>
                <div class="box-container center right">
                <p>TO DO will go here</p>
                <p>Database Data will be inserted here eventually</p>
                </div>
                <div class="box-container right">
                <p>Future events will go here</p>
                <p>Database Data</p>
                </div>
            </div>
        </main>
        )
    }
}

export default Home;