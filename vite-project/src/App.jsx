import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { // Calendar leads to a different page, home page is just at base page
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
