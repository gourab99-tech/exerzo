import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-warning navbar-expand-lg shadow sm:rounded-lg navbar-toggler navbar-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="navbar-brand"><h2>Exerzo</h2></Link>
        <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
