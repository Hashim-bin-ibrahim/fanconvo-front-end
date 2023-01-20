import React from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header_wrapper">
      <div className="main_header_wrap">
        <div className="right-header">
          <img src="../../Fanconvo-header-logo.png" alt="" width={"300px"} />
        </div>
        <div className="left_header">
          <div className="signup">
            <h3>Sign Up</h3>
          </div>
          <div className="login">
            <h3>Login</h3>
          </div>
        </div>
      </div>
      <div className="description">
        <h4>A market place for conversation,mentorships and performances.</h4>
      </div>
      <div className="search_area">
        <div className="search_title">
          <h3>Search new Talent</h3>
        </div>
        <div className="search_bar">
          <input className="input_bar" type="text" name="" id=""></input>
          <BsSearch className="search_icon" />
        </div>
      </div>
    </div>
  );
}
