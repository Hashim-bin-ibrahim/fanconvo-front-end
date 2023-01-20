import React from "react";
import { useState } from "react";
import { signup } from "../../functions";
import "./style.css";
export default function Body() {
  const [talentSignup, setTalentSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(firstname, lastname, email, timezone, username, password);

  const handleSubmit = async (e) => {
    // e.preventdefault()
    if (isChecked) {
      let data = await signup(
        firstname,
        lastname,
        username,
        email,
        timezone,
        password,
        talentSignup
      );
      console.log("dataaaas", data.message);
      setError(data.error);
      setMessage(data.message);
      console.log("message ", message);
    } else {
      alert("Please agree to the Terms and Condetions...");
    }
  };

  return (
    <div className="main_wrapper">
      <div className="switch_user">
        <div
          className={!talentSignup ? "fan_user" : ""}
          onClick={() => setTalentSignup(!talentSignup)}
        >
          <p>FAN SIGNUP</p>
        </div>
        <div
          className={talentSignup ? "fan_user" : ""}
          onClick={() => setTalentSignup(!talentSignup)}
        >
          <p>TALENT SIGNUP</p>
        </div>
      </div>
      <div className="topic">
        <p>Create Your Fan Account</p>
      </div>
      <div className="input">
        <p>First Name *</p>
        <input
          className="input_filed"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <p>Last Name *</p>
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <p>Username *</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p>Email *</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Timezone *</p>
        <input
          type="text"
          placeholder="Timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />

        <p>Password *</p>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error">{error ? <span>{error}</span> : ""}</div>
        <div className="message">
          {!error && message ? <span>{message}</span> : ""}
        </div>
      </div>
      <div className="terms_and_condetion">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => setIsChecked(!isChecked)}
        />
        <p>
          I agree to The <span>Terms and condoitions</span>
        </p>
      </div>
      <div className="submit_btn">
        <button onClick={handleSubmit}>SIGN UP</button>
      </div>
      <div className="way_to_login">
        <p>
          Already have an account ?{" "}
          <a href="">
            <span>Log in</span>
          </a>
        </p>
      </div>
    </div>
  );
}
