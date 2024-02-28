import React from "react";
import { Link } from "react-router-dom";
import jaydipPass from "../Images/jaydippass.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const iconSize = 1.5;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className="navbarTitle d-flex align-items-center ms-2">
            <img
              className="rounded-circle profileimg me-2"
              src={jaydipPass}
              alt="profilePhoto"
            />
            <div className="d-flex flex-column">
              <span className="fw-semibold ms-2">Jaydip Nemade</span>
              <span className="subtitle ms-2">Software Developer</span>
            </div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-2" id="navbarNav">
          <ul className="navbar-nav flex-column w-100">
            <hr />
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="bi bi-house-door ps-4 pe-2 animat"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="bi bi-person ps-4 pe-2 animat"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="bi bi-suitcase-lg ps-4 pe-2 animat"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="bi bi-stack ps-4 pe-2 animat"></i> Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="bi bi-envelope-open ps-4 pe-2  animat"></i>{" "}
                Contact
                <hr />
              </Link>
            </li>
            <hr />

            <div className="social-links d-flex justify-content-between mb-5 mt-5 ms-4 me-2 ">
              <a href="./" className="social-icon">
                <FaTwitter size={`${iconSize}em`} />
              </a>
              <a href="./" className="social-icon">
                <FaInstagram size={`${iconSize}em`} />
              </a>
              <a href="./" className="social-icon">
                <FaLinkedin size={`${iconSize}em`} />
              </a>
              <a href="./" className="social-icon">
                <FaGithub size={`${iconSize}em`} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
