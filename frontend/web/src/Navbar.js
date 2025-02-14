import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Neuro-Assist</Link>
      </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/learning">Learning</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/health">Health</Link>
            <Link to="/routine">Routine</Link>
            <Link to="/login" className="btn">Login</Link>
        </div>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </div>
    </nav>
  );
};

export default Navbar;
