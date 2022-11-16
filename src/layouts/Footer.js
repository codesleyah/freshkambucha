import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-wrapper-one dark-black pt-90">
        <div className="footer-widget pb-60">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100082133725032">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://youtu.be/7J-BgYZHNQk">
                          <i className="ti-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-12">
                <div
                  className="widget categories-widget mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <h4 className="widget-title">Quick Links</h4>
                  <ul className="categories-link">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay="40ms"
                >
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Subscribe to our newsletter.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2022. All rights reserved to{" "}
                    <span>Fresh Kambucha</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
