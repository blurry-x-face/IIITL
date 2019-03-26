import React from "react";
import "./FacultyTemplate.css";
import { Link } from "react-router-dom";
// import Count from "react-count";

class Template extends React.Component {
  Awards = props => {
    return (
      <div className="faculty-award-inner">
        <div className="faculty-award-head">{props.award.head}</div>
        <div className="faculty-award-detail">{props.award.detail}</div>
      </div>
    );
  };
  Interests = props => {
    let li = props.interests.map(interest => {
      return <li>{interest}</li>;
    });
    return <ul>{li} </ul>;
  };
  Journals = props => {
    let li = props.journals.map(journal => {
      return <li>{journal}</li>;
    });
    return <ol>{li} </ol>;
  };
  Confrence = props => {
    let li = props.conferences.map(journal => {
      return <li>{journal}</li>;
    });
    return <ol>{li} </ol>;
  };
  render() {
    return (
      <div className="faculty-template-global padding-res">
        <div className="faculty-above-nav">
          <div className="faculty-above-nav-inner">
            <div className="faculty-above-nav-head-name">
              Dr. Vishal Krishna Singh
            </div>
            <div className="faculty-above-nav-head-position">Professor</div>
            <div className="faculty-above-nav-head-dept faculty-above-nav-item">
              Department of Information Technology
            </div>
            <div className="faculty-above-nav-head-institute faculty-above-nav-item">
              Indian Institute of Information Technology, Lucknow,UP,India
            </div>
          </div>
        </div>
        <div className="faculty-nav">
          <div class="faculty-nav-inner">
            <Link to="#home" class="faculty-nav-item">
              Home
            </Link>
            <Link to="#home" class="faculty-nav-item">
              Education
            </Link>
            <Link to="#home" class="faculty-nav-item">
              Awards
            </Link>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Publications
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Journals</Link>
                <Link to="#">Conferences</Link>
                <Link to="#">Invited Talks</Link>
                <Link to="#">Patents</Link>
              </div>
            </div>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Experience
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Work Experience</Link>
                <Link to="#">Proffesional Activities</Link>
              </div>
            </div>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Students
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Ph.D. Students</Link>
                <Link to="#">M.Tech Students</Link>
                <Link to="#">MSR Students</Link>
              </div>
            </div>

            <Link to="#home" class="faculty-nav-item">
              Course
            </Link>

            <Link to="#home" class="faculty-nav-item">
              Contact
            </Link>
          </div>
        </div>
        <div className="faculty-body">
          <div className="faculty-interest">
            <div className="faculty-interest-section-1">
              <div className="faculty-interest-head faculty-section-head">
                Research Interests:
              </div>
              <div className="faculty-interest-list">
                <this.Interests interests={interests} />
              </div>
            </div>
            <div className="faculty-interest-section-2">
              <div className="faculty-photo" />
            </div>
          </div>
          <div className="faculty-awards-global">
            <div className="faculty-awards-head faculty-section-head">
              Latest Achievements
            </div>
            <this.Awards award={awards.award1} />
            <this.Awards award={awards.award2} />
            <this.Awards award={awards.award3} />
            <this.Awards award={awards.award4} />
            <this.Awards award={awards.award5} />
          </div>
          <div className="faculty-journals">
            <div className="faculty-journals-head faculty-section-head faculty-journals-head">
              Publications
            </div>
            <div className="faculty-journal-list">
              <this.Journals journals={journalData} />
            </div>
          </div>
          <div className="faculty-conferences">
            <div className="faculty-conference-head faculty-section-head">
              Conference
            </div>
            <div className="faculty-conference-list">
              <this.Confrence conferences={conference} />
            </div>
          </div>
          <div className="faculty-footer">
            <div className="faculty-footer-copy">
              <i class="far fa-copyright" />
              2019 IIIT Lucknow|
            </div>
            <div className="faculty-footer-department">Department of EE|</div>
            <div className="faculty-footer-department">
              Last Updated: March 2019
            </div>
            {/* <Count
              isViewCounter={true}
              counterText="views"
              firebaseHost="https://counter-button.firebaseio.com/"
              firebaseResourceId="views-counter"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

const interests = [
  "Meta-Materials",
  "Microwave Antennas",
  "Microwave Metamaterial Absorbers",
  "Finite-Difference Time-Domain (FD-TD) Technique",
  "Electromagnetics"
];

const awards = {
  award1: {
    head:
      "Young Scientist Award in URSI Asia-Pacific Radio Science Conference AP-RASC-2019",
    detail:
      "Dr. Debdeep Sarkar (completed his PhD under supervision of Dr. K V Srivastava) has been selected for Young Scientist Award AP-RASC-2019 (URSI Asia-Pacific Radio Science Conference AP-RASC-2019) instituted by the International Union of Radio Science (URSI). He will be presenting the paper entitled, “Far-field Envelope Correlation Coefficient and Near-field Reactive Energy of MIMO Antennas: An FDTD-IDM-CGF Approach,” authored by Debdeep Sarkar, Said M. Mikki, Kumar Vaibhav Srivastava and Yahia M. M. Antar."
  },
  award2: {
    head: "Best Paper Award, InCAP 2018",
    detail:
      "Paper entitled 'Eight-Port MIMO Antenna for Integrated Narrowband / Ultra-wideband (UWB) Applications,' authored by Jawed Aquil, Debdeep Sarkar and Kumar Vaibhav Srivastava has been selected for Best Paper Award at 2nd Place in 1st IEEE Indian Conference on Antennas and Propagation (InCAP), at Hyderabad, India, 2018."
  },
  award3: {
    head:
      "Best Ph.D. Thesis: INAE Innovative Student Projects Award 2018 - Doctoral Level",
    detail:
      "The thesis of Dr. Saptarshi Ghosh (completed his Ph.D. program in Oct. 2017) has been selected for the conferment of INAE Innovative Student Projects Award 2018 at Doctoral Level."
  },
  award4: {
    head:
      "Young Scientist Award in 2nd URSI Atlantic Radio Science Meeting (AT-RASC), 2018, Spain",
    detail:
      'Dr. Saptarshi Ghosh has been selected for Young Scientist Award in 2nd URSI Atlantic Radio Science Meeting (AT-RASC), held in Gran Canaria, Spain on May 27- June 2, 2018. The award is extremely coveted and being received by a handful of researchers in this prestigious conference. He has received this award for paper entitled "A Polarization-Independent Switchable Absorber with Independently Controllable Absorption Frequencies," authored by Saptarshi Ghosh, and Kumar Vaibhav Srivastava.'
  },
  award5: {
    head: "Best Paper Award, IEEE UPCON 2018",
    detail:
      'Paper entitled "Frequency Reconfigurable Compact Multi-Band Printed Monopole Antenna Using Capacitively Loaded Loops," authored by Mehak Bansal, Debdeep Sarkar and Kumar Vaibhav Srivastava has been selected for Best Paper Award in Electronics and Communication Engineering Track in 5th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON-2018) at MMMUT, Gorakpur, India, 2018.'
  }
};

const journalData = [
  'Debdeep Sarkar, Said Mikki, Kumar Vaibhav Srivastava and Yahia Antar, "Time-Domain Dynamics of Antenna Reactive Energy Using FDTD-IDM Method," accepted for publication in IEEE Transactions on Antennas and Propagation, 2019.',
  'Gaganpreet Singh, Harsh Sheokhand, Saptarshi Ghosh, Kumar Vaibhav Srivastava , J. Ramkumar, S. Anantha Ramakrishnan, "Excimer Laser Micromachining of Indium Tin Oxide for Fabrication of Optically Transparent Metamaterial Absorbers," accepted for publication in Springer: Applied Physics A, 2019.',
  'Harsh Sheokand, Gaganpreet Singh, Saptarshi Ghosh, J. Ramkumar S. Anantha Ramakrishna, and Kumar Vaibhav Srivastava, "An Optically Transparent Broadband Microwave Absorber using Interdigital Capacitance," IEEE Antennas and Wireless Propagation Letters, vol. 18, no. 1, pp. 113 – 117, 2019.',
  'Yakeen Tayde, Mondeep Saikia, Kumar Vaibhav Srivastava and S Anantha Ramakrishna, "Polarization-insensitive Broadband Multi-layered Absorber Using Screen Printed Patterns of Resistive Ink," IEEE Antennas and Wireless Propagation Letters, vol. 17, pp. 2489 – 2493, 2018.',
  'Debdeep Sarkar and Kumar Vaibhav Srivastava , "Modified Cross-correlation Green`s Function with FDTD for Characterization of MIMO Antennas in Non-uniform Propagation Environment," IEEE Transactions on Antennas and Propagation, vol. 66, no. 7, pp. 3798-3803, 2018.',
  'Praneet Munaga, Somak Bhattacharyya, Saptarshi Ghosh, and Kumar Vaibhav Srivastava , "An Ultra-thin Compact Polarization-Independent Hexa-Band Metamaterial Absorber," Springer: Applied Physics A, 2018, 124: 331. https://doi.org/10.1007/s00339-018-1751-x.',
  'Mahesh Singh Bisht, Archana Rajput and Kumar Vaibhav Srivastava , "Design and analysis of Gradient Index Metamaterial based cloak with wide bandwidth and physically realizable material parameters," Springer: Applied Physics A, 2018, 124: 300. https://doi.org/10.1007/s00339-018-1705-3.'
];

const conference = [
  'Debdeep Sarkar, Said M. Mikki, Kumar Vaibhav Srivastava and Yahia M. M. Antar, "Far-field Envelope Correlation Coefficient and Near-field Reactive Energy of MIMO Antennas: An FDTD-IDM-CGF Approach," accepted for presentation in 2019 URSI Asia-Pacific Radio Science Conference (AP-RASC 2019), New Delhi, India, 09-15 March, 2019.',
  'Sudha Malik, Mondeep Saikia, Gaganpreet Singh, J. Ramkumar, S. Anantha Ramakrishna and Kumar Vaibhav Srivastava, "Design of Broadband Microwave Absorber with 20 dB Absorption Bandwidth," accepted for presentation in 2019 URSI Asia-Pacific Radio Science Conference (AP-RASC 2019), New Delhi, India, 09-15 March, 2019.',
  'Jawed Aquil, Debdeep Sarkar and Kumar Vaibhav Srivastava, "Eight-Port MIMO Antenna for Integrated Narrowband / Ultra-wideband (UWB) Applications," in 1st IEEE Indian Conference on Antennas and Propagation (InCAP 2018), Hyderabad, India, 2018.'
];
