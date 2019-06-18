import BlogImage1 from "../assets/dr-arun-sherry.jpg";
import BlogImage2 from "../assets/bpost2.jpeg";
import BlogImage3 from "../assets/expert.jpg";
import timeTable from "../assets/downloads/Time_Table.pdf";
import pdfFee from "../assets/blogs/fee-structure.pdf";
import RTI from "../assets/downloads/RTI - PDF.pdf";

const academicLinks = {
  head: "Useful Links",
  anchor: {
    name: [
      "Academic Schedule",
      "Seat Matrix",
      "Course Structure",
      "List of Students"
    ],
    links: ["/calender", "/seat-matrix", "/course-structure", "/coming-soon"]
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
      "/finance-committee",
      "/senate",
      "/contactus"
    ]
  }
};
const cCMT = {
  head: "CCMT-2019",
  anchor: {
    name: ["Info for Freshers", "Message from Director"],
    links: ["/About", "/directorate"]
  }
};
const InsAdmin = {
  head: "Administration",
  anchor: {
    name: [
      "Directorate",
      "Registrar's Office",
      "Faculty",
      "Office & Staff",
      "Academic Affairs",
      "Student",
      "Downloads"
    ],
    links: [
      "/directorate",
      "/coming-soon",
      "/faculty",
      "/staff",
      "/coming-soon",
      "/coming-soon",
      "/downloads"
    ]
  }
};
const seatData = {
  general: [
    ["Information Technology", 31],
    ["Computer Science", 31],
    ["Computer Science (M.Tech.)", 11]
  ],
  OBCNC: [
    ["Information Technology", 16],
    ["Computer Science", 16],
    ["Computer Science (M.Tech.)", 8]
  ],
  SC: [
    ["Information Technology", 9],
    ["Computer Science", 9],
    ["Computer Science (M.Tech.)", 5]
  ],
  ST: [
    ["Information Technology", 5],
    ["Computer Science", 5],
    ["Computer Science (M.Tech.)", 2]
  ],
  GeneralPWD: [
    ["Information Technology", 2],
    ["Computer Science", 2],
    ["Computer Science (M.Tech.)", 1]
  ],
  OBCNCPWD: [
    ["Information Technology", 1],
    ["Computer Science", 1],
    ["Computer Science (M.Tech.)", 0]
  ],
  NULL: [
    ["Information Technology", 0],
    ["Computer Science", 0],
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
  tableEHead: [
    "Semester",
    "Code",
    "Title",
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
      "IDST232C",
      "EDES232C",
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
  },
  sem7: {
    code: ["ISIM732C", "MORB720C", "", "", "", "IPRJ705P"],
    title: [
      "System Modelling and Simulation",
      "Organizational Behaviour",
      "Elective - 3",
      "Elective - 4",
      "Elective - 5",
      "Mini Project"
    ],
    type: ["C", "C", "E", "E", "E", "P"],
    theory: [3, 3, 3, 3, 3, 0],
    lab: [2, 0, 0, 0, 0, 5],
    pre: ["SPAS230C", "-", "-", "-", "-", "-"]
  },
  sem8: {
    code: ["IPRJ820P"],
    title: ["Major Project"],
    type: ["P"],
    theory: [0],
    lab: [20],
    pre: ["IPRJ530C, IPRJ630C, IPRJ730C"]
  },
  electives: {
    code: [
      "IOPT630E",
      "IMCL630E",
      "IWSN630E",
      "IASS630C",
      "IAGA630C",
      "IIRS730E",
      "ICIS730E",
      "IEMB730E",
      "IECO730E"
    ],
    title: [
      "Optimization Techniques",
      "Machine Learning - Tools And Techniques",
      "Wireless Sensor Networks",
      "Architecture of Software Systems",
      "Advanced Graphics and Animation",
      "Information Retrieval Systems",
      "Cryptography and Information Security",
      "Modeling, Design and Analysis of Embedded System",
      "Data Compression"
    ],
    type: ["P"],
    theory: [3, 3, 3, 3, 3, 3, 3, 3, 3],
    lab: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    pre: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
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
const NavData = {
  NavButtons: [
    {
      head: "Institute",
      isGif: false,
      drop: [
        {
          head: "Institute",
          links: [
            { head: "At a Glance", link: "/About" },
            {
              head: "IIIT Council",
              link: "https://iiitcouncil.com/",
              isAnchor: true
            },
            { head: "Board of Governors", link: "/board-governors" },
            { head: "Finance Committee", link: "/finance-committee" },
            { head: "Senate", link: "/Senate" },
            { head: "Reach Us", link: "contactus" }
          ]
        },
        {
          head: "Administration",
          links: [
            { head: "Directorate", link: "/directorate" },
            { head: "Registrar's Office", link: "/coming-soon" },
            { head: "Faculty", link: "/faculty" },
            { head: "Office & Staff", link: "staff" },
            { head: "Academic Affairs", link: "/coming-soon" },
            { head: "Student", link: "/coming-soon" },
            { head: "Downloads", link: "/downloads" }
          ]
        },
        {
          head: "Other Units",
          links: [
            { head: "Finance & Accounts", link: "/coming-soon" },
            { head: "RTI", link: RTI, isAnchor: true }
          ]
        }
      ]
    },
    {
      head: "Departments",
      isGif: false,
      drop: [
        {
          head: "Department of IT",
          links: [{ head: "Information Technology", link: "/coming-soon" }]
        },
        {
          head: "Department of CS",
          links: [{ head: "Computer Science", link: "/coming-soon" }]
        }
      ]
    },
    {
      head: "Students",
      isGif: false,
      drop: [
        {
          head: "Student Counselling",
          links: [
            { head: "About Counselling", link: "/coming-soon" },
            { head: "Common Concerns", link: "/coming-soon" },
            { head: "Services", link: "/coming-soon" },
            { head: "FAQ", link: "/coming-soon" }
          ]
        },
        {
          head: "Regulations",
          links: [
            { head: "Anti-Ragging Committee", link: "/coming-soon" },
            { head: "Anti-Sexual Harassment Policy", link: "/coming-soon" },
            { head: "Office Orders", link: "/coming-soon" }
          ]
        },
        {
          head: "Hostel",
          links: [
            { head: "Student's Hostel", link: "/coming-soon" },
            { head: "Hostel Rules", link: "/coming-soon" }
          ]
        },
        {
          head: "Mess",
          links: [
            { head: "Overview", link: "/coming-soon" },
            { head: "Mess Menu", link: "/coming-soon" },
            { head: "Mess Committee", link: "/coming-soon" },
            { head: "Mess Committee Duties", link: "/coming-soon" }
          ]
        },
        {
          head: "People",
          links: [
            { head: "Dean & Staff", link: "/coming-soon" },
            { head: "Wardens", link: "/coming-soon" },
            { head: "Counsellor", link: "/coming-soon" },
            { head: "Sports Staff", link: "/coming-soon" },
            { head: "Hostel Caretaker", link: "/coming-soon" }
          ]
        },
        {
          head: "Student Clubs",
          links: [
            {
              head: "Technical Club",
              link: "https://axios.iiitl.ac.in",
              isAnchor: true
            }
          ]
        }
      ]
    },
    {
      head: "Academics",
      isGif: false,
      drop: [
        {
          head: "Academic Programmes",
          links: [
            { head: "B.Tech in IT", link: "/btech-it" },
            { head: "B.Tech in CS", link: "/btech-cs" },
            { head: "M.Tech in CS", link: "/admissions-MTECH" },
            { head: "PhD", link: "admissions-Phd" }
          ]
        },
        {
          head: "Useful Links",
          links: [
            { head: "Academic Schedule", link: "/calender" },
            { head: "Seat Matrix", link: "/seat-matrix" },
            { head: "Course Structure", link: "/course-structure" },
            { head: "Time Table", link: timeTable, isAnchor: true },
            { head: "Fee Structure", link: pdfFee, isAnchor: true },
            { head: "Scholarship", link: "/scholarship", isAnchor: false },
            { head: "List of Students", link: "/coming-soon" }
          ]
        },
        {
          head: "Regulations",
          links: [{ head: "Office Orders", link: "/coming-soon" }]
        },
        {
          head: "Facility",
          links: [{ head: "Lecture Hall Complex", link: "/coming-soon" }]
        }
      ]
    },
    {
      head: "Facilities",
      isGif: false,
      drop: [
        {
          head: "Central Library",
          links: [
            { head: "About", link: "/coming-soon" },
            { head: "People", link: "/coming-soon" },
            { head: "E-Resources", link: "/coming-soon" }
          ]
        },
        {
          head: "Computer Centre",
          links: [
            {
              head: "People",
              link: "/coming-soon"
            },
            {
              head: "Services",
              link: "/coming-soon"
            },
            {
              head: "CC Lab",
              link: "/coming-soon"
            },
            {
              head: "FAQ",
              link: "/coming-soon"
            },
            {
              head: "Download",
              link: "/coming-soon"
            },
            {
              head: "Notice Board",
              link: "/coming-soon"
            }
          ]
        },
        {
          head: "Other Facilities",
          links: [
            { head: "Visitors' Hostel", link: "/coming-soon" },
            { head: "Transportation", link: "/coming-soon" },
            { head: "Security", link: "/coming-soon" },
            { head: "Health Centre", link: "/coming-soon" },
            { head: "Department Research Facility", link: "/coming-soon" },
            { head: "Lecture Hall Complex", link: "/coming-soon" }
          ]
        }
      ]
    },
    {
      head: "Admissions",
      isGif: true,
      drop: [
        {
          head: "Undergraduate Programs",
          links: [
            { head: "B.Tech in IT", link: "/admissions-IT" },
            { head: "B.Tech in CS", link: "admissions-CS" }
          ]
        },
        {
          head: "Postgraduate Programs",
          links: [{ head: "M. Tech. in CS", link: "admissions-MTECH" }]
        },
        {
          head: "Research",
          links: [{ head: "PhD", link: "/admissions-Phd" }]
        }
      ]
    },
    {
      head: "Career",
      isGif: true,
      drop: [
        {
          head: "Career at IIITL",
          links: [
            { head: "Faculty", link: "/career/faculty" },
            { head: "Staff", link: "/career/staff" },
            { head: "Other", link: "/career/other" }
          ]
        }
      ]
    },
    {
      isGIF: false,
      isAnchor: true,
      head: "Placements",
      link: "https://placements.iiitl.ac.in/#/"
    }
  ]
};
export {
  calender,
  academicLinks,
  Ins,
  blogs,
  InsAdmin,
  seatData,
  article,
  courseStructure,
  cCMT,
  NavData
};
