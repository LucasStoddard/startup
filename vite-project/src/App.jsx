import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() { //<Route exact path="/" component={Home}/>
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
