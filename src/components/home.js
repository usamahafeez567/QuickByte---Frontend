import React from "react";
import image from "../Assets/image/egrocery.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <h1
              className="font_0 mt-5"
              style={{ fontSize: "80px", lineHeight: "1em" }}
            >
              <span
                style={{
                  fontSize: "80px",
                  letterSpacing: "0em",
                  color: "#56e39f",
                }}
              >
                Everything.
              </span>
              <br />
              <span
                style={{
                  fontSize: "80px",
                  letterSpacing: "0em",
                  color: "#FFFFFF",
                }}
              >
                In the moment.
              </span>
            </h1>
            <p className="h1-color mt-4">
              The future of supermarkets is here. Fresh products & favorite
              local brands delivered before the water boils.
            </p>
          </div>

          <div className="col-lg-8 col-md-12 mb-9">
            <img
              src={image}
              alt="A colorful abstract pattern"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .h1-color {
            color: #56e39f;
          }
        `}
      </style>
    </>
  );
}
