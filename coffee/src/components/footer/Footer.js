import React from "react";
import "./footer.scss";
import "../../scss/theme.scss.css"
import { images } from "../../images";

const Footer = () => {
  return (
    <div>
      {/* <footer>
        <div className="footer-art">
          <picture>
            <source media="max-width:767px" srcSet={images.footer_mob} />
            <img src={images.footer} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="footer">
            <div className="footer-header">
              <div className="logo">
                <img src={images.logo} alt="" />
              </div>
              <div className="social-media-icons">
                <img src={images.fb} alt="" />
                <img src={images.twitter} alt="" />
                <img src={images.insta} alt="" />
                <img src={images.pinterest} alt="" />
              </div>
            </div>
            <div className="footer-menu">
              <div className="our-compamy">
                <h4>Our Company</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why Insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>

              <div className="our-compamy">
                <h4>Help</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                </ul>
              </div>

              <div className="our-compamy">
                <h4>Contact</h4>
                <ul>
                  <li>Sales</li>
                  <li>Support</li>
                  <li>Live Chat </li>
               
                </ul>
              </div>

              <div className="our-compamy">
                <h4>Others</h4>
                <ul>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Licence</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <div id="shopify-section-footer" class="shopify-section">


<footer class="site-footer" role="contentinfo">
<div class="page-width">
<div class="site-footer__content"><div class="site-footer__item
                
                site-footer__item--one-half
                ">
      <div class="site-footer__item-inner site-footer__item-inner--link_list"><h4>Quick links</h4><ul class="site-footer__linklist
                        list--inline"><li class="site-footer__linklist-item">
                    <a href="/" aria-current="page">
                      Home
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Search
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Account
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Shop
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Contact Us
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Terms of Service
                    </a>
                  </li><li class="site-footer__linklist-item">
                    <a href="#">
                      Refund policy
                    </a>
                  </li></ul></div>
    </div><div class="site-footer__item
                
                site-footer__item--one-half
                ">
      <div class="site-footer__item-inner site-footer__item-inner--newsletter"><h4>Join for exclusive offers today!</h4><div class="site-footer__newsletter
                      ">
              <form method="post" action="/contact#ContactFooter" id="ContactFooter" accept-charset="UTF-8" class="contact-form" novalidate="novalidate">
                <input type="hidden" name="form_type" value="customer"/>
                  <input type="hidden" name="utf8" value="✓"/>
                <input type="hidden" name="contact[tags]" value="newsletter"/>
                <div class="input-group ">
                  <input type="email" name="contact[email]" id="ContactFooter-email" class="input-group__field newsletter__input" value="" placeholder="Email address" aria-label="Email address" aria-required="true" required="" autocorrect="off" autocapitalize="none"/>
                  <span class="input-group__btn">
                    <button type="submit" class="btn newsletter__submit" name="commit" id="Subscribe">
                      <span class="newsletter__submit-text--large">Subscribe</span>
                    </button>
                  </span>
                </div>
                
              </form>
            </div>
            </div>
    </div></div>
</div>

<hr class="site-footer__hr"/>

<div class="page-width">
<div class="grid grid--no-gutters small--text-center">
  <div class="grid__item one-half small--one-whole"><ul class="list--inline site-footer__social-icons social-icons site-footer__icon-list"><li>
            <a class="social-icons__link" href="#" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 20 20"><path fill="#444" d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"></path></svg><span class="icon__fallback-text">Facebook</span>
            </a>
          </li><li>
            <a class="social-icons__link" href="#" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 20 20"><path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path></svg><span class="icon__fallback-text">Twitter</span>
            </a>
          </li><li>
            <a class="social-icons__link" href="#" aria-describedby="a11y-external-message"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 512 512"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"></path><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path><circle cx="390.5" cy="121.5" r="30.2"></circle></svg><span class="icon__fallback-text">Instagram</span>
            </a>
          </li></ul></div>

  <div class="grid__item one-half small--one-whole">
    
  </div>
  <div class="grid__item">
    <small class="site-footer__copyright-content">© 2022, <a href="/" title="">Coffee</a></small>
    
  </div>
</div>
</div>
</footer>




</div>
    </div>
  );
};

export default Footer;
