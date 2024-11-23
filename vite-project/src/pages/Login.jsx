import React from "react";
import {useState, useEffect} from "react";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = async (event) => {
      event.preventDefault();

      const credentials = { email: userName, password };
      try {
          const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
          });
          if (response.ok) {
              const result = await response.json();
              console.log('Logged in:', result);
              localStorage.setItem('authToken', result.token);
              localStorage.setItem('userid', result.userid);
              localStorage.setItem('userName', result.userName);
              setUsername(result.userName);
              window.location.href = '/'; 
          } else {
              const result = await response.json();
              setError(result.msg || 'Login failed');
          }
      } catch (err) {
          setError('An error occurred. Please try again later.');
      }
  };

  const handleCreate = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    const newUser = { email: userName, password };
    try {
        const response = await fetch('/api/auth/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Account created successfully:', result);
            localStorage.setItem('authToken', result.token);
            localStorage.setItem('userid', result.userid);
            localStorage.setItem('userName', result.userName);
            setUsername(result.userName);
            window.location.href = '/';
        } else {
            const errorData = await response.json();
            console.error('Error creating account:', errorData.msg);
            alert('Account creation failed: ' + errorData.msg);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while creating the account.');
    }
};

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
      <main className="box-container-login">
          <h2>Login to PLANr</h2>
          <form>
              <div>
                  <span>Username</span>
                  <input
                      type="username"
                      placeholder="username"
                      value={userName}
                      onChange={handleUsernameChange}
                      required
                  />
              </div>
              <br />
              <div>
                  <span>Password</span>
                  <input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                  />
              </div>
              <br />
              <button type="submit" onClick={handleLogin}>Login</button>
                <button type="button" onClick={handleCreate}>Create Account</button>
          </form>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          <h3>About PLANr</h3>
          <span>
              We all have too much to do and just not enough time. Thankfully, technology
              has offered us the opportunity to accurately plan out our day-to-day. Just one
              small problem though, and that is the planners themselves. Planning is a very
              quick process that involves many decisions initially and many small adjustments
              as time passes, so why are so many planning applications so clunky and slow?
              That is where PLANr comes in. A simplistic planning app that aims to convey what
              you already had in mind and does it quickly and easily. Just add in the plan you
              have for your day, event by event, shift it around as you please, and then
              execute your plan.
          </span>
      </main>
  );
}

export default Login;