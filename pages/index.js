import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" wow-data-delay="30mss">
                    Dream Explore Discover
                  </h1>
                  <h3 className="wow fadeInDown" wow-data-delay="50ms">
                    People Don’t Take,Trips Take People
                  </h3>
                  <p className="tags">
                    <span>Popular Drinks : Manyuchi,Fresh Kambucha, Lemon</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}


      {/* <!--====== Start Listing Section ======--> */}
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <span className="sub-title">Featured Product</span>
                <h2>Explore Catalogue</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/m1.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-chef"></i>
                      </div>
                      <div className="title">
                        <h6>Restaurant</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Food Corner</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/m2.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-government"></i>
                      </div>
                      <div className="title">
                        <h6>Museums</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Central History</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/m3.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Fitness</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-dumbbell"></i>
                      </div>
                      <div className="title">
                        <h6>Fitness</h6>
                      </div>
                    </div>
                    <span className="status st-close">Close</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Xtream Gym</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Listing Section ======--> */}

      {/* <!--====== Start offer Section ======--> */}
      <section className="cta-area">
        <div
          className="cta-wrapper-one bg_cover"
          style={{ backgroundImage: `url(assets/images/fresh/all.jpeg)` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-content-box text-center wow fadeInUp">
                  <img src="assets/images/icon-1.png" alt="offer icon" />
                  <h2>Splash Yourself Bigger Offer on Everyday</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End offer Section ======--> */}

      {/* <!--====== Start Features Section ======--> */}
      <section className="features-area">
        <div className="features-wrapper-one pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="assets/images/fresh/img1.jpeg"
                    alt="Features Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one"> 
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                        <i className="flaticon-find"></i>
                      </div>
                      <div className="content">
                        <h5>Find What You Want</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                        <i className="flaticon-place"></i>
                      </div>
                      <div className="content">
                        <h5>Easy Choose Your Place</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        <i className="flaticon-social-care"></i>
                      </div>
                      <div className="content">
                        <h5>Live Online Assistance</h5>
                        <p>
                          Rhoncus dolor quam etiam mattis, tincidunt nec
                          lobortis sociis facilisi aenean netus tempor duis.
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
      {/* <!--====== End Features Section ======--> */}

      {/* <!--====== Start Place Section ======--> */}
      <section className="place-area pt-115 pb-110">
        <div className="container-fluid place-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">More of our Products</span>
                <h2>Explore Catalogue</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m1.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Manyuchi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m2.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Lemon</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m2.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Lemon</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m3.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Fresh Kambucha</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m1.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Manyuchi</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Place Section ======--> */}
    </Layout>
  );
};
export default Index;
