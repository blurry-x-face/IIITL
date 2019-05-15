import pdfLogo from "../../assets/blogs/Letter_circulation_18022019.pdf";
import pdfFee from "../../assets/blogs/fee-structure.pdf";
import ApplicationForm from "../../assets/blogs/Format_Application_IIITL.docx";
import tenderPDF from "../../assets/downloads/Tender.pdf";
import tendorExtension from "../../assets/downloads/Tender_Extension.pdf";
import tendorVehicle from "../../assets/announcementsData/FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW.pdf";

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
    head: "CCMT 2019",
    para: "",
    linkPara: "Click here to find more  ->",
    link: "/admissions-MTECH",
    p: "",
    marquee: "CCMT 2019",
    date: "May 15, 2019"
  }
];

const tenders = [
  {
    head: "Tender Notice for Director's Premises",
    link: tenderPDF,
    isExpired: true
  },
  {
    head: "Extension of Tender for Director's Premises",
    link: tendorExtension,
    isExpired: false
  },
  {
    head: "Tender Notice for Hiring of Different types of vehicles",
    link: tendorVehicle,
    isExpired: false
  }
];

export { AnnouncementsData, tenders };
