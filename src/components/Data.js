import BlogImage1 from "../assets/dr-arun-sherry.jpg";
import BlogImage2 from "../assets/bpost2.jpeg";
import BlogImage3 from "../assets/expert.jpg";

const academicLinks = {
  head: "Useful Links",
  anchor: {
    name: [
      "Academic Schedule",
      "Seat Matrix",
      "Course Structure",
      "List of Students"
    ],
    links: ["/calender", "/seat-matrix", "/course-structure", "/comming-soon"]
  }
};
const Ins = {
  head: "Institute",
  anchor: {
    name: [
      "At a Glance",
      "Board of Governors",
      "Finance Committee",
      "Senate",
      "Reach Us"
    ],
    links: [
      "/About",
      "/board-governors",
      "/comming-soon",
      "/senate",
      "/contactus"
    ]
  }
};
const InsAdmin = {
  head: "Administration",
  anchor: {
    name: [
      "Directorate",
      "Office & Staff",
      "Academic Affairs",
      "Faculty",
      "Student",
      "Registrar's Office",
      "Downloads"
    ],
    links: [
      "/directorate",
      "/staff",
      "/comming-soon",
      "/faculty",
      "/comming-soon",
      "/comming-soon",
      "/downloads"
    ]
  }
};
const seatData = {
  general: [
    ["Information Technology", 31],
    ["Computer Science & Engineering", 31],
    ["Computer Science (M.Tech.)", 11]
  ],
  OBCNC: [
    ["Information Technology", 16],
    ["Computer Science & Engineering", 16],
    ["Computer Science (M.Tech.)", 8]
  ],
  SC: [
    ["Information Technology", 9],
    ["Computer Science & Engineering", 9],
    ["Computer Science (M.Tech.)", 5]
  ],
  ST: [
    ["Information Technology", 5],
    ["Computer Science & Engineering", 5],
    ["Computer Science (M.Tech.)", 2]
  ],
  GeneralPWD: [
    ["Information Technology", 2],
    ["Computer Science & Engineering", 2],
    ["Computer Science (M.Tech.)", 1]
  ],
  OBCNCPWD: [
    ["Information Technology", 1],
    ["Computer Science & Engineering", 1],
    ["Computer Science (M.Tech.)", 0]
  ],
  NULL: [
    ["Information Technology", 0],
    ["Computer Science & Engineering", 0],
    ["Computer Science (M.Tech.)", 0]
  ]
};
const courseStructure = {
  tableHead: [
    "Code",
    "Title",
    "Type",
    "Theory Credit",
    "Lab/Paper Credit",
    "Prerequisites"
  ],
  sem1: {
    code: [
      "EEDC132C",
      "ECAS130C",
      "IITC102C",
      "IITP132C",
      "SMAT130C",
      "SPHY132C",
      "MLCCS102C"
    ],
    title: [
      "Electronics Devices And Circuits",
      "Circuit Analysis And Synthesis",
      "Introduction To Computers",
      "Introduction To Programming",
      "Mathematics - 1",
      "Physics - 1",
      "Language And Communication Skills"
    ],
    type: ["C", "C", "C", "C", "C", "C", "C"],
    theory: ["3", "3", "3", "3", "3", "3", "3"],
    lab: ["2", "0", "0", "2", "0", "2", "0"],
    pre: ["-", "-", "-", "-", "-", "-", "-"],
    name: "sem1"
  },
  sem2: {
    code: [
      "IDMA230C",
      "EDES232C",
      "IDST232C",
      "SPAS230C",
      "ICOA230C",
      "MPOM230C"
    ],
    title: [
      "Discrete Mathematics",
      "Data Structures",
      "Digital Electronics",
      "Probability and Statistics",
      "Computer Organization and Architecture",
      "Principles of Management"
    ],
    type: ["C", "C", "C", "C", "C", "C"],
    theory: ["3", "3", "3", "3", "3", "3"],
    lab: [0, 2, 2, 0, 0, 0],
    pre: ["-", "IITP132C", "-", "SMAT130C", "IITC102C", "-"],
    name: "sem2"
  },
  sem3: {
    code: ["SMAT330C", "IOPS332C", "ITOC330C", "IOOM332C", "EMIP332C"],
    title: [
      "Mathematics - 2",
      "Operating System",
      "Theory Of Computation",
      "Object Oriented Methodologies",
      "Microprocessors"
    ],
    type: ["C", "C", "C", "C", "C"],
    theory: [3, 3, 3, 3, 3],
    lab: [0, 2, 0, 2, 2],
    pre: ["SMAT130C", "ICOA230C", "IDMA230C", "IDST232C", "EDES232C"],
    name: "sem3"
  },
  sem4: {
    code: ["SMAT430C", "IDAA432C", "IPPL430C", "IDBM432C", "EPC0432C"],
    title: [
      "Mathematics - 3",
      "Design And Analysis Of Algorithms",
      "Principles Of Programming Languages",
      "Database Management Systems",
      "Principles Of Communication"
    ],
    type: ["C", "C", "C", "C", "C"],
    theory: [3, 3, 3, 3, 3],
    lab: [0, 2, 0, 2, 2],
    pre: [
      "SMAT230C",
      "IDST232C, IDMA230C",
      "IDST232C",
      "IDST232C, IDMA230C",
      "-"
    ],
    name: "sem4"
  },
  sem5: {
    code: [
      "ICNE532C",
      "ISOE532C",
      "IAIN532C",
      "IGVC532C",
      "MPOE530C",
      "IPRJ505P"
    ],
    title: [
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
      "Graphics And Visual Computing",
      "Principles Of Economics",
      "Mini Project"
    ],
    type: ["C", "C", "C", "C", "C", "C"],
    theory: [3, 3, 3, 3, 3, 0],
    lab: [2, 2, 2, 2, 0, 5],
    pre: ["EPCO432C", "IOOM332C", "IOOM332C", "IDST232C", "-", "-"],
    name: "sem5"
  },
  sem6: {
    code: ["IDOD632C", "IIVP632C", "IDMW632C", "", "", "IPRJ605P"],
    title: [
      "Compiler Design",
      "Image And Video Processing",
      "Data Mining And Warehousing",
      "Elective - 1",
      "Elective - 2",
      "Mini Project"
    ],
    type: ["C", "C", "C", "E", "E", "P"],
    theory: [3, 3, 3, 3, 3, 0],
    lab: [2, 2, 2, 0, 0, 5],
    pre: ["ITOC330C, IITG132C", "IITC132C", "IDBM432C", "-", "-", "-"]
  }
};

const calender = [
  ["Opening of the Elective Portal", "	26 December, 2019", "	Thursday"],
  ["Closing of Elective Portal", "04 January, 2019	", "	Saturday"],
  [
    "Announcement of the alloted Electives to students & opening of portal for ADD/DROP of courses",
    "05 January, 2019",
    "	Monday"
  ],
  [
    "Add/Drop of the Elective Courses closing Date",
    "7 January, 2019",
    "Tuesday"
  ],
  ["Announcement of Frozen Elective Courses", "08 January, 2019", "Wednesday"],
  [
    "	Online Registration and fee Payment duration",
    "20 December, 2018 – 08 January, 2019",
    "Thursday - Tuesday"
  ],
  ["Institute Opening Date", "	07 January, 2019", "	Monday"],
  [
    "Last Date of Academic Registration (all categories) with Late Fee",
    "13 January, 2019",
    "Sunday"
  ],
  ["Commencement of Classes", "08 January, 2019", "Tuesday"],
  [
    "Gymkhana Elections",
    "02 February, 2019 & 03 February ,2019",
    "Saturday - Sunday"
  ],
  [
    "	# Inter IIIT's Sports Meet 2019 at IIITA",
    "14 February, 2019 – 17 February, 2019",
    "Thursday - Sunday"
  ],
  [
    "# Mid Semester Project Evaluation",
    "22 February, 2019 – 25 February, 2019",
    "Friday - Monday"
  ],
  [
    "# Mid Semester Theory Examinations",
    "26 February, 2019 – 01 March, 2019",
    "Tuesday - Friday"
  ],
  [
    "Mid Semester Break duration",
    "18 March, 2019 -24 March, 2019",
    "Monday - Sunday"
  ],
  [
    "# Tech Fest (Aparoksha) duration of IIITA",
    "	29 March, 2019 – 31 March, 2019",
    "Friday - Sunday"
  ],
  [
    "End Semester Project Evaluation duration",
    "02 & 03 May, 2019",
    "Thursday - Friday"
  ],
  [
    "End Semester Theory Examination duration",
    "06 May, 2019 - 14 May, 2019",
    "Monday - Tuesday"
  ],
  [
    "Last date for Submission of End Semester Result & last date for students to see their answer scripts",
    "16 May, 2019",
    "Thursday"
  ],
  [
    "Makeup Examinations duration(Conduction by respective Faculty)",
    "20 May, 2019 - 26 May, 2019",
    "Monday - Sunday"
  ],
  [
    "Last date for Submission of Make Up Examination after showing answer scripts to respective students & signed hard copy to AAA Section",
    "27th December, 2019",
    "Monday"
  ],
  ["Declaration of Semester Result", "31 May, 2019", "Friday"],
  [
    "End Semester Break Duration",
    "17 May, 2019 - 24 July, 2019",
    "Friday - Sunday"
  ],
  [
    "Summer Semester/Special Classes(if offered)",
    "01 June, 2019 - 30 June, 2019",
    "Saturday - Sunday"
  ],
  [
    "Back Paper Examination",
    "03 July, 2019 - 10 July, 2019",
    "Wednesday - Wednesday"
  ],
  [
    "Back Paper/Summer Semester Result Declaration",
    "18 July, 2019",
    "Thursday"
  ],
  ["Institute Re-opening Date", "24 July, 2019", "Wednesday"]
];
const blogs = [
  {
    head: "IIIT Lucknow welcomes Founding Director Dr. Arun Mohan Sherry",
    para:
      "Prof. Arun Mohan Sherry, an alumnus of IIT-Kharagpur has been appointed the founding director of the Indian Institute of Information Technology (IIIT), Lucknow.",
    img: BlogImage1,
    link: "/blogs/1"
  },
  {
    head: "Pariksha Pe Charcha 2.0'",
    para:
      "As part of the second edition of ''Pariksha Pe Charcha 2.0'' Prime Minister Narendra Modi interacts with a total of 2000 students, parents and teachers in the national capital today.",
    img: BlogImage2,
    link: "/blogs/2"
  },
  {
    head: "Expert Guest Lectures and Research Interaction",
    para:
      "Three eminent academicians, Prof. B. B. Chaudhuri, ISI Kolkata, Prof. S. Sadagopan, IIIT Bangalore and Prof. B. Chanda, ISI Kolkata visited the IIIT Allahabad campus between 20th and 23rd March 2018.",
    img: BlogImage3,
    link: "/blogs/3"
  }
];
const article = [
  {
    article: "Coding Competition for first years to be held on 4 april 2019.",
    date: "March 28, 2019"
  }
];
export {
  calender,
  academicLinks,
  Ins,
  blogs,
  InsAdmin,
  seatData,
  article,
  courseStructure
};
