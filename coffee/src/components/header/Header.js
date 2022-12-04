import React, { useState } from "react";
import { images } from "../../images";
import "./header.scss";
import "../../scss/main.scss";
import '../../scss/theme.scss.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <div className="announcement-bar">
        <p className="announcement-bar__message">
          FOR A LIMITED TIME SAVE 10% OFF ALL ORDERS. COUPON CODE: 10OFF
        </p>
      </div>

      <header className="site-header border-bottom logo--left" role="banner">
        <div className="grid grid--no-gutters grid--table site-header__mobile-nav">
          <div className="grid__item medium-up--one-quarter logo-align--left">
            <h1 className="h2 site-header__logo">
              <a className="site-header__logo-link" href="/">
                Green Coffee Traders
              </a>
            </h1>
          </div>

          <nav
            className="grid__item medium-up--one-half small--hide"
            id="AccessibleNav"
            role="navigation"
          >
            <ul className="site-nav list--inline " id="SiteNav">
              <li className="site-nav--active">
                <a
                  href="/"
                  className="site-nav__link site-nav__link--main site-nav__link--active"
                  aria-current="page"
                >
                  <span className="site-nav__label">Home</span>
                </a>
              </li>

              <li>
                <a
                  href="/collections"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">Shop</span>
                </a>
              </li>

              <li>
                <a
                  href="/pages/current-offerings"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">Wholesale Distribution</span>
                </a>
              </li>

              <li>
                <a
                  href="/pages/about-us"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">About Us</span>
                </a>
              </li>

              <li>
                <a
                  href="/pages/gallery"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">Gallery</span>
                </a>
              </li>

              <li>
                <a
                  href="/pages/testimonials"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">Testimonials</span>
                </a>
              </li>

              <li>
                <a
                  href="/pages/canadian-orders"
                  className="site-nav__link site-nav__link--main"
                >
                  <span className="site-nav__label">Canadian Orders</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="grid__item medium-up--one-quarter text-right site-header__icons site-header__icons--plus">
            <div className="site-header__icons-wrapper">
              <div className="site-header__search site-header__icon">
                <form
                  action="/search"
                  method="get"
                  className="search-header search"
                  role="search"
                >
                  <input
                    className="search-header__input search__input"
                    type="search"
                    name="q"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="search-header__submit search__submit btn--link site-header__icon"
                    type="submit"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-search"
                      viewBox="0 0 37 40"
                    >
                      <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
                    </svg>
                    <span className="icon__fallback-text">Submit</span>
                  </button>
                  <div className="pick_currency " >
                    <select
                      id="currencies"
                      name="currencies"
                      // style='display: inline; background-image: url("data:image/svg+xml,<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"8pxz\" height=\"5px\" viewBox=\"0 0 8 5\" enable-background=\"new 0 0 8 5\" xml:space=\"preserve\"> <path fill=\"rgb(0, 0, 0)\" d=\"M0,0c0,0,3.4,4.4,3.5,4.4C3.7,4.4,7.1,0,7.1,0H0z\"/></svg>");'
                    >
                      <option value="USD" defaultValue="selected">
                        USD
                      </option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className="mlveda-mobile">
                <a className="pick_currency " >
                  <select
                    id="currencies1"
                    name="currencies"
                    // style='display: inline; background-image: url("data:image/svg+xml,<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"8pxz\" height=\"5px\" viewBox=\"0 0 8 5\" enable-background=\"new 0 0 8 5\" xml:space=\"preserve\"> <path fill=\"rgb(0, 0, 0)\" d=\"M0,0c0,0,3.4,4.4,3.5,4.4C3.7,4.4,7.1,0,7.1,0H0z\"/></svg>");'
                  >
                    <option value="USD" defaultValue="selected">
                      USD
                    </option>
                    <option value="CAD">CAD</option>
                  </select>
                </a>
              </div>
              <button
                type="button"
                className="btn--link site-header__icon site-header__search-toggle js-drawer-open-top"
                aria-controls="SearchDrawer"
                aria-expanded="false"
                aria-haspopup="dialog"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-search"
                  viewBox="0 0 37 40"
                >
                  <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
                </svg>
                <span className="icon__fallback-text">Search</span>
              </button>

              <a
                href="/account/login"
                className="site-header__icon site-header__account"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-login"
                  viewBox="0 0 28.33 37.68"
                >
                  <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
                </svg>
                <span className="icon__fallback-text">Log in</span>
              </a>

              <a href="/cart" className="site-header__icon site-header__cart">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-cart"
                  viewBox="0 0 37 40"
                >
                  <path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
                </svg>
                <span className="icon__fallback-text">Cart</span>

                <div id="CartCount" className="site-header__cart-count">
                  <span>1</span>
                  <span className="icon__fallback-text medium-up--hide">item</span>
                </div>
              </a>

              <button
                type="button"
                className="btn--link site-header__icon site-header__menu js-mobile-nav-toggle mobile-nav--open"
                aria-controls="MobileNav"
                aria-expanded="false"
                aria-label="Menu"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-hamburger"
                  viewBox="0 0 37 40"
                >
                  <path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-close"
                  viewBox="0 0 40 40"
                >
                  <path
                    d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
                    className="layer"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav className="mobile-nav-wrapper medium-up--hide" role="navigation">
          <ul id="MobileNav" className="mobile-nav">
            <li
              className="mobile-nav__item border-bottom mlvedaMobileSwitcher"
              style={{display:"none"}}
            >
              <a className="pick_currency mobile-nav__link" >
                <select
                  id="currencies2"
                  name="currencies"
                  // style='display: inline; background-image: url("data:image/svg+xml,<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"8pxz\" height=\"5px\" viewBox=\"0 0 8 5\" enable-background=\"new 0 0 8 5\" xml:space=\"preserve\"> <path fill=\"rgb(0, 0, 0)\" d=\"M0,0c0,0,3.4,4.4,3.5,4.4C3.7,4.4,7.1,0,7.1,0H0z\"/></svg>");'
                >
                  <option value="USD" defaultValue="selected">
                    USD
                  </option>
                  <option value="CAD">CAD</option>
                </select>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a
                href="/"
                className="mobile-nav__link mobile-nav__link--active"
                aria-current="page"
              >
                <span className="mobile-nav__label">Home</span>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a href="/collections" className="mobile-nav__link">
                <span className="mobile-nav__label">Shop</span>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a href="/pages/current-offerings" className="mobile-nav__link">
                <span className="mobile-nav__label">Wholesale Distribution</span>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a href="/pages/about-us" className="mobile-nav__link">
                <span className="mobile-nav__label">About Us</span>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a href="/pages/gallery" className="mobile-nav__link">
                <span className="mobile-nav__label">Gallery</span>
              </a>
            </li>

            <li className="mobile-nav__item border-bottom">
              <a href="/pages/testimonials" className="mobile-nav__link">
                <span className="mobile-nav__label">Testimonials</span>
              </a>
            </li>

            <li className="mobile-nav__item">
              <a href="/pages/canadian-orders" className="mobile-nav__link">
                <span className="mobile-nav__label">Canadian Orders</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <header classNameName="header">
        <nav classNameName="navbar container">
          <div classNameName="logo">
            <img src={images.logo} alt="logo" />
          </div>
          <ul classNameName={open ? "nav-items active" : "nav-items"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link strict to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link exact to="/about">
                Portfolio
              </Link>
            </li>
            <li classNameName="btn btn--nav-btn">
              <Link exact to="/price">
                Plans
              </Link>
            </li>
          </ul>
          <div classNameName="hamburger">
            <img src={images.hamburger} alt="" onClick={handleClick} />
          </div>
        </nav>
      </header> */}
    </div>
  );
};

export default Header;
