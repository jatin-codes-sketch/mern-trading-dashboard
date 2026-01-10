import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom p-3 fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-between ps-4"
          id="navbarTogglerDemo01"
        >
          <Link class="navbar-brand" to="/">
            <img src="media/logo.svg" alt="Logo" style={{ width: "30%" }} />
          </Link>
          <form class="d-flex fs-5">
            <ul class="navbar-nav mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link
                  class="nav-link me-5"
                  aria-current="page"
                  to='signup'
                  style={{ color: "#666666" }}
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item me-4">
                <Link class="nav-link" to='/about' style={{ color: "#666666" }}>
                  About
                </Link>
              </li>
              <li class="nav-item me-4">
                <Link class="nav-link" to='/product' style={{ color: "#666666" }}>
                  Product
                </Link>
              </li>
              <li class="nav-item me-4">
                <Link class="nav-link" to='/pricing' style={{ color: "#666666" }}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item me-4">
                <Link class="nav-link" to='/support' style={{ color: "#666666" }}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
