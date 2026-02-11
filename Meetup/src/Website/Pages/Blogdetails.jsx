import React, { useEffect } from 'react'
import $ from "jquery";

function Blogdetails() {
     useEffect(() => {
        $(".set-bg").each(function () {
          const bg = $(this).attr("data-setbg");
          $(this).css("background-image", `url(${bg})`);
        });
      }, []);
  return (
    <div>
      
    <div>
  {/* Blog Details Hero Section Begin */}
  <section className="blog-hero-section set-bg" data-setbg="img/blog/blog-details/blog-details-hero.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="bh-text">
            <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i className="fa fa-play" /></a>
            <h2>Improve You Business Cards</h2>
            <ul>
              <li><span>By <strong>John Smith</strong></span></li>
              <li>February 21, 2019</li>
              <li>No Comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Hero Section End */}
  {/* Blog Details Section Begin */}
  <section className="blog-details-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="bd-text">
            <div className="bd-title">
              <p>Postcards are also viable ways to generate increased contact for your business but
                because business cards are handier and easier to fit into a wallet or a business file
                organizer, they are more certain to be carried anywhere and anytime.</p>
              <p>Postcards are also viable ways to generate increased contact for your business but
                because business cards are handier and easier to fit into a wallet or a business file
                organizer, they are more certain to be carried anywhere and anytime. Moreover, what is
                printed on the card is as important as to how the information is printed. A business
                card should have the name and the logo of the company.</p>
            </div>
            <div className="bd-quote">
              <p>As a result of your work, the senior leadership team walked away as a cohesive unit,
                re-energized and more hopeful. We are committed to a new future which we now own. You
                helped us learn how to be resilient change masters."</p>
              <span>John Smith</span>
              <img src="img/quote-left.png" alt />
            </div>
            <div className="bd-more-text">
              <h4>Free Classifieds Using Them To Promote Your Stuff Online</h4>
              <p>Postcards are also viable ways to generate increased contact for your business but
                because business cards are handier and easier to fit into a wallet or a business file
                organizer, they are more certain to be carried anywhere and anytime. Moreover, what is
                printed on the card is as important as to how the information is printed. A business
                card should have the name and the logo of the company or business, the slogan or motto
                of the company, the contact person, contact numbers or cell phone numbers, the business
                website, and if possible, a physical address.</p>
            </div>
            <div className="bd-more-pic">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/blog/blog-details/blog-more-1.jpg" alt />
                </div>
                <div className="col-md-6">
                  <img src="img/blog/blog-details/blog-more-2.jpg" alt />
                </div>
              </div>
            </div>
            <div className="bd-more-text second-text">
              <h4>Freelance Design Tricks How To Get Away With Murder In The Workplace</h4>
              <p>Any business should never underestimate the power of business cards. It is able to
                provide quick information, is easy to keep, and if optimized to the fullest, can
                generate impressive sales increase.</p>
              <p>Even the empty space at the back of a card can be utilized to hold additional information
                like a map or an attractive freebie. Business cards can surely help any business to be
                more well-known and profitable in the long run.</p>
            </div>
            <div className="bd-tag-share">
              <div className="tag">
                <a href="#">Marketing</a>
                <a href="#">Experience</a>
              </div>
              <div className="s-share">
                <span>Share:</span>
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-google-plus" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
  {/* Comment Form Section Begin */}
  <div className="comment-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h3>Leave A Comment</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 m-auto">
          <form action="#" className="comment-form">
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
  </div>
  {/* Comment Form Section End */}
  {/* Related Post Section Begin */}
  <section className="related-post-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Relatest Post</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="blog-item set-bg" data-setbg="img/related-post/related-post-1.jpg">
            <div className="bi-tag bg-gradient">Foody</div>
            <div className="bi-text">
              <h5><a href="#">Free Classifiends Using Them To Promote</a></h5>
              <span><i className="fa fa-clock-o" /> 19th May, 2019</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-item set-bg" data-setbg="img/related-post/related-post-2.jpg">
            <div className="bi-tag bg-gradient">Foody</div>
            <div className="bi-text">
              <h5><a href="#">Discover Your Path To Success Part 4</a></h5>
              <span><i className="fa fa-clock-o" /> 19th May, 2019</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-item set-bg" data-setbg="img/related-post/related-post-3.jpg">
            <div className="bi-tag bg-gradient">Foody</div>
            <div className="bi-text">
              <h5><a href="#">Importance Of The Custom Company Logo Design</a></h5>
              <span><i className="fa fa-clock-o" /> 19th May, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Related Post Section End */}
</div>

    </div>
  )
}

export default Blogdetails
