import React from "react";
import "./Director.css";

const Dir = () => {
  return (
    <div className="dir-global padding-res" id='dir-padding'>
      <div className="dir-inner">
        <div className="dir-head">
          <p className='dir-head-p' >Director's Message</p> 
        </div>
        <div className="dir-contents">
          <div className="dir-content-left">
            <div className="dir-card">
              <div className="dir-img" />
              {/* <div className="dir-name">
                Dr. Arun Mohan Sherry,<br />
                Director,<br />
                IIIT Lucknow
              </div> */}
            </div>
          </div>
          <div className="dir-content-right">
            Evolving a brand-name takes years of nurturing, hard work and
            passion. IIIT Lucknow, which started its journey in 2015, has
            brought in the culture of innovation among its students. These
            students have received training that is ‘deep in depth’, yet ‘wide
            in breadth’. Such training has moulded them into better qualified
            professionals.
            <br />
            <br />
            At the Indian Institute of Information Technology Lucknow, we are
            committed to playing a key role in creating an ambience for the
            creation of new ideas, knowledge and graduates who will be
            tech-leaders of tomorrow. We are convinced that in order to make
            significant contributions to the development of the country and to
            the improvement in quality of life of its citizens, we will need to
            pursue a strategy that fosters creativity, supports
            interdisciplinary research and education. This will provide the
            students with an understanding and appreciation not only of the
            process of knowledge creation, but also of the process by which
            technology and knowledge may be used to create wealth as well as
            achieve social and economic goals.Therefore, I am quite confident
            that our students shall perform the best on any platform and do
            justice to the trust placed on them.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dir;
