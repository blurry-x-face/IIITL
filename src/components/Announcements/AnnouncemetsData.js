import pdfLogo from "../../assets/blogs/Letter_circulation_18022019.pdf";
import pdfFee from "../../assets/blogs/fee-structure.pdf";
import ApplicationForm from "../../assets/blogs/Format_Application_IIITL.docx";
import tenderPDF from "../../assets/downloads/Tender.pdf";
import tendorExtension from "../../assets/downloads/Tender_Extension.pdf";
import tendorVehicle from "../../assets/announcementsData/FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW.pdf";

const AnnouncementsData = {
  announcement1: {
    head: "Logo Design Contest for IIIT-Lucknow",
    para:
      "Logo Design Contest for IIIT-Lucknow The Contest is open to all IIITL Students, Employees and all stake holders of IIITL",
    linkPara: "PDF->",
    link: pdfLogo
  },
  announcement2: {
    head: "Updated Academic Calendar",
    para: "Academic Calender for new Semester has been Updated",
    linkPara: "New Calender->",
    link: "/calender"
  },
  announcement3: {
    head: "Updated Fee Structure",
    para: "Fee Structure for new Semester has been Updated",
    linkPara: "New Fee Structure->",
    link: pdfFee
  },
  announcement4: {
    head:
      "Postponement of Selection Process on 14th October 2018 for IIIT Lucknow",
    para:
      "Postponement of proposed Selection Process on 14th October 2018 for the post of Junior Superintendent and Junior Engineer for IIIT Lucknow till further order. Will be intimated next date when it is finalized.",
    linkPara: "",
    link: "l"
  },
  announcement5: {
    head: "Recruitment of Faculty in IIIT-Lucknow",
    para:
      "IIIT Lucknow is Recruiting Faculty, you can find Advertisement and Application form below",
    linkPara: "Application Form->",
    link: ApplicationForm
  },
  announcement6: {
    head: "Tender Notice",
    para: "Hiring of residential premises for Director,IIIT-L",
    linkPara: "PDF->",
    link: tenderPDF
  },
  announcement7: {
    head: "Extension of Tender for Director's Premises",
    para:
      "Extension of Tender for hiring of premises for Director IIIT Lucknow",
    linkPara: "PDF->",
    link: tendorExtension
  },
  announcement8: {
    head: "Tender Notice for Hiring of Different types of vehicles",
    para:
      "FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW",
    linkPara: "PDF->",
    link: tendorVehicle
  }
};
const AnnouncementsListData = [
  {
    head: "Tender Notice for Hiring of Different types of vehicles",
    para:
      "FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW",
    linkPara: "Tendor->",
    link: "/announcements/8"
  },
  {
    head: "Extension of Tender for Director's Premises",
    para:
      "Extension of Tender for hiring of premises for Director IIIT Lucknow",
    linkPara: "Tendor->",
    link: "/announcements/7"
  },
  {
    head: "Tender Notice for Director's Premises",
    para: "Hiring of residential premises for Director,IIIT-L",
    linkPara: "PDF->",
    link: "/announcements/6"
  },
  {
    head: "Logo Design Contest for IIIT-Lucknow",
    para:
      "Logo Design Contest for IIIT-Lucknow The Contest is open to all IIITL Students, Employees and all stake holders of IIITL",
    linkPara: "PDF->",
    link: "/announcements/1"
  },
  {
    head: "Updated Academic Calendar",
    para: "Academic Calender for new Semester has been Updated",
    linkPara: "New Calender->",
    link: "/announcements/2"
  },
  {
    head: "Updated Fee Structure",
    para: "Fee Structure for new Semester has been Updated",
    linkPara: "New Fee Structure->",
    link: "/announcements/3"
  },
  {
    head:
      "Postponement of Selection Process on 14th October 2018 for IIIT Lucknow",
    para:
      "Postponement of proposed Selection Process on 14th October 2018 for the post of Junior Superintendent and Junior Engineer for IIIT Lucknow till further order. Will be intimated next date when it is finalized.",
    linkPara: "",
    link: "/announcements/4"
  },
  {
    head: "Recruitment of Faculty in IIIT-Lucknow",
    para:
      "IIIT Lucknow is Recruiting Faculty, you can find Advertisement and Application form below",
    linkPara: "Application Form->",
    link: "/announcements/5"
  }
];

export { AnnouncementsData, AnnouncementsListData };
