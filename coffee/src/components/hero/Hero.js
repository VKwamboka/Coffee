import React from "react";
import "./hero.scss";
import { images } from "../../images";
import "../../scss/theme.scss.css";
import Shop from "../shopsec/Shop";


const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div
          id="shopify-section-hero"
          className="shopify-section index-section index-section--flush"
        >
          <div
            className="hero hero--medium hero__overlay box ratio-container js lazyloaded"
            data-bgset="//cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_180x.jpg?v=1613532889 180w 270h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_360x.jpg?v=1613532889 360w 540h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_540x.jpg?v=1613532889 540w 810h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_720x.jpg?v=1613532889 720w 1080h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_900x.jpg?v=1613532889 900w 1350h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_1080x.jpg?v=1613532889 1080w 1620h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_1296x.jpg?v=1613532889 1296w 1944h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_1512x.jpg?v=1613532889 1512w 2268h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_1728x.jpg?v=1613532889 1728w 2592h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_1950x.jpg?v=1613532889 1950w 2925h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_2100x.jpg?v=1613532889 2100w 3150h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_2260x.jpg?v=1613532889 2260w 3390h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_2450x.jpg?v=1613532889 2450w 3675h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch_2700x.jpg?v=1613532889 2700w 4050h,
    //cdn.shopify.com/s/files/1/0043/8714/3773/files/coffee-beans-on-branch.jpg?v=1613532889 2731w 4096h"
            data-parent-fit="cover"
            style={{backgroundPosition: "center center"}}
          >
            <div className="hero__inner">
              <div className="page-width text-center">
                <h2 className="h1 mega-title mega-title--large">
                  Green Coffee Traders
                </h2>

                <div className="rte-setting mega-subtitle mega-subtitle--large">
                  <p>For A Limited Time Save 10% off All Orders. &nbsp;</p>
                  <p>
                    Coupon Code: <strong>10off</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Shop/> */}
        {/* <div classNameName="right-top-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_right_mobile}/>
          <img src={images.intro_right} alt=''/>
        </picture>
      </div>
      <div classNameName="hero__wrapper container">
        <div classNameName="hero__content">
          <h1 classNameName="title">Humanitizing <br/>your insurance.</h1> 
          <p classNameName="hero__text">
            Get your health insurance coverage easier and faster. We blend Our
            expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
          </p>
            <button classNameName="btn">View Plans</button>
        </div>
        <div classNameName="hero__image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_mobile}/>
          <img src={images.intro_desktop} alt=''/>
        </picture>
      </div>
      </div>
     
      <div classNameName="left-bottom-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_left_mobile}/>
          <img src={images.intro_left} alt=''/>
        </picture>
      </div> */}
      </div>
    </div>
  );
};

export default Hero;
