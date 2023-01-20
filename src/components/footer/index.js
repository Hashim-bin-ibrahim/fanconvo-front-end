import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div className="wrapper">
      <div className="footer_part one">
        <img src="../../Fanconvo-header-logo.png" alt="" width={"150px"} />
      </div>
      <div className="footer_part two">
        <p>How Fanconvo Works</p>
        <p>2021 Fanconvo</p>
      </div>
      <div className="footer_part three">
        <p>Terms of use</p>
      </div>
      <div className="footer_part four">
        <p>Contact Us</p>
      </div>
    </div>
  );
}
