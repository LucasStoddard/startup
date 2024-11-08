import React from "react";
import './Login.css';

class Login extends React.Component{ // Having a slight problem with login.css
    render() {
        return (
        <main class="box-container-main" >
            <h2>Login to PLANr</h2>
            <form method="get" action="/">
              <div>
                <span>Username</span><br></br>
                <input type="text" placeholder="your@email.com" />
              </div>
              <br></br>
              <div>
                <span>Password</span><br></br>
                <input type="password" placeholder="password" />
              </div>
              <br></br>
              <button type="submit">Login</button>
              <button type="submit">Create</button>
            </form>
            <h3>About PLANr</h3>
            <span>We all have too much to do an just not enough time. Thankfully technology 
              has offered us the opportunity to accurately plan out our day to day. Just one 
              small problem though, and that is the planners themselves. Planning is a very 
              quick process that involves many decisions initially and many small adjustments 
              as time passes, so why are so many planning applications so clunky and slow? 
              That is where PLANr comes in. A simplistic planning app that aims to convey what 
              you already had in mind and does it quickly and easily. Just add in the plan you 
              have for your day event by event, shift it around as you please, and then 
              execute your plan.</span>
        </main>
        )
    }
}

export default Login;