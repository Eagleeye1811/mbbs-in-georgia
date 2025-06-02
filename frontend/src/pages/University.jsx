import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import UniversityCard from "../components/UniversityCard";
import university1Logo from "../assets/Caucasus_University.jpg";
import university2Logo from "../assets/TSM_University.jpeg";
import university3Logo from "../assets/Ilia_State_University.jpg";
import university4Logo from "../assets/Caucasus_International_University.jpg";
import university5Logo from "../assets/New_Vision_University.webp";
import university6Logo from "../assets/David_Tvildiani_Medical_University.webp";
import university7Logo from "../assets/ALTE_University.png";
import university8Logo from "../assets/IBSU_University.webp";
import university9Logo from "../assets/ATSU_University.jpg";
import university10Logo from "../assets/Geomedi_Medical_University.jpg";

const stats = [
  { name: 'Universities', value: '12+' },
  { name: 'Years Experience', value: '10+' },
  { name: 'Students Placed', value: '5000+' },
  { name: 'Visa Success Rate', value: '100%' },
]

const universities = [
  {
    image: university1Logo,
    name: "Caucasus University",
    location: "Tbilisi, Georgia",
    year: 2004,
    type: "Private",
    path: "/universities/caucasus-university",
    highlights: ["Affordable Fees", "Modern Campus", "International Recognition", "Scholarship Opportunities"],
  },
  {
    image: university2Logo,
    name: "Tbilisi State Medical University",
    location: "Tbilisi, Georgia",
    year: 1918,
    type: "Public",
    path: "/universities/tbilisi-state-medical-university",
    highlights: ["Top-Ranked Programs", "Experienced Faculty", "Global Partnerships", "Advanced Research Facilities"],
  },
  {
    image: university3Logo,
    name: "Ilia State University",
    location: "Tbilisi, Georgia",
    year: 2006,
    type: "Public",
    path: "/universities/ilia-state-university",
    highlights: ["Innovative Research", "Affordable Tuition", "Diverse Community", "Student Exchange Programs"],
  },
  {
    image: university4Logo,
    name: "Caucasus International University",
    location: "Tbilisi, Georgia",
    year: 1995,
    type: "Private",
    path: "/universities/caucasus-international-university",
    highlights: ["Student-Centered Learning", "Affordable Fees", "Global Recognition", "Modern Laboratories"],
  },
  {
    image: university5Logo,
    name: "New Vision University",
    location: "Tbilisi, Georgia",
    year: 2013,
    type: "Private",
    path: "/universities/new-vision-university",
    highlights: ["Modern Facilities", "Affordable Fees", "International Accreditation", "Flexible Learning Options"],
  },
  {
    image: university6Logo,
    name: "David Tvildiani Medical University",
    location: "Tbilisi, Georgia",
    year: 1991,
    type: "Private",
    path: "/universities/david-tvildiani-medical-university",
    highlights: ["Medical Excellence", "Affordable Tuition", "Global Recognition", "High Graduate Success Rate"],
  },
  {
    image: university7Logo,
    name: "ALTE University",
    location: "Tbilisi, Georgia",
    year: 2012,
    type: "Private",
    path: "/universities/alte-university",
    highlights: ["Innovative Programs", "Affordable Fees", "International Partnerships", "Career-Oriented Curriculum"],
  },
  {
    image: university8Logo,
    name: "International Black Sea University",
    location: "Tbilisi, Georgia",
    year: 1995,
    type: "Private",
    path: "/universities/ibsu-university",
    highlights: ["Diverse Community", "Affordable Tuition", "Global Recognition", "Cultural Exchange Programs"],
  },
  {
    image: university9Logo,
    name: "Georgian National University SEU",
    location: "Tbilisi, Georgia",
    year: 2001,
    type: "Private",
    path: "/universities/georgian-national-university-seu",
    highlights: ["Student-Centered Learning", "Affordable Fees", "Modern Facilities", "Industry Collaboration"],
  },
  {
    image: university10Logo,
    name: "Petre Shotadze Tbilisi Medical Academy",
    location: "Tbilisi, Georgia",
    year: 1992,
    type: "Private",
    path: "/universities/petre-shotadze-tbilisi-medical-academy",
    highlights: ["Medical Excellence", "Affordable Tuition", "Experienced Faculty", "Focus on Practical Training"],
  },
];

export default function University() {
  const [active, setActive] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState(universities);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    const updatedUniversities = universities.filter((university) => {
      const matchesFilter =
        active === "all" ||
        (active === "public" && university.type === "Public") ||
        (active === "private" && university.type === "Private") ||
        (active === "tbilisi" && university.location.includes("Tbilisi"));

      const matchesSearch =
        university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        university.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });

    setFilteredUniversities(updatedUniversities);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      const updatedUniversities = universities.filter((university) => {
        return (
          active === "all" ||
          (active === "public" && university.type === "Public") ||
          (active === "private" && university.type === "Private") ||
          (active === "tbilisi" && university.location.includes("Tbilisi"))
        );
      });
      setFilteredUniversities(updatedUniversities);
    }
  }, [searchQuery, active]);

  const buttonClasses = (type) =>
    `px-4 py-2 rounded-full border cursor-pointer ${
      active === type
        ? "bg-red-500 text-white"
        : "bg-gray-400 text-white hover:bg-gray-500"
    }`;

  const handleCardClick = (name) => {
    navigate(`/university-detail?name=${encodeURIComponent(name)}`); // Navigate to detail page with query parameter
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">MCI/NMC Approved <span className="text-red-500">Universities</span></h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Explore top-ranked medical universities in Georgia offering world-class education with international recognition and affordable fees.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="p-4 mt-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-full w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              Search
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className={buttonClasses("all")}
              onClick={() => setActive("all")}
            >
              All Universities
            </button>
            <button
              className={buttonClasses("public")}
              onClick={() => setActive("public")}
            >
              Public
            </button>
            <button
              className={buttonClasses("private")}
              onClick={() => setActive("private")}
            >
              Private
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-300 py-10">
        <div className="container mx-auto px-4">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university, index) => (
                <UniversityCard
                  key={index}
                  image={university.image}
                  name={university.name}
                  location={university.location}
                  year={university.year}
                  type={university.type}
                  highlights={university.highlights}
                  onClick={() => handleCardClick(university.name)} // Pass university name
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No universities match your search or filter criteria.
            </p>
          )}
        </div>
      </div>
    </>
  );
}