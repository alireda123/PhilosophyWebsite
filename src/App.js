import "./App.css"
import Navbar from "./Navbar"
import Blogs from "./Blogs"
import React from "react"
import Forms from "./Forms"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {outlet} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={[<Navbar />, <Blogs />]} />
        <Route path="/Forms" element={[<Navbar />, <Forms />]}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
