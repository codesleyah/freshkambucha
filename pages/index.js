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
     {/*====== Start Hero Section ======*/}
     <section className="hero-area">
        <div
          className="hero-wrapper-two bg_cover"
          style={{ backgroundImage: "url(assets/images/fresh/backg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="30ms">
                    Kumbucha Fresh Zimbabwe (PVT) LTD
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                    My Taste, My Choice
                  </h3>
                  <p className="tags">
                    <span>Ndipe one ndifare</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}


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
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/a.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="#">
                      <a>Manyuchi Power</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/one.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="#">
                      <a>Lemon Drink 1</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/m2.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="#">
                      <a>Lemon Drink 2</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
              
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/fresh/m3.jpeg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="#">
                      <a>Fresh Kambucha 3</a>
                    </Link>
                  </h3>
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
                  <h2>We Lead, others follow!</h2>
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
                    src="assets/images/fresh/team1.jpg"
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
      {/* <!--====== End Features Section ======--> */}

      {/* <!--====== Start Place Section ======--> */}
      <section className="place-area pt-115 pb-110">
        <div className="container-fluid place-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">More of our Products</span>
                <h2>Our Product Gallery</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/a.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Manyuchi  Power</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/one.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Fresh Kambucha Lemon Drink 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m2.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Fresh Kambucha Lemon Drink 2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/m3.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Fresh Kambucha Drink 3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/fresh/a.jpeg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">Manyuchi Power</span>
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
