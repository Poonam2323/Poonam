import React, { useEffect } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import $ from "jquery";

function Speaker() {
     useEffect(() => {
        $(".set-bg").each(function () {
          const bg = $(this).attr("data-setbg");
          $(this).css("background-image", `url(${bg})`);
        });
      }, []);
  return (
    <div>
      {/* <Header /> */}
    <div>
  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>Feature Speakers</h2>
            <div className="bt-option">
              <a href="#">Home</a>
              <span>Our Speakers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Speaker Section Begin */}
  <section className="speaker-section spad">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-1.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Jayden Gill</h4>
                    <span>Speaker</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-2.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Mary Jane</h4>
                    <span>Speaker</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-3.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Jack Human</h4>
                    <span>Manager</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-4.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Sara Brudt</h4>
                    <span>Speaker</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-5.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Emma Sandoval </h4>
                    <span>CEO</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="speaker-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="si-pic">
                  <img src="img/speakers/speaker-6.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si-text">
                  <div className="si-title">
                    <h4>Harriet Freeman</h4>
                    <span>Marketing Manager</span>
                  </div>
                  <div className="si-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                  <p>Businesses often become known today through effective marketing. The marketing
                    may be in the form of a regular news item or half column society news in the
                    Sunday newspaper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more">
        <a href="#" className="primary-btn">Load More</a>
      </div>
    </div>
  </section>
  {/* Speaker Section End */}
  {/* Newslatter Section Begin */}
  <section className="newslatter-section about-newslatter">
    <div className="container">
      <div className="newslatter-inner set-bg" data-setbg="img/newslatter-bg.jpg">
        <div className="ni-text">
          <h3>Subscribe Newsletter</h3>
          <p>Subscribe to our newsletter and don’t miss anything</p>
        </div>
        <form action="#" className="ni-form">
          <input type="text" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  {/* Newslatter Section End */}
  {/* Contact Section Begin */}
  <section className="contact-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            <h2>Location</h2>
            <p>Get directions to our event center</p>
          </div>
          <div className="cs-text">
            <div className="ct-address">
              <span>Address:</span>
              <p>01 Pascale Springs Apt. 339, NY City <br />United State</p>
            </div>
            <ul>
              <li>
                <span>Phone:</span>
                (+12)-345-67-8910
              </li>
              <li>
                <span>Email:</span>
                info.colorlib@gmail.com
              </li>
            </ul>
            <div className="ct-links">
              <span>Website:</span>
              <p>https://conference.colorlib.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd" height={400} style={{border: 0}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
</div>

      {/* <Footer /> */}
    </div>
  )
}

export default Speaker
