import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <div className="logo">
            <img src="assets/AK-DEV.svg" alt="Aravindhakumar G-Freelance Web Developer" />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-me">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-portfolio">My Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <a href="/subscribe" className="btn btn-primary subscribe-button">Subscribe</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
