import React from "react";
import "../NavBar/Nav.css";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="navBar">
        <div className="nav">
          <div className="logo_about">
            <button className="logoBtn">
              queue<span>overflow</span>
            </button>
            <button className="aboutBtn">About</button>
          </div>

          <div className="search">
            <input
              type="search"
              name=""
              id="searchIcon"
              placeholder={`search...`}
            />
          </div>

          <div className="sign_log">
            <button className="logIn">Log in</button>
            <button className="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
