import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/components/header/Header";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
