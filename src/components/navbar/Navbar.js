import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
      </nav>
      <nav className="nav">
        <Link className="link" to="/sign-up">
          Sign Up
        </Link>
      </nav>
      <nav className="nav">
        <Link className="link" to="/login">
          Login
        </Link>
      </nav>
      <nav className="nav">
        <Link className="link" to="/jwst">
          JWST
        </Link>
      </nav>
      <nav className="nav">
        <Link className="link" to="/webgl">
          WebGL Practice
        </Link>
      </nav>
    </div>
  );
}
