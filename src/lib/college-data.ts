export const college = {
  name: "Meridian College",
  fullName: "Meridian College of Arts, Science & Commerce",
  tagline: "Estd. 1965 · NAAC A+ Accredited · Affiliated to the State University",
  address: "14, College Road, Civil Lines, Pune 411001",
  phone: "+91 20 2553 4400",
  email: "admissions@meridiancollege.edu.in",
  hours: "Mon – Sat · 9:00 AM – 5:00 PM",
};

export const heroStats = [
  { value: "3,200+", label: "Students on campus" },
  { value: "148", label: "Faculty members" },
  { value: "23", label: "Programmes offered" },
  { value: "94%", label: "Placement rate" },
];

export const notices = [
  { date: "26 Sep", text: "Admissions 2026–27: first merit list releases on 24 June." },
  { date: "22 Sep", text: "Semester fee payment window open until 30 September." },
  { date: "18 Sep", text: "Srijan cultural fest registrations now open for all departments." },
];

export type Course = {
  degree: string;
  title: string;
  duration: string;
  seats: number;
  eligibility: string;
  feePerYear: string;
  group: string;
};

export const courses: Course[] = [
  {
    degree: "B.Sc.",
    title: "Computer Science",
    duration: "3 years",
    seats: 120,
    eligibility: "10+2 Science (PCM) · min 50%",
    feePerYear: "₹49,700",
    group: "Science",
  },
  {
    degree: "B.Sc.",
    title: "Biotechnology",
    duration: "3 years",
    seats: 60,
    eligibility: "10+2 Science (PCB) · min 50%",
    feePerYear: "₹52,400",
    group: "Science",
  },
  {
    degree: "B.Com.",
    title: "Accounting & Finance",
    duration: "3 years",
    seats: 180,
    eligibility: "10+2 any stream · min 45%",
    feePerYear: "₹37,600",
    group: "Commerce",
  },
  {
    degree: "B.Com.",
    title: "Banking & Insurance",
    duration: "3 years",
    seats: 90,
    eligibility: "10+2 any stream · min 45%",
    feePerYear: "₹38,900",
    group: "Commerce",
  },
  {
    degree: "B.A.",
    title: "English Literature",
    duration: "3 years",
    seats: 90,
    eligibility: "10+2 any stream · min 40%",
    feePerYear: "₹33,100",
    group: "Humanities",
  },
  {
    degree: "B.A.",
    title: "Psychology",
    duration: "3 years",
    seats: 60,
    eligibility: "10+2 any stream · min 45%",
    feePerYear: "₹34,500",
    group: "Humanities",
  },
  {
    degree: "M.Sc.",
    title: "Applied Mathematics",
    duration: "2 years",
    seats: 40,
    eligibility: "B.Sc. Mathematics · min 55%",
    feePerYear: "₹61,000",
    group: "Postgraduate",
  },
  {
    degree: "M.Com.",
    title: "Advanced Accounting",
    duration: "2 years",
    seats: 40,
    eligibility: "B.Com. · min 50%",
    feePerYear: "₹48,200",
    group: "Postgraduate",
  },
];

export const feeTable = {
  columns: ["B.Sc.", "B.Com.", "B.A."],
  rows: [
    { component: "Tuition fee", values: ["₹32,000", "₹26,000", "₹22,000"] },
    { component: "Laboratory & library", values: ["₹8,500", "₹3,000", "₹2,500"] },
    { component: "Examination", values: ["₹4,200", "₹3,600", "₹3,600"] },
    { component: "Development & activities", values: ["₹5,000", "₹5,000", "₹5,000"] },
  ],
  totals: ["₹49,700", "₹37,600", "₹33,100"],
  extras: [
    { item: "Hostel (room & mess)", fee: "₹42,000 / year" },
    { item: "One-time admission fee", fee: "₹5,000" },
    { item: "Caution deposit (refundable)", fee: "₹3,000" },
  ],
};

export const admissionSteps = [
  {
    phase: "Phase 1",
    date: "1 Jun – 15 Jun",
    title: "Application",
    detail: "Collect the prospectus and submit the application form online or at the college office.",
  },
  {
    phase: "Phase 2",
    date: "24 Jun",
    title: "Merit list",
    detail: "First merit list published on the notice board and website, based on 10+2 aggregate.",
  },
  {
    phase: "Phase 3",
    date: "1 Jul – 10 Jul",
    title: "Document verification",
    detail: "Bring original marksheets, migration certificate, ID proof and passport photos.",
  },
  {
    phase: "Phase 4",
    date: "11 Jul – 20 Jul",
    title: "Fee payment & enrolment",
    detail: "Pay the first-year fee at the accounts section to confirm your seat. Classes begin 21 Jul.",
  },
];

export const faculty = [
  {
    name: "Dr. Meera Iyer",
    role: "Head of Dept., Physics",
    detail: "Ph.D. IISc Bangalore · 22 years of teaching · 14 published research papers.",
    initials: "MI",
  },
  {
    name: "Prof. Arun Deshmukh",
    role: "Head of Dept., Commerce",
    detail: "CA & M.Com. · Chartered accountancy practice of 12 years before joining academia.",
    initials: "AD",
  },
  {
    name: "Dr. Sneha Kulkarni",
    role: "Head of Dept., English",
    detail: "Ph.D. Comparative Literature · Editor of the college literary annual, Kritika.",
    initials: "SK",
  },
  {
    name: "Dr. Vikram Rao",
    role: "Head of Dept., Computer Science",
    detail: "Ph.D. Machine Learning · Leads the college AI research wing and coding club.",
    initials: "VR",
  },
];

export const facilities = [
  { title: "Library", detail: "42,000 volumes, digital journals and a 24×7 reading room during exams." },
  { title: "Science labs", detail: "Eight dedicated laboratories for physics, chemistry, biotech and computing." },
  { title: "Sports complex", detail: "Cricket and football grounds, indoor badminton, and a 400m athletics track." },
  { title: "Hostel", detail: "Separate boys' and girls' hostels for 400 students with mess and warden care." },
  { title: "Auditorium", detail: "600-seat air-conditioned auditorium hosting seminars, fests and Convocation." },
  { title: "Placement cell", detail: "Dedicated training, mock interviews and campus recruitment drives every year." },
];

export const placementStats = [
  { value: "94%", label: "Students placed (2025)" },
  { value: "₹6.2 LPA", label: "Average package" },
  { value: "₹14.5 LPA", label: "Highest package" },
  { value: "48", label: "Recruiting companies" },
];

export const testimonials = [
  {
    quote:
      "The teachers here actually know your name. Dr. Rao supervised my final-year project personally, and that project is what got me my first job.",
    name: "Priya Nair",
    batch: "B.Sc. Computer Science, 2024",
  },
  {
    quote:
      "Fees were always transparent — no hidden charges at any point, from admission to convocation. The scholarship for merit students covered half my tuition.",
    name: "Rahul Deshmukh",
    batch: "B.Com. Accounting & Finance, 2023",
  },
  {
    quote:
      "Srijan fest, the debating society, NSS camps — I got to do everything. This college gave me confidence along with a degree.",
    name: "Ayesha Shaikh",
    batch: "B.A. Psychology, 2025",
  },
];

export const faqs = [
  {
    q: "What is the fee for the first year?",
    a: "The first year fee is the annual fee shown in the fee structure plus a one-time admission fee of ₹5,000 and a refundable caution deposit of ₹3,000. Hostel and mess, if opted for, are billed separately.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. Students scoring 85% or above in 10+2 receive a merit scholarship covering 50% of tuition. Government scholarships (EBC, OBC, SC/ST, minority) are facilitated through the college office.",
  },
  {
    q: "Can I pay the fee in instalments?",
    a: "Annual fees can be paid in two instalments — 60% at enrolment in July and the remaining 40% before the end of the first semester in November.",
  },
  {
    q: "Is hostel accommodation guaranteed?",
    a: "Hostel seats are allotted on merit and distance from Pune. Outstation students who confirm admission early are given priority in hostel allotment.",
  },
  {
    q: "What documents are needed at admission?",
    a: "10th and 12th marksheets, transfer/migration certificate, Aadhaar or other ID proof, caste certificate (if applicable), and six passport-size photographs.",
  },
];
