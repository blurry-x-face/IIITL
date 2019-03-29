const academicLinks = {
  head: "Useful Links",
  anchor: {
    name: [
      "Academic Schedule",
      "Faculty",
      "Seat Matrix",
      "Course Structure",
      "Smt. Gouri Mukherjee JAF/SAF",
      "Faculty Advisor - 2018",
      "List of Students",
      "Convocation"
    ],
    links: [
      "google.com",
      "/faculty",
      "/seat-matrix",
      "/course-structure",
      "google.com",
      "google.com",
      "google.com",
      "google.com"
    ]
  }
};
const Ins = {
  head: "Institute",
  anchor: {
    name: [
      "At a Glance",
      "Vision & Mission",
      "Background",
      "IIITS Council",
      "Board of Governors",
      "Finance Committee",
      "Senate",
      "Co-Ordination Committee",
      "Contact Us"
    ],
    links: [
      "/About",
      "/vision",
      "google",
      "google",
      "/board-governors",
      "google.com",
      "/senate",
      "/co-ordination-committee",
      "/contactus"
    ]
  }
};
const InsAdmin = {
  head: "Administration",
  anchor: {
    name: [
      "Directorate",
      "Office, Academic Affairs",
      "Academic Affairs",
      "Faculty",
      "Student",
      "Registrar's Office"
    ],
    links: [
      "/directorate",
      "/staff",
      "#google",
      "/faculty",
      "#google",
      "#google"
    ]
  }
};
const seatData = {
  generalNeutral: ["Information Technology", 31],
  generalFemale: ["Information Technology	", 5],
  OBCNCNeutral: ["Information Technology", 16],
  OBCNCFemale: ["Information Technology", 3],
  SCNeutral: ["Information Technology", 9],
  SCFemale: ["Information Technology", 1],
  STNeutral: ["Information Technology", 5],
  STFemale: ["Information Technology", 1],
  GeneralPWDNeutral: ["Information Technology", 2],
  NULL: ["Information Technology", 0],
  OBCNCPWDNeutral: ["Information Technology", 1]
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
export { academicLinks, Ins, InsAdmin, seatData, courseStructure };
