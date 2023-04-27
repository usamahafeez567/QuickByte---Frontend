import React from "react";

export default function contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-5 px-5">
            <h1 className="fw-bold text-center custom-color">Contact Us</h1>
            <div className="h-line custom-color"></div>
            <p className="text-center mt-3 custom-color">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              laborum hic numquam debitis quaerat explicabo <br /> veritatis.
              Obcaecati, veniam? Laboriosam necessitatibus fugiat deleniti
              labore iure optio laudantium voluptates dolor odio suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 px-4 ">
            <div className="p-4 rounded body-map">
              <iframe
                className="w-100 rounded mb-4 shadow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1662489996033!5m2!1sen!2s"
                height="350px"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Map of Lahore, Punjab, Pakistan"
              ></iframe>
              <h5 className="custom-color-tag">Address</h5>
              <a
                href="https://goo.gl/maps/8dfxngbG3NnLhDwdA"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block text-white text-decoration-none"
              >
                <i className="bi bi-geo-alt-fill"></i> Lahore, Punjab, Pakistan
              </a>
              <h5 className="mt-3 custom-color-tag">Contact Us</h5>
              <a
                href="tel:+923001234567"
                className="d-inline-block text-decoration-none mb-2 text-white"
              >
                <i className="bi bi-telephone-fill"></i>+923001234567
              </a>

              <h5 className="mt-3 custom-color-tag">Email</h5>
              <a
                href="mailto:bc180200378@vu.edu.pk"
                className="d-inline-block text-decoration-none text-white"
              >
                <i className="bi bi-envelope-fill"></i> usamahafeez567@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5 px-4">Contact Us Form</div>
        </div>
      </div>
      <style>
        {`
            .h-line {
                width: 150px;
                margin: 0 auto;
                height: 1.7px;
                background-color: #56e39f;
            }
            .custom-color {
                color: #56e39f;
            }
            .body-map {
                padding: 60px 80px 60px 80px;
                border-radius: 20px;
                box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
            }
            .custom-color-tag{
                color: #56e39f;
            }
        `}
      </style>
    </>
  );
}
