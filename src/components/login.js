import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Modal } from "react-bootstrap";

export default function Login(props) {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [showModal, setShowModal] = useState(false);

  function validate() {
    let emailError = "";
    let passwordError = "";

    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    if (password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (emailError || passwordError) {
      return false;
    }

    return true;
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      // setShowModal(true);
      console.log("Email: ", email);
      console.log("Password: ", password);
      navi("/dashboard");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 mt-5 body-login">
            <h1
              className="text-center fw-bold mb-2"
              style={{ color: "#56E39F" }}
            >
              Welcome!
            </h1>
            <p className="mb-4 fw-bold mt-3" style={{ color: "#56E39F" }}>
              Sign up or log in to continue
            </p>
            {/* Bootstrap Alert */}
            {emailError || passwordError ? (
              <div className="alert alert-danger" role="alert">
                {emailError && <p>{emailError}</p>}
                {passwordError && <p>{passwordError}</p>}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ color: "#56E39F" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mt-1 rounded-pill"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3" style={{ color: "#56E39F" }}>
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="form-control mt-1 rounded-pill"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {/* Button */}
              <button
                className="btn btn-light mt-3"
                onClick={() => navi("/signup")}
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Don't have an account? Register here!
              </button>
              <br />
              <button
                className="btn btn-light mt-3"
                type="submit"
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Modal
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="sm"
      >
        <Modal.Body className="text-center">
          <h5>Login Successful!</h5>
          <p>You have successfully logged in.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: "#063F71",
              borderColor: "#56E39F",
              borderRadius: "50px",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      <style>
        {`
          .btn-light:hover {
          color: #063f71 !important;
          background-color: #56e39f !important;
          border-color: #56e39f !important;
        }
        .container{
 
          width: 100%;
          height: 88vh
        }
        .row {
          margin-left: 130px;
          max-width: 1024px;
      }
        .body-login{
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 0.2rem 0.9rem rgba(0,0,0,.55);
        }
        
        `}
      </style>
    </>
  );
  // return (
  //   // {/* Login Form */}
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-lg-6 col-md-6 mt-3 ms-auto">
  //           <h1
  //             className="text-center fw-bold mt-2 mb-2"
  //             style={{ color: "#56E39F" }}
  //           >
  //             Welcome!
  //           </h1>
  //           <p className="mb-4 fw-bold mt-2" style={{ color: "#56E39F" }}>
  //             Sign up or log in to continue
  //           </p>
  //           {/* Bootstrap Alert */}
  //           {emailError || passwordError ? (
  //             <div className="alert alert-danger" role="alert">
  //               {emailError && <p>{emailError}</p>}
  //               {passwordError && <p>{passwordError}</p>}
  //             </div>
  //           ) : null}

  //           <form onSubmit={handleSubmit}>
  //             <div className="mb-3">
  //               <label
  //                 htmlFor="email"
  //                 className="form-label"
  //                 style={{ color: "#56E39F" }}
  //               >
  //                 Email:
  //               </label>
  //               <input
  //                 type="email"
  //                 placeholder="Enter your email"
  //                 className="form-control mt-1"
  //                 id="email"
  //                 value={email}
  //                 onChange={handleEmailChange}
  //               />
  //             </div>
  //             <div className="mb-3" style={{ color: "#56E39F" }}>
  //               <label htmlFor="password" className="form-label">
  //                 Password:
  //               </label>
  //               <input
  //                 placeholder="Enter your password"
  //                 type="password"
  //                 className="form-control mt-1"
  //                 id="password"
  //                 value={password}
  //                 onChange={handlePasswordChange}
  //               />
  //             </div>
  //             {/* Button */}
  //             <button
  //               className="btn btn-light mt-3"
  //               onClick={() => navi("/signup")}
  //               style={{
  //                 color: "#56E39F",
  //                 backgroundColor: "#063F71",
  //                 borderColor: "#56E39F",
  //               }}
  //             >
  //               Don't have an account? Register here!
  //             </button>
  //             <br />
  //             <button
  //               className="btn btn-light mt-3"
  //               type="submit"
  //               style={{
  //                 color: "#56E39F",
  //                 backgroundColor: "#063F71",
  //                 borderColor: "#56E39F",
  //               }}
  //             >
  //               Submit
  //             </button>
  //             {/* Modal Feature */}
  //             <div>
  //               <Modal show={showModal} onHide={() => setShowModal(false)}>
  //                 <Modal.Header closeButton>
  //                   <Modal.Title>Login Successfully!</Modal.Title>
  //                 </Modal.Header>
  //                 <Modal.Body>You have successfully logged in.</Modal.Body>
  //                 <Modal.Footer>
  //                   <Button
  //                     variant="secondary"
  //                     onClick={() => setShowModal(false)}
  //                   >
  //                     Close
  //                   </Button>
  //                 </Modal.Footer>
  //               </Modal>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //     <style>
  //       {`
  //   .btn-light:hover {
  //     color: #063F71 !important;
  //     background-color: #56E39F !important;
  //     border-color: #56E39F !important;
  //   }
  // `}
  //     </style>
  //   </>
  // );
}
