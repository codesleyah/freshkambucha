import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <PageBanner title={"About us"} />

      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-four pt-80 pb-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="assets/images/fresh/abt.jpg"
                    alt="Features Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-30 wow fadeInUp">
                    <h2>Fresh Kambucha Beverages</h2>
                  </div>
                  <h5>
                    The number one drink in the nation.
                  </h5>
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                      </div>
                      <div className="content">
                        <h5>Ingredients</h5>
                        <p>
                            These drinks are made up of lemon,
                              ginger, garlic ,honey, murumanyama,
                                beetroot, banana, pineapple.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                      </div>
                      <div className="content">
                        <h5>Enjoy different flavours</h5>
                        <p>
                          The fresh kambucha drinks comes in manny different flavours such as Manyuchi, Lemon and many more.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                      </div>
                      <div className="content">
                        <h5>Readily available</h5>
                        <p>
                          The fresh kambucha drinks are readily available in all our outlets. 
                          Get yours today and enjoy the taste.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{ backgroundImage: "url(assets/images/fresh/bi.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="cta-content-box wow fadeInRight">
                  <h2>Visit Us</h2>
                  <p>
                  17001 Sande Crescent Graniteside Hararem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="content">
                    <h2>Keep in touch</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required=""
                    />
                    <i className="ti-location-pin" />
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-area pt-115 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">The Team</span>
                <h2>Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/fresh/tm1.jpg" alt="Team Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-30 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="team-img">
                  <img src="assets/images/fresh/tm2.jpg" alt="Team Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/fresh/tm6.jpg" alt="Team Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
    </Layout>
  );
};
export default About;
