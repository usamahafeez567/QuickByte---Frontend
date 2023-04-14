import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Signup from "./components/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="Nav-App">
          <Navbar />
          <div className="App">
            <Routes>
              <Route exact path="/" Component={Home}></Route>
              <Route path="/about" Component={About}></Route>
              <Route path="/contact" Component={Contact}></Route>
              <Route path="/signup" Component={Signup}></Route>
              <Route path="/login" Component={Login}></Route>
              <Route path="/dashboard" Component={Dashboard}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
