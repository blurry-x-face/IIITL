import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import PhdInformation from "../../../assets/downloads/PhD_Information_Brochure.pdf";
import NocCertificate from "../../../assets/downloads/PHD_NO_OBJECTION_CERTIFICATE.pdf";
import Advertisement from "../../../assets/downloads/PhD_Advertisement.pdf";
import SponsorshipLetter from "../../../assets/downloads/PHD_SPONSORSHIP_LETTER.pdf";
import ApplicationForm from "../../../assets/downloads/PhD_Application_Form.pdf";
import Link from "react-router-dom/Link";

class AdmissionIT extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head">Call For PhD Admissions 2019</h1>
          <p className="btech-it-p">
            IIIT Lucknow invites applications for admission to the Ph.D.
            Programme in the discipline of Computer Science. The goal of the
            Ph.D. programme at IIIT-L is to prepare the scholars for becoming
            global academic, industrial and R&amp;D leaders.
          </p>
          <p className="btech-it-p">
            Some key features of Ph.D. programme in IIIT-L are listed below.
          </p>
          <p className="btech-it-p">
            <ul>
              <li style={{ marginBottom: "15px" }}>
                IIIT-L is an Institute of National Importance, established by an
                Act of Parliament, and has excellent academic record and are
                placed in highly reputed organizations (
                <a
                  href="https://placements.iiitl.ac.in/#/placement-stats"
                  style={{ color: "#005f99" }}
                >
                  Placement Statistics
                </a>
                ).
              </li>
              <li style={{ marginBottom: "15px" }}>
                IIIT-L is committed to bring the best of the faculty and
                resources to the Institute to enable students, create solutions
                for today’s problems and products for the needs of the country,
                especially the underprivileged.
              </li>
              <li style={{ marginBottom: "15px" }}>
                Scholars admitted to Ph.D. programme under regular FULL TIME
                RESEARCH SCHOLAR, are eligible for the Institute
                Teaching/Research Assistantship of Rs 24000/- per month.
              </li>
              <li style={{ marginBottom: "15px" }}>
                Students are encouraged for showcasing research work through
                conference/workshop participation with institute financial
                support.
              </li>
              <li style={{ marginBottom: "15px" }}>
                Applicants must read 
                <a href={PhdInformation} style={{ color: "#005f99" }}>
                  Information Brochure
                </a>{" "}
                for Ph.D. Admission, for eligibility criteria, Admission
                category, Research areas and other details.
              </li>
              <li style={{ marginBottom: "15px" }}>
                The application fee for the Ph.D. Application form is as
                follows:
                <ul>
                  <li style={{ marginBottom: "15px", marginTop: "15px" }}>
                    <strong>
                      General Category: Rupees 1000 only, per application form.
                    </strong>
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <strong>
                      OBC/SC/ST/PWD: Rupees 500 only, per application form
                    </strong>
                  </li>
                </ul>
              </li>
              <li style={{ marginBottom: "15px" }}>
                Payment can be made through the following mode:
                <ol>
                  <li style={{ marginBottom: "15px", marginTop: "15px" }}>
                    <strong>NEFT/RTGS Details:</strong> The requisite amount may
                    be transferred to
                    <br />
                    Account Name: <strong>IIIT SOCIETY</strong>
                    <br />
                    Account Number: <strong>46820100003672</strong>
                    <br />
                    IFSC Code: <strong>BARB0JHALWA</strong>
                    <br />
                    Bank name and Address:{" "}
                    <strong>Bank of Baroda, Jhalwa Branch, Allahabad.</strong>
                    <p>
                      <strong>Important Note:</strong>
                    </p>
                    <p>
                      <strong>
                        The payment details must be carefully filled in the
                        space provided in the application form. Additionally,
                        the scanned copy of the payment receipt must be attached
                        with the application form.
                      </strong>
                    </p>
                  </li>
                </ol>
              </li>
            </ul>
          </p>
          <div className="admissions-it-seat admissions-useful-links">
            <h1 className="admissions-sub-head">Important Dates</h1>
          </div>
          <div className="admissions-it-seat-table">
            <table style={{ width: "100%" }}>
              <tr>
                <th>S. No.</th>
                <th>Particulars</th>
                <th>Dates</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>Application forms are available from</td>
                <td>12th May 2019</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Last date of submitting applications</td>
                <td>15th May 2019</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Display of list of shortlisted candidates</td>
                <td>20th June 2019</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Written test and Interviews</td>
                <td>30th June 2019</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Announcement of results</td>
                <td>2nd July 2019</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Reporting at IIIT- L by</td>
                <td>15th July 2019</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head">Application Process:</h1>
        </div>
        <p className="btech-it-p">
          <ol>
            <li style={{ marginBottom: "15px" }}>
              All applications will be received through email only.
            </li>
            <li style={{ marginBottom: "15px" }}>
              An applicant has to download and fill the Application Form and
              attach a recent passport size photograph on the space provided in
              the Application Form.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>
                Scanned copy of the completely filled and self-attested
                application form along with self- attested proofs of education,
                date of birth, experience, payment receipt etc. should be sent
                to{" "}
                <a
                  href="mailto:phdadmissions@iiitl.ac.in"
                  style={{ color: "#005f99" }}
                >
                  phdadmissions@iiitl.ac.in
                </a>{" "}
                positively by <u>5:00 pm of the last date</u>. Self-attested
                proofs of any other necessary information, depending upon the
                category under which the applicant seeks admission, should also
                be attached.
              </strong>
            </li>
            <li style={{ marginBottom: "15px" }}>
              The applicant has to carry the print out of all the documents
              (self-attested scanned copy of the Application form and Supporting
              Documents) and their originals during the written test/interview.
            </li>
            <li style={{ marginBottom: "15px" }}>
              The applicant has to send fresh application to apply for multiple
              disciplines and payment also to be made separately.
            </li>
            <li style={{ marginBottom: "15px" }}>
              Please read the instructions given in the Ph.D. information
              brochure carefully before filling up the application form.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>
                Contact: For any clarification, you may contact us through email
                at{" "}
                <a
                  href="mailto:phdadmissions@iiitl.ac.in"
                  style={{ color: "#005f99" }}
                >
                  phdadmissions@iiitl.ac.in
                </a>{" "}
                or you may reach:
                <br />
                <br />
                <Link
                  to="/faculty/vks"
                  target="_blank"
                  style={{ color: "#005f99" }}
                >
                  Dr. Vishal Krishna Singh
                </Link>
                <br />
                (Faculty In-Charge PG & Research)
              </strong>
            </li>
          </ol>
        </p>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head">Annexures:</h1>
        </div>
        <p className="btech-it-p">
          <ol type="I">
            <li style={{ marginBottom: "15px" }}>
              Click here to download the{" "}
              <a
                href={ApplicationForm}
                style={{ color: "#005f99" }}
                target="_blank"
              >
                Application Form
              </a>
              .
            </li>
            <li style={{ marginBottom: "15px" }}>
              Click here to download the{" "}
              <a
                href={PhdInformation}
                style={{ color: "#005f99" }}
                target="_blank"
              >
                Information Brochure.
              </a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              Click here to download the{" "}
              <a
                href={SponsorshipLetter}
                style={{ color: "#005f99" }}
                target="_blank"
              >
                Sponsorship Letter
              </a>{" "}
              for candidates applying for Ph.D under sponsored category.
            </li>
            <li style={{ marginBottom: "15px" }}>
              Click here to download the{" "}
              <a
                href={NocCertificate}
                style={{ color: "#005f99" }}
                target="_blank"
              >
                No objection certificate
              </a>{" "}
              for candidates applying under sponsored/working professional/
              deputation.
            </li>
            <li style={{ marginBottom: "15px" }}>
              Click here to download the{" "}
              <a
                href={Advertisement}
                style={{ color: "#005f99" }}
                target="_blank"
              >
                Advertisement
              </a>{" "}
              for Admissions in PhD, 2019
            </li>
          </ol>
        </p>
      </div>
    );
  }
}

export default AdmissionIT;
