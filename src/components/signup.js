// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Signup() {
//   const navi = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [matchError, setMatchError] = useState({});

//   function validate() {
//     let errors = {};
//     let matchError = {};

//     if (!name.trim()) {
//       errors.name = "Name is Required";
//     }
//     if (!email.trim()) {
//       errors.email = "Email is Required";
//     } else if (!email.includes("@")) {
//       errors.email = "Invalid email";
//     }
//     if (password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     if (!confirmPassword) {
//       errors.confirmPassword = "Confirm Password is Required";
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = "Password do not Match";
//     } else {
//       matchError.confirmPassword = "Password Match";
//     }
//     setErrors(errors);
//     setMatchError(matchError);
//     return Object.keys(errors).length === 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const isValid = validate();

//     if (isValid) {
//       // alert("Register Successfully!")

//       console.log("Name: ", name);
//       console.log("Email: ", email);
//       console.log("Password: ", password);
//       console.log("ConfirmPassword: ", confirmPassword);
//       navi("/dashboard");
//     }
//   }
//   return (
//     // {/* Sign UpForm */}
//     <>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 mt-5 body-login">
//             <h1
//               className="text-center fw-bold mb-2"
//               style={{ color: "#56E39F" }}
//             >
//               Signup Panel
//             </h1>
//             <p className="mb-4 fs-5 mt-3" style={{ color: "#56E39F" }}>
//               Sign up or log in to continue
//             </p>
//             <form onSubmit={Signup && handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Name:
//                 </label>
//                 <input
//                   placeholder="Enter your name"
//                   type="text"
//                   className="form-control mt-1 rounded-pill"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <div className="sm" style={{ color: "red" }}>
//                   {errors.name}
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="form-control mt-1 rounded-pill"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="sm" style={{ color: "red" }}>
//                   {errors.email}
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password:
//                 </label>
//                 <input
//                   placeholder="Enter your password"
//                   type="password"
//                   className="form-control mt-1 rounded-pill"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div className="sm" style={{ color: "red" }}>
//                   {errors.password}
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Confirm Password:
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter your confirm password"
//                   className="form-control mt-1 rounded-pill"
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <div className="sm" style={{ color: "red" }}>
//                   {errors.confirmPassword}
//                 </div>
//                 <div className="sm" style={{ color: "Green" }}>
//                   {matchError.confirmPassword}
//                 </div>
//               </div>
//               {/* Button */}
//               <button
//                 className="btn btn-light mt-3"
//                 onClick={() => {
//                   navi("/login");
//                 }}
//                 style={{
//                   color: "#56E39F",
//                   backgroundColor: "#063F71",
//                   borderColor: "#56E39F",
//                   borderRadius: "20px",
//                 }}
//               >
//                 Do you have an account? Login here!
//               </button>
//               <br />
//               <button
//                 className="btn btn-light mt-3"
//                 type="submit"
//                 style={{
//                   color: "#56E39F",
//                   backgroundColor: "#063F71",
//                   borderColor: "#56E39F",
//                   borderRadius: "20px",
//                 }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Internal Page CSS */}
//       <style>
//         {`

//       .btn-light:hover {
//         color: #063f71 !important;
//         background-color: #56e39f !important;
//         border-color: #56e39f !important;
//       }
//       .container {
//         position: relative;
//         width: 100%;
//         min-height: 100vh;
//       }

//       .body-login {
//         padding: 60px 80px 60px 80px;
//         border-radius: 20px;
//         box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
//       }
//       .custom-alert {
//         background-color: #;
//         color: #032039;
//       }
//       .form-label{
//         color: #56E39F;
//       }
//     `}
//       </style>
//     </>
//   );
// }

//signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [matchError, setMatchError] = useState("");

  const validate = () => {
    let errors = {};
    let matchError = "";

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

    // Check for password length
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    // Check for empty confirm password
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      matchError = "Password Match";
    }

    setNameError(errors.name || "");
    setEmailError(errors.email || "");
    setPasswordError(errors.password || "");
    setConfirmPasswordError(errors.confirmPassword || "");
    setMatchError(matchError);

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

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Password: ", password);
      console.log("Confirm Password: ", confirmPassword);
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
            {nameError ||
            emailError ||
            passwordError ||
            confirmPasswordError ? (
              <div className="alert custom-alert" role="alert">
                {nameError && <p>{nameError}</p>}
                {emailError && <p>{emailError}</p>}
                {passwordError && <p>{passwordError}</p>}
                {confirmPasswordError && <p>{confirmPasswordError}</p>}
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
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="form-control rounded-pill"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div className="sm mt-1" style={{ color: "Green" }}>
                  {matchError}
                </div>
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
