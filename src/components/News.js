import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

class News extends React.Component {
  render() {
    return (
      <div className="news-global">
        <div className="news-section">
          <h1 className="news-section-head">Latest News</h1>
          <div className="blogs">
            <div className="blog">
              <div className="center-res">
                <div className="blog-image" id="img1" />
              </div>
              <a href="google.com">
                <div className="blog-post">
                  <h1 className="blog-post-head">
                    IIIT Lucknow welcomes Founding Director Dr. Arun Mohan
                    Sherry
                  </h1>
                  <p className="blog-post-p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </a>
            </div>
            <div className="blog">
              <div className="center-res">
                {" "}
                <div className="blog-image" id="img2" />
              </div>
              <a href="google.com">
                <div className="blog-post">
                  <h1 className="blog-post-head">Pariksha Pe Charcha 2.0'</h1>

                  <p className="blog-post-p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </a>
            </div>
            <div className="blog">
              <div className="center-res">
                <div className="blog-image" id="img3" />
              </div>
              <a href="google.com">
                <div className="blog-post">
                  <h1 className="blog-post-head">
                    Expert Guest Lectures and Research Interaction
                  </h1>

                  <p className="blog-post-p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="more-blogs">
            <div className="more">
              <Link
                className="news-link news-hover"
                to="/news"
                // style={{ color: "rgb(59, 59, 149)" }}
              >
                More <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="events-section">
          {" "}
          <div className="center">
            <div className="c2">
              <div className="news-head">Events</div>
              <div className="news-article">
                <a href="/comming-soon" className="news-link fonts">
                  Yale President Peter Salovey’s statement on proposed Title IX
                  rule changes
                </a>
                <p className="date">January 29,2019</p>
              </div>
              <div className="news-article">
                <a href="/comming-soon" className="news-link fonts">
                  New Office of Undergraduate Financial Aid promotes clarity
                </a>
                <p className="date">January 30, 2019</p>
              </div>
              <div className="news-article hides">
                <a href="/comming-soon" className="news-link fonts">
                  Christopher L. Miller’s ‘Impostors’ asks readers: What’s in a
                  byline?
                </a>
                <p className="date">January 30, 2019</p>
              </div>
              <div className="news-article hides">
                <a href="/comming-soon" className="news-link fonts">
                  From Yale to data science: How one alum made the leap
                </a>
                <p className="date">January 30, 2019</p>
              </div>
              <div className="news-article more-news">
                <Link
                  className="news-link news-hover"
                  to="/events"
                  // style={{ color: "rgb(59, 59, 149)" }}
                >
                  More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="payment-section">
              <h1 className="payment-head">Payment Gateway</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <button className="payment-button">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
