const BASE = "https://casalp.digilogy.co/asset/img";

const p = (name, slug, location, price, priceNum, meta, landmarks = []) => ({
  name,
  slug,
  location,
  price,
  priceNum, // in lakhs, used for filtering
  meta,
  image: `${BASE}/projects/${slug}_1.webp`,
  images: [
    `${BASE}/projects/${slug}_1.webp`,
    `${BASE}/projects/${slug}_2.webp`,
  ],
  landmarks,
});

export const projects = [
  p("Elysium", "elysium", "Chennai - Manappakkam", "₹65 Lakhs", 65, "120+ Lifestyle Amenities · 2BHK and 3BHK", [
    { type: "school", name: "The PSBB Millennium School", dist: "- 9 Mins away" },
    { type: "clinic", name: "Kamatchi Clinic", dist: "- 2.2 KM" },
    { type: "tech", name: "Softrate Tech Park", dist: "- 7.5 KM" },
  ]),
  p("Primrose", "primrose", "Chennai - Perungulathur", "₹54 Lakhs", 54, "95+ World Class Amenities · 2BHK, 3BHK & 4BHK", [
    { type: "school", name: "SSM Senior Secondary School", dist: "- 8 Mins away" },
    { type: "clinic", name: "Annai Arul Hospital", dist: "- 3.2 KM" },
    { type: "tech", name: "MEPZ SEZ Park", dist: "- 6.5 KM" },
  ]),
  p("Madelyn", "madelyn", "Chennai - Thirumudivakkam", "₹61 Lakhs", 61, "390+ High Rise Apartments · 2BHK & 3BHK", [
    { type: "school", name: "Peace On Green Earth School", dist: "- 7 Mins away" },
    { type: "clinic", name: "Parvathy Hospital", dist: "- 4.1 KM" },
    { type: "tech", name: "Thirumudivakkam SIDCO", dist: "- 2.5 KM" },
  ]),
  p("Suncity", "suncity", "Kelambakkam to Vandalur Road", "₹67 Lakhs", 67, "185+ High Rise Apartments · 2BHK, 3BHK & 4BHK", [
    { type: "school", name: "Chettinad Sarvalokaa Education", dist: "- 10 Mins away" },
    { type: "clinic", name: "Chettinad Super Speciality", dist: "- 4.5 KM" },
    { type: "tech", name: "SIPCOT IT Park, Siruseri", dist: "- 8.0 KM" },
  ]),
  p("Majestica", "majestica", "Chennai - Manappakkam", "₹1.25 Crore", 125, "90+ World Class Amenities · 2BHK, 3BHK & 4BHK", [
    { type: "school", name: "The PSBB Millennium School", dist: "- 8 Mins away" },
    { type: "clinic", name: "MIOT International", dist: "- 4.2 KM" },
    { type: "tech", name: "DLF Cybercity", dist: "- 5.0 KM" },
  ]),
  p("Aria", "aria", "Tambaram - Mudichur", "₹52 Lakhs", 52, "85+ Lifestyle Amenities · 2BHK", [
    { type: "school", name: "Sri Sankara Vidyalaya", dist: "- 6 Mins away" },
    { type: "clinic", name: "Hindu Mission Hospital", dist: "- 3.8 KM" },
    { type: "tech", name: "MEPZ IT SEZ", dist: "- 7.2 KM" },
  ]),
  p("OSAKA", "osaka", "Iyyappanthangal", "₹80 Lakhs", 80, "100+ Recreational Amenities · 3BHK & 4BHK", [
    { type: "school", name: "The Schram Academy", dist: "- 8 Mins away" },
    { type: "clinic", name: "Sri Ramachandra Hospital", dist: "- 2.5 KM" },
    { type: "tech", name: "DLF IT Park", dist: "- 6.0 KM" },
  ]),
  p("Massimo", "massimo", "Kundrathur 100ft Main Road", "₹64 Lakhs", 64, "70+ World Class Amenities · 2BHK, 3BHK & 4BHK", [
    { type: "school", name: "Little Flower Matric School", dist: "- 5 Mins away" },
    { type: "clinic", name: "Mangalam Hospital", dist: "- 2.1 KM" },
    { type: "tech", name: "Kanthimathi IT Zone", dist: "- 6.8 KM" },
  ]),
  p("Estoria", "estoria", "Kelambakkam to Vandalur Road", "₹66 Lakhs", 66, "40+ World Class Amenities · 2BHK & 3BHK", [
    { type: "school", name: "Delhi Public School", dist: "- 9 Mins away" },
    { type: "clinic", name: "Chettinad Health City", dist: "- 5.2 KM" },
    { type: "tech", name: "Siruseri IT Park", dist: "- 7.9 KM" },
  ]),
  p("Ventra", "ventra", "Chennai - Kattupakkam", "₹85 Lakhs", 85, "55+ Amenities · 2BHK, 3BHK, 4BHK Apts & 4BHK Floor Villa", [
    { type: "school", name: "Narayana E-Techno School", dist: "- 6 Mins away" },
    { type: "clinic", name: "Sri Ramachandra Hospital", dist: "- 3.1 KM" },
    { type: "tech", name: "Jayanth Tech Park", dist: "- 5.5 KM" },
  ]),
  p("Glenmere", "glenmere", "Chennai - Thaiyur", "₹79 Lakhs", 79, "30+ World class amenities · 3BHK & 4BHK Villas", [
    { type: "school", name: "Jagannath Vidyalaya", dist: "- 10 Mins away" },
    { type: "clinic", name: "Chettinad Super Speciality", dist: "- 6.0 KM" },
    { type: "tech", name: "ETA Technopark", dist: "- 8.5 KM" },
  ]),
  p("Jarvis", "jarvis", "Chennai - Siruseri", "₹58 Lakhs", 58, "100+ World Class Amenities · 2BHK, 3BHK & 4BHK", [
    { type: "school", name: "PSBB Millennium OMR", dist: "- 7 Mins away" },
    { type: "clinic", name: "Supreme Speciality Hospital", dist: "- 4.2 KM" },
    { type: "tech", name: "SIPCOT IT Park", dist: "- 2.0 KM" },
  ]),
  p("Hola Chennai", "holachennai", "Chennai - Sholinganallur", "₹75 Lakhs", 75, "160+ World Class Amenities · 2BHK, 3BHK, 4BHK & 4BHK Floor Villa", [
    { type: "school", name: "Gateway International School", dist: "- 6 Mins away" },
    { type: "clinic", name: "Gleneagles Global Health City", dist: "- 3.5 KM" },
    { type: "tech", name: "ELCOT SEZ", dist: "- 3.0 KM" },
  ]),
  p("Mercury", "mercury", "Chennai - Perambur", "₹1 Crore", 100, "130+ Amenities · 2BHK, 3BHK, 4BHK Apts & 5BHK Floor Villa", [
    { type: "school", name: "Don Bosco Higher Secondary", dist: "- 8 Mins away" },
    { type: "clinic", name: "Apollo Hospital", dist: "- 4.0 KM" },
    { type: "tech", name: "Prince Info City", dist: "- 8.5 KM" },
  ]),
  p("Reva", "reva", "Chennai - Pallavaram", "₹55 Lakhs", 55, "95+ World Class Amenities · 2BHK, 3BHK & 4BHK Apts", [
    { type: "school", name: "Vels Vidyashram", dist: "- 7 Mins away" },
    { type: "clinic", name: "Rela Hospital", dist: "- 3.4 KM" },
    { type: "tech", name: "Chennai One IT SEZ", dist: "- 7.0 KM" },
  ]),
  p("Highclere", "highclere", "Kundrathur 100ft Main Road", "₹58 Lakhs", 58, "85+ Amenities · 2BHK & 3BHK", [
    { type: "school", name: "Sivanthi Matriculation", dist: "- 6 Mins away" },
    { type: "clinic", name: "Subiksha Clinic", dist: "- 2.4 KM" },
    { type: "tech", name: "L&T Infotech", dist: "- 8.0 KM" },
  ]),
  p("Zodiac", "zodiac", "Chennai - Mogappair", "₹69 Lakhs", 69, "110+ World Class Amenities · 2BHK, 3BHK & 4BHK Apts", [
    { type: "school", name: "Velammal Vidyalaya", dist: "- 5 Mins away" },
    { type: "clinic", name: "MMM Hospital", dist: "- 3.0 KM" },
    { type: "tech", name: "Ambattur IT Park", dist: "- 4.2 KM" },
  ]),
  p("Casamia", "casamia", "Chennai - Pallavaram", "₹60 Lakhs", 60, "160+ Amenities · 2BHK, 3BHK & 4BHK Apts", [
    { type: "school", name: "Cantonment Board School", dist: "- 8 Mins away" },
    { type: "clinic", name: "Dr. Rela Institute", dist: "- 3.6 KM" },
    { type: "tech", name: "MEPZ Tech Zone", dist: "- 6.2 KM" },
  ]),
];

export const priceFilters = [
  { label: "₹50L – ₹70L", min: 50, max: 70 },
  { label: "₹70L – ₹90L", min: 70, max: 90 },
  { label: "₹90L – ₹1.2Cr", min: 90, max: 120 },
  { label: "₹1.2Cr – ₹3Cr+", min: 120, max: 100000 },
];

export const banners = [1, 2, 3, 4].map((n) => `${BASE}/banner_desk_${n}.jpg`);

export const headlines = [
  { eyebrow: "Elevate Your Lifestyle", title: "Experience Unmatched Luxury In Every Corner Of Your Dream Home" },
  { eyebrow: "Premium Amenities", title: "Discover A World Of Elegance Designed Exclusively For Your Family" },
  { eyebrow: "Prime Location", title: "Live At The Heart Of The City With Everything Just Minutes Away" },
  { eyebrow: "Smart Investment", title: "Invest In A Beautiful Tomorrow With Exceptional Returns" },
];

export const stats = [
  { num: "50,000+", label: "Happy Families" },
  { num: "140+", label: "Completed Projects" },
  { num: "4.5★", label: "Google Customer Rating" },
  { num: "20+", label: "Years of Excellence" },
];

export const reviews = [
  {
    id: "Djk8Erf6NWA",
    name: "Mr. & Mrs. Karthik",
    project: "Casagrand Elysium",
    quote: "The amenities and timely handover exceeded all our expectations. Our kids love the clubhouse!",
    rating: 5,
  },
  {
    id: "oE67yPv9kt8",
    name: "Ramanathan & Family",
    project: "Casagrand Primrose",
    quote: "Exceptional lifestyle, 70% open green space, and unmatched peace of mind for our parents.",
    rating: 5,
  },
  {
    id: "Uv1jTGEFW78",
    name: "Dr. Senthil Kumar",
    project: "Casagrand Majestica",
    quote: "Transparent paperwork, top-grade construction, and immediate property value appreciation.",
    rating: 5,
  },
  {
    id: "G5Gk5Vlv92I",
    name: "Anand & Priya",
    project: "Casagrand Suncity",
    quote: "Direct developer value and high-end international specifications throughout our apartment.",
    rating: 5,
  },
  {
    id: "LA9930FlVWU",
    name: "Venkatesh & Family",
    project: "Casagrand Hola Chennai",
    quote: "The 10-year maintenance commitment gives us complete confidence in our investment.",
    rating: 5,
  },
  {
    id: "SUJEbaoLfGM",
    name: "Deepak & Archana",
    project: "Casagrand Massimo",
    quote: "Over 70+ resort-style amenities right at our doorstep. Truly a dream home come true.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Are all Casagrand residential projects RERA approved and loan eligible?",
    a: "Yes, 100% of Casagrand projects are RERA registered with clear legal titles. All properties have pre-approved home loan facilities from premier financial institutions including SBI, HDFC, ICICI, and Axis Bank with competitive interest rates.",
  },
  {
    q: "When is the best time to buy a residential property in Chennai?",
    a: "The Chennai real estate market provides great appreciation when entering during new phase launches and pre-construction stages. Casagrand launch prices typically offer the highest value and direct developer benefits, with flexible construction-linked payment schedules.",
  },
  {
    q: "How do I know if a property is a good investment with high ROI?",
    a: "Key ROI indicators include proximity to IT corridors (like OMR, Porur, Guindy), upcoming Metro connectivity, reputed schools, and social infrastructure. Casagrand communities boast average rental yields of 4.5%–6% and sustained double-digit capital appreciation.",
  },
  {
    q: "What amenities and lifestyle specifications come with Casagrand communities?",
    a: "Casagrand developments feature anywhere from 30+ to 160+ resort-style amenities including grand clubhouses, rooftop swimming pools, state-of-the-art gymnasiums, sports courts, reflexology paths, and dedicated children's play zones.",
  },
  {
    q: "What is the difference between a buyer's agent and buying directly from developer?",
    a: "Buying directly through our official Casagrand channels ensures 0% brokerage, direct-from-developer launch pricing, complete transparency on approvals, and full documentation and registration support from our in-house CRM team.",
  },
  {
    q: "What are the typical closing costs and payment schedules?",
    a: "Closing costs typically include stamp duty, property registration charges, and applicable GST. Casagrand offers transparent breakdown sheets with no hidden costs, alongside convenient milestone-based construction payment plans.",
  },
];

export const regionTabs = ["All", "OMR", "North", "West", "GST"];

// Region assignment by project location (edit freely)
const regionByName = {
  Jarvis: "OMR", "Hola Chennai": "OMR", Suncity: "OMR", Estoria: "OMR", Glenmere: "OMR",
  Mercury: "North",
  Elysium: "West", Majestica: "West", Massimo: "West", Highclere: "West", OSAKA: "West", Zodiac: "West", Ventra: "West",
  Primrose: "GST", Aria: "GST", Reva: "GST", Casamia: "GST", Madelyn: "GST",
};
projects.forEach((x) => { x.region = regionByName[x.name] || "West"; });
