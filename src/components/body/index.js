import React from "react";
import { useState } from "react";
import { signup } from "../../functions";
import PulseLoader from "react-spinners/PulseLoader";

import "./style.css";
export default function Body() {
  const [talentSignup, setTalentSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    setTimeout(async () => {
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
        setError(data.errors);
        setMessage(data.message);
      } else {
        alert("Please agree to the Terms and Condetions...");
      }
      setLoading(false);
    }, 2000);
  };

  console.log("error", error);

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
        {error
          .filter((error) => error.param === "firstname")
          .map((error, index) => (
            <div className="error">
              <span key={index}>{error.msg}</span>
            </div>
          ))}

        <p>Last Name *</p>
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        {error
          .filter((error) => error.param === "lastname")
          .map((error, index) => (
            <div className="error">
              <span key={index}>{error.msg}</span>
            </div>
          ))}

        <p>Username *</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error
          .filter((error) => error.param === "username")
          .map((error, index) => (
            <div className="error">
              <span key={index}>{error.msg}</span>
            </div>
          ))}

        <p>Email *</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error
          .filter((error) => error.param === "email")
          .map((error, index) => (
            <div className="error">
              <span key={index}>{error.msg}</span>
            </div>
          ))}

        <p>Timezone *</p>
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
          <option value="UTC-12">Select Your Timezone</option>
          <option value="PST8PDT - 6:30AM">PST8PDT - 6:30AM</option>
          <option value="UTC-11">UTC-11</option>
          <option value="UTC-10">UTC-10</option>
        </select>

        <p>Password *</p>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error
          .filter((error) => error.param === "password")
          .map((error, index) => (
            <div className="error">
              <span key={index}>{error.msg}</span>
            </div>
          ))}

        <div className="message">
          {/* {!error && message ? <span>{message}</span> : ""} */}
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
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? <PulseLoader color="black" size={5} /> : "Sign Up"}
        </button>
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
