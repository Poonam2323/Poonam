import React, { useEffect } from 'react'
import $ from "jquery";
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';

function Contact() {
    useEffect(() => {
        $(".set-bg").each(function () {
          const bg = $(this).attr("data-setbg");
          $(this).css("background-image", `url(${bg})`);
        });
      }, []);
  return (
    <div>
      <Header />
     <div>
  {/* Contact Top Content Section Begin */}
  <section className="contact-content-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="cc-text set-bg" data-setbg="img/contact-content-bg.jpg">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
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
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cc-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105718.20476932525!2d-118.28504975143346!3d34.10298127166687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6badc8521ad%3A0x7ad323479ca23922!2sNortheast%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579884986183!5m2!1sen!2sbd" height={580} style={{border: 0}} allowFullScreen />
            <div className="map-hover">
              <i className="fa fa-map-marker" />
              <div className="map-hover-inner">
                <h5>01 Pascale SP Apt. 339</h5>
                <p>NewYork City, US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Top Content Section End */}
  {/* Contact Form Section Begin */}
  <section className="contact-from-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Contact Us By Email!</h2>
            <p>Fill out the form below to recieve a free and confidential intial consultation.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form action="#" className="comment-form contact-form">
            <div className="row">
              <div className="col-lg-4">
                <input type="text" placeholder="Name" />
              </div>
              <div className="col-lg-4">
                <input type="text" placeholder="Email" />
              </div>
              <div className="col-lg-4">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea placeholder="Messages" defaultValue={""} />
                <button type="submit" className="site-btn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Form Section End */}
</div>

    <Footer />

    </div>
  )
}

export default Contact
