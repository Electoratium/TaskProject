import React from 'react';
import { Link } from 'react-router-dom';
import LoginBar from '../../containers/LoginBar';


function Header() {
  return (
    <header>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse justify-content-between">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/"><span className="navbar-brand">Home</span></Link>
        <LoginBar />
      </nav>
    </header>
  );
}

export default Header;
