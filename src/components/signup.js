//signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const validate = () => {
    let errors = {};
    // Check for empty name
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Check for valid email format
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "Invalid email";
    }

    // Check for empty password
    if (!password) {
      errors.password = "Password is required";
    }
    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (mobileNumber.length < 11) {
      errors.mobileNumber = "Please enter 11 digit Mobile Number";
    }

    // Check for password length
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    setNameError(errors.name || "");
    setEmailError(errors.email || "");
    setPasswordError(errors.password || "");
    setMobileNumberError(errors.mobileNumber || "");

    // If there are no errors, return true for valid form
    return Object.keys(errors).length === 0;
  };
  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  function handleMobileNumberChange(event) {
    setMobileNumber(event.target.value);
    setMobileNumberError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      navi("/dashboard");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 mt-5 body-signup">
            <h1
              className="text-center fw-bold mb-2"
              style={{ color: "#56E39F" }}
            >
              Sign Up
            </h1>
            <p className="mb-4 fs-5 mt-3" style={{ color: "#56E39F" }}>
              Create a new account
            </p>
            {/* Bootstrap Alerts */}
            {nameError || emailError || passwordError || mobileNumberError ? (
              <div className="alert custom-alert" role="alert">
                {nameError && <p>{nameError}</p>}
                {emailError && <p>{emailError}</p>}
                {mobileNumberError && <p>{mobileNumberError}</p>}
                {passwordError && <p>{passwordError}</p>}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control rounded-pill"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control rounded-pill"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Mobile Number:
                </label>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  className="form-control rounded-pill"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control rounded-pill"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="btn btn-light mt-2"
                onClick={() => {
                  navi("/login");
                }}
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Do you have an account? Login here!
              </button>
              <br />
              <div className=" mt-3">
                <button
                  type="submit"
                  className="btn btn-light"
                  style={{
                    color: "#56E39F",
                    backgroundColor: "#063F71",
                    borderColor: "#56E39F",
                    borderRadius: "20px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Internal Page CSS */}
      <style>
        {`

      .btn-light:hover {
        color: #063f71 !important;
        background-color: #56e39f !important;
        border-color: #56e39f !important;
      }
      .container {
        position: relative;
        width: 100%;
        min-height: 100vh;
      }

      .body-signup {
        padding: 60px 80px 60px 80px;
        border-radius: 20px;
        box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
      }
      .custom-alert {
        background-color: #56E39F;
        color: #032039;
      }
      .form-label{
        color: #56E39F;
      }
    `}
      </style>
    </>
  );
}
