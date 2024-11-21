import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Need to change my home page so that login is first of course
// Next thing I need to do is pass username and userid into the pages 
// So that with all the storage calls and retreval calls to the database
// take the userid in mind so that everyone has a unique calendar.

function App() { // Calendar leads to a different page, home page is just at base page
  // State to manage user authentication
  const [authToken, setAuthToken] = useState(null);
  const [userid, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in when the app loads
  useEffect(() => {
      const storedToken = localStorage.getItem('authToken');
      const storedUserid = localStorage.getItem('userid');
      
      if (storedToken && storedUserid) {
          setAuthToken(storedToken);
          setUserId(storedUserid);
          setIsLoggedIn(true);
      }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userid');
    setAuthToken(null);
    setUserId(null);
    setIsLoggedIn(false);
    window.location.href = '/login';  // Or redirect to home
  };

  return (
    <div>
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
