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
              <Link to="/comming-soon">
                <div className="blog-post">
                  <h1 className="blog-post-head">
                    IIIT Lucknow welcomes Founding Director Dr. Arun Mohan
                    Sherry
                  </h1>
                  <p className="blog-post-p">
                    Prof. Arun Mohan Sherry, an alumnus of IIT-Kharagpur has
                    been appointed the founding director of the Indian Institute
                    of Information Technology (IIIT), Lucknow.
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog">
              <div className="center-res">
                {" "}
                <div className="blog-image" id="img2" />
              </div>
              <Link to="/comming-soon">
                <div className="blog-post">
                  <h1 className="blog-post-head">Pariksha Pe Charcha 2.0'</h1>

                  <p className="blog-post-p">
                    As part of the second edition of ''Pariksha Pe Charcha 2.0''
                    Prime Minister Narendra Modi interacts with a total of 2000
                    students, parents and teachers in the national capital
                    today.
                  </p>
                </div>
              </Link>
            </div>
            <div className="blog">
              <div className="center-res">
                <div className="blog-image" id="img3" />
              </div>
              <Link to="/comming-soon">
                <div className="blog-post">
                  <h1 className="blog-post-head">
                    Expert Guest Lectures and Research Interaction
                  </h1>

                  <p className="blog-post-p">
                    Three eminent academicians, Prof. B. B. Chaudhuri, ISI
                    Kolkata, Prof. S. Sadagopan, IIIT Bangalore and Prof. B.
                    Chanda, ISI Kolkata visited the IIIT Allahabad campus
                    between 20th and 23rd March 2018.
                  </p>
                </div>
              </Link>
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
                <Link to="/comming-soon" className="news-link fonts">
                  Coding Competition for first years to be held on 4 april 2019.
                </Link>
                <p className="date">March 28, 2019</p>
              </div>
              {/* <div className="news-article">
                <Link to="/comming-soon" className="news-link fonts">
                  New Office of Undergraduate Financial Aid promotes clarity
                </Link>
                <p className="date">January 30, 2019</p>
              </div>
              <div className="news-article hides">
                <Link to="/comming-soon" className="news-link fonts">
                  Christopher L. Miller’s ‘Impostors’ asks readers: What’s in a
                  byline?
                </Link>
                <p className="date">January 30, 2019</p>
              </div>
              <div className="news-article hides">
                <Link to="/comming-soon" className="news-link fonts">
                  From Yale to data science: How one alum made the leap
                </Link>
                <p className="date">January 30, 2019</p>
              </div> */}
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
              <p>Payment Gateway for various IIIT Lucknow</p>
              <button className="payment-button" disabled>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
