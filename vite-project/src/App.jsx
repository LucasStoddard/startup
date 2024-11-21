import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthState from './login/authState';

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Need to change my home page so that login is first of course
// Next thing I need to do is pass username and userid into the pages 
// So that with all the storage calls and retreval calls to the database
// take the userid in mind so that everyone has a unique calendar.

function App() { // Calendar leads to a different page, home page is just at base page
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
