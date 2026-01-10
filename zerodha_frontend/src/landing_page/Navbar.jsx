import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top bg-white"
      style={{ height: "64px" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/media/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "24px" }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav align-items-center gap-4">
            {/* Kite button */}
            <li className="nav-item">
              <button
                className="btn btn-link nav-link d-flex align-items-center gap-2 p-0"
                style={{
                  color: "#387ed1",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onClick={() => {
                  window.location.href = "http://localhost:5173/signup";
                }}
              >
                <img
                  src="/media/kite-logo.svg"
                  alt="Kite"
                  style={{ width: "16px", height: "16px" }}
                />
                Go with Kite
              </button>
            </li>

            {/* Other links */}
            <li className="nav-item">
              <Link className="nav-link zerodha-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link zerodha-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link zerodha-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link zerodha-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
