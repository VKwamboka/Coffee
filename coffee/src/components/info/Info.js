import React from "react";
import "./info.scss";
// import { images } from "../../images";

const Info = () => {
  return (
    <div>
      <div classNameName="we-are-different">
        {/* <div classNameName="container">
        <h2 classNameName="title1 title1--mod">We are different</h2>
        <div classNameName="we-are-different__content">
          <div classNameName="snappy">
            <img src={images.snappy_process} alt=''/>
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms
            </p>
          </div>

          <div classNameName="affordable">
            <img src={images.affordable_prices} alt=''/>
            <h3>Affordable Prices</h3>
            <p>
             We don't want you worrying about high monthly costs. Our prices 
             maybe low, but we still offer the best coverage possible.
            </p>
          </div>

          <div classNameName="people">
            <img src={images.people_first} alt=''/>
            <h3>People First</h3>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>

        </div>
      </div> */}

        <div
          id="shopify-section-slideshow"
          className="shopify-section index-section index-section--flush index-section--slideshow"
        >
          <div
            data-section-id="slideshow"
            data-section-type="slideshow-section"
          >
            <div
              id="SlideshowWrapper-slideshow"
              className="slideshow-wrapper"
              role="region"
              aria-label="slideshow"
              aria-describedby="slideshow-info"
              tabindex="-1"
            >
              <div
                className="slideshow slideshow--small slick-initialized slick-slider slick-dotted"
                id="Slideshow-slideshow"
                data-autorotate="false"
                data-speed="5000"
                data-adapt-height="false"
                data-slide-nav-a11y="Load slide [slide_number]"
              >
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{ opacity: 1, width: "3876px" }}
                  >
                    <div
                      className="slideshow__slide slideshow__slide--slideshow-0 slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      style={{
                        width: "1292px",
                        position: "relative",
                        left: "0px",
                        top: "0px",
                        zIndex: "999",
                        opacity: "1",
                      }}
                      id="slickSlide00"
                      tabindex="-1"
                    >
                      <div
                        className="slideshow__image box ratio-container js lazyloaded slide1"
                        data-bgset="//cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_180x.jpg?v=1613532888 180w 120h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_360x.jpg?v=1613532888 360w 240h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_540x.jpg?v=1613532888 540w 360h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_720x.jpg?v=1613532888 720w 480h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_900x.jpg?v=1613532888 900w 600h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_1080x.jpg?v=1613532888 1080w 720h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_1296x.jpg?v=1613532888 1296w 864h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_1512x.jpg?v=1613532888 1512w 1008h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_1728x.jpg?v=1613532888 1728w 1152h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_1950x.jpg?v=1613532888 1950w 1300h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_2100x.jpg?v=1613532888 2100w 1400h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_2260x.jpg?v=1613532888 2260w 1507h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_2450x.jpg?v=1613532888 2450w 1634h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_2700x.jpg?v=1613532888 2700w 1800h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_3000x.jpg?v=1613532888 3000w 2000h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_3350x.jpg?v=1613532888 3350w 2234h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant_3750x.jpg?v=1613532888 3750w 2500h,
    
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-plant.jpg?v=1613532888 4096w 2731h"
                        data-parent-fit="contain"
                      >
                        <div className="slideshow__overlay"></div>

                        <div className="slideshow__text-wrap slideshow__text-wrap--desktop">
                          <div className="slideshow__text-content slideshow__text-content--vertical-center text-center">
                            <div className="page-width">
                              <ul className="slideshow__text-content-list">
                                <li>
                                  <h2 className="h1 mega-title slideshow__title">
                                    The Beginning
                                  </h2>
                                </li>
                                <li>
                                  <span className="mega-subtitle slideshow__subtitle">
                                    Founded 1993 we specialize in sourcing the
                                    finest green coffee from around the world
                                    and bringing it to our customers in North
                                    America.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="slideshow__slide slideshow__slide--slideshow-1 slick-slide"
                      data-slick-index="1"
                      aria-hidden="true"
                      style={{
                        width: "1292px",
                        position: "relative",
                        left: "-1292px",
                        top: "0px",
                        zIndex: "998",
                        opacity: "0",
                      }}
                      id="slickSlide01"
                      tabindex="-1"
                    >
                      <div
                        className="slideshow__image box ratio-container lazypreload js lazyloaded slide2"
                        data-bgset="//cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_180x.jpg?v=1613532984 180w 120h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_360x.jpg?v=1613532984 360w 240h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_540x.jpg?v=1613532984 540w 360h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_720x.jpg?v=1613532984 720w 480h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_900x.jpg?v=1613532984 900w 600h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_1080x.jpg?v=1613532984 1080w 720h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_1296x.jpg?v=1613532984 1296w 864h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_1512x.jpg?v=1613532984 1512w 1008h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_1728x.jpg?v=1613532984 1728w 1152h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_1950x.jpg?v=1613532984 1950w 1300h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_2100x.jpg?v=1613532984 2100w 1400h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_2260x.jpg?v=1613532984 2260w 1507h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_2450x.jpg?v=1613532984 2450w 1634h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_2700x.jpg?v=1613532984 2700w 1800h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_3000x.jpg?v=1613532984 3000w 2000h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_3350x.jpg?v=1613532984 3350w 2234h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee_3750x.jpg?v=1613532984 3750w 2500h,
    
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/hand-full-of-roasted-coffee.jpg?v=1613532984 4096w 2731h"
                        data-parent-fit="contain"
                      >
                        <div className="slideshow__overlay"></div>

                        <div className="slideshow__text-wrap slideshow__text-wrap--desktop">
                          <div className="slideshow__text-content slideshow__text-content--vertical-center text-center">
                            <div className="page-width">
                              <ul className="slideshow__text-content-list">
                                <li>
                                  <h2 className="h1 mega-title slideshow__title">
                                    The Best
                                  </h2>
                                </li>
                                <li>
                                  <span className="mega-subtitle slideshow__subtitle">
                                    We only source and stock the finest coffees
                                    in the world! Strictly specialty Arabica,
                                    Organic and Fair Trade Organic green
                                    coffees.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="slideshow__slide slideshow__slide--1550021832771 slick-slide"
                      data-slick-index="2"
                      aria-hidden="true"
                      style={{
                        width: "1292px",
                        position: "relative",
                        left: "-2584px",
                        top: "0px",
                        zIndex: 998,
                        opacity: 0,
                      }}
                      id="slickSlide02"
                      tabindex="-1"
                    >
                      <div
                        className="slideshow__image box ratio-container lazypreload js lazyloaded slide3"
                        data-bgset="//cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_180x.jpg?v=1613533575 180w 225h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_360x.jpg?v=1613533575 360w 450h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_540x.jpg?v=1613533575 540w 675h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_720x.jpg?v=1613533575 720w 900h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_900x.jpg?v=1613533575 900w 1125h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_1080x.jpg?v=1613533575 1080w 1350h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_1296x.jpg?v=1613533575 1296w 1620h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_1512x.jpg?v=1613533575 1512w 1890h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_1728x.jpg?v=1613533575 1728w 2160h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_1950x.jpg?v=1613533575 1950w 2437h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_2100x.jpg?v=1613533575 2100w 2625h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_2260x.jpg?v=1613533575 2260w 2825h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_2450x.jpg?v=1613533575 2450w 3062h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_2700x.jpg?v=1613533575 2700w 3375h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso_3000x.jpg?v=1613533575 3000w 3750h,
    
    
    
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/barista-pours-steamed-milk-on-espresso.jpg?v=1613533575 3277w 4096h"
                        data-parent-fit="contain"
                      >
                        <div className="slideshow__overlay"></div>

                        <div className="slideshow__text-wrap slideshow__text-wrap--desktop">
                          <div className="slideshow__text-content slideshow__text-content--vertical-center text-center">
                            <div className="page-width">
                              <ul className="slideshow__text-content-list">
                                <li>
                                  <h2 className="h1 mega-title slideshow__title">
                                    The Distribution
                                  </h2>
                                </li>
                                <li>
                                  <span className="mega-subtitle slideshow__subtitle">
                                    Our coffee is warehouse in the United States
                                    &amp; Canada where we serve some of the
                                    finest boutique roaster across North America
                                    with the finest rare coffee offerings.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slideshow__controls">
                <div className="slideshow__arrows" style={{ width: "149px" }}>
                  <button
                    className="slideshow__arrow slideshow__arrow-left"
                    aria-label="Previous slide"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-chevron-left"
                      viewBox="0 0 7 11"
                    >
                      <path
                        d="M5.5.037a1.5 1.5 0 0 1 1.06 2.56l-2.94 2.94 2.94 2.94a1.5 1.5 0 0 1-2.12 2.12l-4-4a1.5 1.5 0 0 1 0-2.12l4-4A1.5 1.5 0 0 1 5.5.037z"
                        fill="#fff"
                        className="layer"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="slideshow__arrow slideshow__arrow-right"
                    aria-label="Next slide"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-chevron-right"
                      viewBox="0 0 7 11"
                    >
                      <path
                        d="M1.5 11A1.5 1.5 0 0 1 .44 8.44L3.38 5.5.44 2.56A1.5 1.5 0 0 1 2.56.44l4 4a1.5 1.5 0 0 1 0 2.12l-4 4A1.5 1.5 0 0 1 1.5 11z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                  <ul className="slick-dots" style={{ display: "block" }}>
                    <li
                      className="slick-active"
                      aria-hidden="false"
                      id="slickDot00"
                    >
                      <a
                        href="#SlideshowWrapper-slideshow"
                        aria-label="Load slide 1"
                        data-slide-number="0"
                        aria-current="true"
                        aria-controls="slickSlide00"
                      ></a>
                    </li>
                    <li id="slickDot01">
                      <a
                        href="#SlideshowWrapper-slideshow"
                        aria-label="Load slide 2"
                        data-slide-number="1"
                        aria-controls="slickSlide01"
                      ></a>
                    </li>
                    <li id="slickDot02">
                      <a
                        href="#SlideshowWrapper-slideshow"
                        aria-label="Load slide 3"
                        data-slide-number="2"
                        aria-controls="slickSlide02"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="slideshow__text-wrap slideshow__text-wrap--mobile"
              style={{ display: "block" }}
            >
              <div className="slideshow__arrows slideshow__arrows--mobile">
                <button
                  className="slideshow__arrow slideshow__arrow-left"
                  aria-label="Previous slide"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon icon-chevron-left"
                    viewBox="0 0 7 11"
                  >
                    <path
                      d="M5.5.037a1.5 1.5 0 0 1 1.06 2.56l-2.94 2.94 2.94 2.94a1.5 1.5 0 0 1-2.12 2.12l-4-4a1.5 1.5 0 0 1 0-2.12l4-4A1.5 1.5 0 0 1 5.5.037z"
                      fill="#fff"
                      className="layer"
                    ></path>
                  </svg>
                </button>
                <button
                  className="slideshow__arrow slideshow__arrow-right"
                  aria-label="Next slide"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon icon-chevron-right"
                    viewBox="0 0 7 11"
                  >
                    <path
                      d="M1.5 11A1.5 1.5 0 0 1 .44 8.44L3.38 5.5.44 2.56A1.5 1.5 0 0 1 2.56.44l4 4a1.5 1.5 0 0 1 0 2.12l-4 4A1.5 1.5 0 0 1 1.5 11z"
                      fill="#fff"
                    ></path>
                  </svg>
                </button>
                <ul className="slick-dots" style={{ display: "block" }}>
                  <li className="slick-active-mobile" id="slickDot03">
                    <a
                      href="#SlideshowWrapper-slideshow"
                      aria-label="Load slide 1"
                      data-slide-number="0"
                      aria-controls="slickSlide03"
                    ></a>
                  </li>
                  <li id="slickDot04">
                    <a
                      href="#SlideshowWrapper-slideshow"
                      aria-label="Load slide 2"
                      data-slide-number="1"
                      aria-controls="slickSlide04"
                    ></a>
                  </li>
                  <li id="slickDot05">
                    <a
                      href="#SlideshowWrapper-slideshow"
                      aria-label="Load slide 3"
                      data-slide-number="2"
                      aria-controls="slickSlide05"
                    ></a>
                  </li>
                </ul>
              </div>

              <div
                className="slideshow__text-content slideshow__text-content--mobile slideshow__text-content--mobile-0 text-center"
                style={{ display: "block" }}
              >
                <div className="page-width">
                  <h2 className="h1 mega-title slideshow__title slideshow__title--mobile">
                    The Beginning
                  </h2>
                  <span className="mega-subtitle slideshow__subtitle slideshow__subtitle--mobile">
                    Founded 1993 we specialize in sourcing the finest green
                    coffee from around the world and bringing it to our
                    customers in North America.
                  </span>
                </div>
              </div>
              <div
                className="slideshow__text-content slideshow__text-content--mobile slideshow__text-content--mobile-1 text-center"
                style={{ display: "none" }}
              >
                <div className="page-width">
                  <h2 className="h1 mega-title slideshow__title slideshow__title--mobile">
                    The Best
                  </h2>
                  <span className="mega-subtitle slideshow__subtitle slideshow__subtitle--mobile">
                    We only source and stock the finest coffees in the world!
                    Strictly specialty Arabica, Organic and Fair Trade Organic
                    green coffees.
                  </span>
                </div>
              </div>
              <div
                className="slideshow__text-content slideshow__text-content--mobile slideshow__text-content--mobile-2 text-center"
                style={{ display: "none" }}
              >
                <div className="page-width">
                  <h2 className="h1 mega-title slideshow__title slideshow__title--mobile">
                    The Distribution
                  </h2>
                  <span className="mega-subtitle slideshow__subtitle slideshow__subtitle--mobile">
                    Our coffee is warehouse in the United States &amp; Canada
                    where we serve some of the finest boutique roaster across
                    North America with the finest rare coffee offerings.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
