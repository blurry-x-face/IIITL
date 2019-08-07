import pdfLogo from "../../assets/blogs/Letter_circulation_18022019.pdf";
import pdfFee from "../../assets/blogs/fee-structure.pdf";
import ApplicationForm from "../../assets/blogs/Format_Application_IIITL.docx";
import tenderPDF from "../../assets/downloads/Tender.pdf";
import tendorExtension from "../../assets/downloads/Tender_Extension.pdf";
import tendorVehicle from "../../assets/announcementsData/FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW.pdf";
import tendorExtension1 from "../../assets/downloads/Tender_Extension1.pdf";
import tendorLeased_Line from "../../assets/downloads/Leased_Line.pdf";
import visitingfaculty from "../../assets/downloads/visitingfaculty.jpg";
import phdlist from "../../assets/downloads/phdlist.pdf";
import tendorLeased_Line1 from "../../assets/downloads/Corrigendum.pdf";
import Academic_Calander from "../../assets/downloads/AcademicCal.pdf";
import Tender_Security from "../../assets/downloads/tender_security.pdf";
import Freshers_Info from "../../assets/downloads/freshersinfo.pdf";
import TenderCorrigendum_Security from "../../assets/downloads/TenderCorrigendum.pdf";
import Phd_result1 from "../../assets/downloads/Phdresult.pdf";
import Mtech_advertisement from "../../assets/downloads/MTechadvertiesment.pdf";
import Tender_Catering from "../../assets/downloads/TenderCatering.pdf";
import Tender_librarybooks from "../../assets/downloads/Tenderlibrarybooks.pdf";
import Tender_housekeeping from "../../assets/downloads/Tenderhousekeeping.pdf";
import Reporting_site from "../../assets/downloads/reportingsite.pdf";
//import newGIF from "../../../assets/new.gif";




const AnnouncementsData = [
  // here p is the para in the latest news section(Home page)
  {
    head: "Updated Academic Calendar",
    para: "Academic Calender for new Semester has been Updated",
    linkPara: "New Calender->",
    link: "/calender"
  },
  {
    head: "Updated Fee Structure",
    para: "Fee Structure for new Semester has been Updated",
    linkPara: "New Fee Structure->",
    link: pdfFee
  },
  {
    head:
      "Postponement of Selection Process on 14th October 2018 for IIIT Lucknow",
    para:
      "Postponement of proposed Selection Process on 14th October 2018 for the post of Junior Superintendent and Junior Engineer for IIIT Lucknow till further order. Will be intimated next date when it is finalized.",
    linkPara: "",
    link: ""
  },
  {
    head: "Recruitment of Faculty in IIIT-Lucknow",
    para:
      "IIIT Lucknow is Recruiting Faculty, you can find Advertisement and Application form below",
    linkPara: "Application Form->",
    link: ApplicationForm
  },
  {
    head: "Logo Design Contest for IIIT-Lucknow",
    para:
      "Logo Design Contest for IIIT-Lucknow The Contest is open to all IIITL Students, Employees and all stake holders of IIITL",
    linkPara: "PDF->",
    link: pdfLogo,
    p:
      "The Contest is open to all IIITL Students, Employees and all stake holders of IIITL.",
    marquee: "Logo Design Contest",
    date: "March 2, 2019"
  },
  {
    head: "Tender Notice",
    para: "Hiring of residential premises for Director,IIIT-L",
    linkPara: "PDF->",
    link: tenderPDF,
    p: "Hiring of residential premises for Director,IIIT-L",
    marquee: "Tender Notice for Director's Premises",
    date: "April, 2019"
  },
  {
    head: "Extension of Tender for Director's Premises",
    para:
      "Extension of Tender for hiring of premises for Director IIIT Lucknow",
    linkPara: "PDF->",
    link: tendorExtension,
    p: "Extension of Tender for hiring of premises for Director IIIT Lucknow",
    marquee: "Extention of Tender for Director's Premises",
    date: "April, 2019"
  },
  {
    head: "Tender Notice for Hiring of Different types of vehicles",
    para:
      "FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW",
    linkPara: "PDF->",
    link: tendorVehicle,
    p:
      "Tender Notice for Hiring of Different types of vehicles for IIIT Lucknow",
    marquee: "Tender Notice for Hiring of Different types of vehicles",
    date: "May 2, 2019"
  },
  {
    head: "Call for PhD Admissions, 2019",
    para:
      "IIIT Lucknow invites applications for admission to the Ph.D. Programme",
    linkPara: "Click here to find more  ->",
    link: "/admissions-Phd",
    p: "IIIT Lucknow invites applications for admission to the Ph.D. Programme",
    marquee: "Call for PhD Admissions, 2019",
    date: "May 12, 2019"
  },
  
  {
    head: "Extension of Tender for hiring of Different type of Vehicles",
    para:
      "Extension of Tender for hiring of Different type of Vehicles IIIT Lucknow",
    linkPara: "PDF->",
    link: tendorExtension1,
    p:
     "Extension of Tender for hiring of Different type of Vehicles IIIT Lucknow",
    marquee: "Extention of Tender for hiring of Different type of Vehicles",
    date: "April, 2019"
  },
  {
    head: "CCMT 2019",
    para: "",
    linkPara: "Click here to find more  ->",
    link: "/admissions-MTECH",
    p: "",
    marquee: "CCMT 2019",
    date: "May 15, 2019"
  },
 {
    head: "Extension of Last date of PhD Application submission",
    para:
      "IIIT Lucknow invites applications for admission to the Ph.D. Programme",
    linkPara: "Click here to find more  ->",
    link: "/admissions-Phd",
    p: "IIIT Lucknow invites applications for admission to the Ph.D. Programme",
    marquee: "Extension of Last date of PhD Application submission",
    date: "June, 2019"
  },
  {
    head: "Tender for procurement of 500 Mbps Internet Leased Line  Connectivity",
    linkPara: "Click here to find more  ->",
    link: tendorLeased_Line,
    p: "Tender for procurement of 500 Mbps Internet Leased Line  Connectivity",
    marquee: "Tender for procurement of 500 Mbps Internet Leased Line  Connectivity",
    date: "June, 2019"
    
  },
  {
    head: "Recruitment payment link is active ",
    link: "/",
    p: "Recruitment payment link is active",
    marquee: "Recruitment payment link is active ",
    date: "June, 2019"
  },
  
  {
    head: "Recruitment Notice for Teaching positions",
    para: "",
    linkPara: "Click here to find more  ->",
    link: "/career/faculty",
    p: "Recruitment Notice for Teachning positions",
    marquee: "Recruitment Notice for Teaching positions ",
    date: "June, 2019"
  },
  {
    head: "Recruitment Notice for Non-Teaching positions",
    para: "",
    linkPara: "Click here to find more  ->",
    link: "/career/staff",
    p: "Recruitment Notice for Non-Teaching positions",
    marquee: "Recruitment Notice for Non-Teaching positions ",
    date: "June, 2019"
  },
  {
    head: "Recruitment Notice for Adjunt/Visiting Faculty",
    para: "",
    linkPara: "Please click here->",
    link: visitingfaculty,
    p: "Recruitment Notice for Adjunt/Visiting Faculty",
    marquee: "Recruitment Notice for Adjunt/Visiting Faculty ",
    date: "June, 2019"
  },
  {
    head: "Shortlisted Candidates for Ph.D Interview",
    para: "",
    linkPara: "List of shortlisted candidates->",
    link: phdlist,
    p: "Shortlisted Candidates for Ph.D Interview",
    marquee: "Shortlisted Candidates for Ph.D Interview ",
    date: "July, 2019"
  },
  {
    head: "Extension of Tender of 500 Mbps Internet Leased Line Connectivity",
    para:
      "Extension of Tender of 500 Mbps Internet Leased Line Connectivity",
    linkPara: "Please click here->",
    link: tendorLeased_Line1,
    p:
     "Extension of Tender of 500 Mbps Internet Leased Line Connectivity",
    marquee: "Extension of Tender of 500 Mbps Internet Leased Line Connectivity",
    date: "July, 2019"
  },
  
  {
    head: "Tender Notice for Security Services at IIIT-Lucknow",
    linkPara: "Click here to find more  ->",
    link: Tender_Security,
    p: "Tender Notice for Security Services at IIIT-Lucknow",
    marquee: "Tender Notice for Security Services at IIIT-Lucknow",
    date: "July, 2019"
    
  },
  {
    head: "List of provisionally selected Candidates in PhD ",
    linkPara: "Click here to find more  ->",
    link: Phd_result1,
    p: "List of provisionally selected Candidates in PhD",
    marquee: "List of provisionally selected Candidates in PhD",
    date: "July, 2019"
    
  },
  {
    head: "Call for Application to the M.Tech Programme.",
    linkPara: "Click here to find more  ->",
    link: Mtech_advertisement,
    p: "Call for Application to the M.Tech Programme.",
    marquee: "Call for Application to the M.Tech Programme.",
    date: "July, 2019"
    
  },
  {
    head: "Corrigendum :Tender of Security Services ",
    linkPara: "Click here to find more  ->",
    link: TenderCorrigendum_Security,
    p: "Corrigendum :Tender of Security Services",
    marquee: "Corrigendum :Tender of Security Services",
    date: "July, 2019"
    
  },
  {
    head: "Tender for providing Catering Services for Hostel ",
    linkPara: "Click here to find more  ->",
    link: Tender_Catering,
    p: "Tender for providing Catering Services for Hostel",
   // <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
    marquee: "Tender for providing Catering Services for Hostel",
    date: "July, 2019"
    
  },
  {
    head: "Tender for Procurement of Library Books ",
    linkPara: "Click here to find more  ->",
    link: Tender_librarybooks,
    p: "Tender for Procurement of Library Books",
   // <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
    marquee: "Tender for Procurement of Library Books",
    date: "July, 2019"
    
  },
  {
    head: "Tender for Housekeeping services ",
    linkPara: "Click here to find more  ->",
    link: Tender_housekeeping,
    p: "Tender for Housekeeping services",
   // <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
    marquee: "Tender for Housekeeping services",
    date: "July, 2019"
    
  },

  
  {
    head: "Information for Freshers",
    linkPara: "Click here to find more  ->",
    link: Freshers_Info,
    p: "Information for Freshers",
    marquee: "Information for Freshers",
    date: "July, 2019"
  
  },
  {
    head: "Reporting site for B.Tech & M.Tech Admission",
    linkPara: "Click here to find more  ->",
    link: Reporting_site,
    p: "Reporting site for B.Tech & M.Tech Admission",
    marquee: "Reporting site for B.Tech & M.Tech Admission",
    date: "July, 2019"
  
  },
  {
    head: "Academic Calander for July-December 2019",
    para:
      "Academic Calander for July-December 2019",
    linkPara: "Please click here->",
    link: Academic_Calander,
    p:
     "Academic Calander for July-December 2019",
    marquee: "Academic Calander for July-December 2019",
    date: "July, 2019"
  }
  
 
  
];

const tenders = [
  {
    head: "Tender Notice for Director's Premises",
    link: tenderPDF,
    isExpired: true,
    publishedDate: "11/11/99",
    expiryDate: "24/04/19"
  },
  {
    head: "Extension of Tender for Director's Premises",
    link: tendorExtension,
    isExpired: true,
    publishedDate: "11/11/99",
    expiryDate: "05/06/19"
  },
  {
    head: "Tender Notice for Hiring of Different types of vehicles",
    link: tendorVehicle,
    publishedDate: "11/11/99",
    expiryDate: "24/05/19",
    isExpired: true,
  },
  {
    head: "Extension of Tender for hiring of Different type of Vehicles",
    link: tendorExtension1,
    isExpired: true,
    publishedDate: "11/11/99",
    expiryDate: "10/06/19"
  },
  
  {
    head: "Tender for procurement of 500 Mbps Internet Leased Line  Connectivity",
    link: tendorLeased_Line,
    isExpired: true,
    publishedDate: "19/06/19",
    expiryDate: "02/07/19"
  },
  {
    head: "Extension of Tender of 500 Mbps Internet Leased Line Connectivity",
    link: tendorLeased_Line1,
    isExpired: true,
    publishedDate: "03/07/19",
    expiryDate: "10/07/19"
    
  },
  {
    head: "Tender Notice for Security Services at IIIT-Lucknow",
    link: Tender_Security,
    isExpired: false,
    publishedDate: "06/07/19",
    expiryDate: "26/07/19"
    
  },
  {
    head: "Corrigendum :Tender of Security Services",
    link: TenderCorrigendum_Security,
    isExpired: false,
    publishedDate: "20/07/19",
    expiryDate: "30/07/19"
    
  },
  {
    head: "Tender for providing Catering Services for Hostel",
    link: Tender_Catering,
    isExpired: false,
    publishedDate: "23/07/19",
    expiryDate: "13/08/19"
    
  },
  {
    head: "Tender for Procurement of Library Books",
    link: Tender_librarybooks,
    isExpired: false,
    publishedDate: "27/07/19",
    expiryDate: "16/08/19"
  },
  {
    head: "Tender for Housekeeping services",
    link: Tender_housekeeping,
    isExpired: false,
    publishedDate: "27/07/19",
    expiryDate: "16/08/19"
  }
  

];

export { AnnouncementsData, tenders };
