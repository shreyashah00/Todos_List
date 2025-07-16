import React from 'react';
import './Header.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand brand-text" to="/">📝 {props.title}</Link>

        <div className="d-flex align-items-center flex-grow-1 justify-content-center nav-links-wrapper">
          <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="#">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/about">About</Link>
            </li>
          </ul>
        </div>
        {props.searchBar ?
          <form className="d-flex search-form">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search tasks..."
              aria-label="Search"
            />
            <button className="btn btn-warning search-btn" type="submit">Search</button>
          </form> : ""}
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Your Title pass",
};
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
};