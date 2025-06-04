import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaUserGraduate,
  FaShieldAlt,
  FaGlobe,
  FaHandsHelping,
  FaUniversity,
  FaUserShield,
  FaDollarSign,
  FaCheckCircle,
  FaLanguage,
  FaGraduationCap,
  FaShieldVirus,
  FaPassport,
} from "react-icons/fa";
import srLogo from "../assets/logo.png";
import { motion, useAnimation } from "framer-motion";

/**
 * Constants and data objects for the entire application
 * Grouped for easy maintenance and modifications
 */
const DATA = {
  // Content for feature cards in "Why Choose Us" section
  whyUsFeatures: [
    {
      icon: <FaUserGraduate size={32} />,
      title: "Expert Guidance",
      front: "Expert Guidance",
      back: "Personal mentoring from admission to graduation.",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "100% Visa Success",
      front: "100% Visa Success",
      back: "Proven track record with proper documentation.",
    },
    {
      icon: <FaUniversity size={32} />,
      title: "Direct Partnerships",
      front: "Direct Partnerships",
      back: "Guaranteed admission to top universities.",
    },
    {
      icon: <FaHandsHelping size={32} />,
      title: "24/7 Support",
      front: "24/7 Support",
      back: "On-ground support for students in Georgia.",
    },
    {
      icon: <FaGlobe size={32} />,
      title: "Global Recognition",
      front: "Global Recognition",
      back: "Degrees accepted in 40+ countries.",
    },
    {
      icon: <FaUserShield size={32} />,
      title: "Parent Peace of Mind",
      front: "Parent Peace of Mind",
      back: "Regular updates and dedicated parent communication channels.",
    },
  ],

  // Statistics about SR Counselling
  srStats: [
    { label: "Years of Experience", value: "10+" },
    { label: "Visa Success Rate", value: "100%" },
    { label: "Students Guided", value: "5000+" },
    { label: "Top University Partners", value: "12+" },
  ],

  // Content for hero section carousel slides
  carouselSlides: [
    {
      title: (
        <>
          <h2 className="text-5xl">
            <span className="text-[#232a36]">Missed </span>
            <span className="text-red-400 ">NEET?</span>
          </h2>
        </>
      ),
      subtitle: (
        <>
          <h2 className="text-lg  font-semibold text-[#232a36]">
            Don't Miss Your Dream
          </h2>
          <h3 className="text-3xl">
            Study <span className="text-red-400">MBBS in Georgia</span>
          </h3>
        </>
      ),
      description:
        "Every year, thousands of deserving students lose hope. But their dreams don't end there and neither should yours.",
      buttons: [
        { to: "/HowToApply", text: "Apply Now", primary: true },
        { to: "/AboutGeorgia", text: "Learn More", primary: false },
      ],
      image: {
        src: "/src/assets/graduation-cap.png",
        alt: "Graduation Cap",
        className: "w-40 h-40 mx-auto",
        containerClass: "p-6",
        fallbackSrc:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24'%3E%3Cpath fill='%23433772' d='M12 3L1 9l11 6l9-4.91V17h2V9L12 3m4.82 14L12 19.5L7.18 17v-4.77L12 14.5l4.82-2.27v4.77Z'/%3E%3C/svg%3E",
      },
    },
    {
      title: (
        <>
          <span className="text-[#232a36]">Explore</span>
          <span className="text-red-400"> Universities</span>
        </>
      ),
      subtitle: (
        <>
          <h2 className="text-5xl font-semibold text-[#232a36]">
            Find the Perfect Medical University
          </h2>
          <h3 className="text-3xl">
            <span className="text-red-400">12+ NMC</span> Approved Options
          </h3>
        </>
      ),

      buttons: [
        { to: "/Universities", text: "View All Universities", primary: true },
      ],
      image: {
        src: "/src/assets/university.jpg",
        alt: "Georgian University",
        className: "rounded-lg max-h-full object-cover",
        fallbackSrc:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24'%3E%3Cpath fill='%23433772' d='M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m4.82 14L12 19.5L7.18 17v-4.77L12 14.5l4.82-2.27v4.77Z'/%3E%3C/svg%3E",
      },
    },
    {
      title: (
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="text-[#232a36]">Student Success</span>
          <span className="text-red-400"> Stories</span>
        </h1>
      ),
      subtitle: (
        <>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#232a36]">
            Hear from our Alumni
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl">
            Real <span className="text-red-400">Experiences</span>, Real Success
          </h3>
        </>
      ),

      testimonial: {
        quote:
          "Studying MBBS in Georgia was the best decision of my life — excellent education and global exposure shaped my career.",
        name: "Dr. Priya Sharma",
        designation: "Batch of 2020",
      },
      buttons: [
        { to: "/Testimonials", text: "Read More Stories", primary: true },
      ],
      image: {
        src: "/src/assets/students.jpg",
        alt: "Student Success",
        className: "rounded-lg max-h-full object-cover",
        fallbackSrc:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24'%3E%3Cpath fill='%23433772' d='M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z'/%3E%3C/svg%3E",
      },
    },
  ],

  // Content for challenges section cards
  challengeCards: [
    {
      number: 1,
      title: "Missed NEET? Don't Give Up!",
      icon: (
        <>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </>
      ),
      bgColor: "from-blue-50 to-cyan-100",
      description:
        "Every year, thousands miss NEET due to limited seats. Your medical dream doesn't have to end here.",
      quote:
        '"I missed NEET by just 15 marks. Georgia opened new doors for me."',
    },
    {
      number: 2,
      title: "Still Dreaming of Being a Doctor?",
      icon: (
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78l-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8l8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      ),
      bgColor: "from-red-50 to-pink-100",
      description:
        "Your passion for medicine shouldn't be limited by entrance exam results. Alternative pathways await.",
      quote:
        '"I refused to give up on my dream. Now I\'m studying in Georgia."',
    },
    {
      number: 3,
      title: "Expensive Medical Education in India?",
      icon: (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </>
      ),
      bgColor: "from-green-50 to-teal-100",
      description:
        "Private colleges in India charge 50L-1Cr for MBBS. Georgia offers quality at 1/3rd the cost.",
      quote:
        '"Georgia offered quality education at a price my family could afford."',
    },
  ],

  // Content for comparison cards
  comparisonCards: [
    {
      title: "No Donation Required",
      gradient: "from-orange-400 to-red-600",
      icon: <FaDollarSign size={32} className="text-orange-500" />, // Smaller icon with matching color
      before: {
        label: "In India",
        value: "₹50L - 1Cr",
        desc: "Private MBBS + Donations",
      },
      after: {
        label: "In Georgia",
        value: "₹15-25L",
        desc: "Complete MBBS",
      },
      description: "Study MBBS at a fraction of the cost with no hidden fees.",
    },
    {
      title: "WHO/NMC Recognition",
      gradient: "from-pink-400 to-rose-600",
      icon: <FaCheckCircle size={32} className="text-pink-500" />,
      before: {
        label: "Some Foreign Universities",
        value: "Non-Recognized",
        desc: "Wasted time & money",
      },
      after: {
        label: "Georgia Universities",
        value: "100% Recognized",
        desc: "NMC & WHO approved",
      },
      description:
        "All Georgian medical universities are recognized by WHO and NMC.",
    },
    {
      title: "English Medium",
      gradient: "from-blue-400 to-indigo-600",
      icon: <FaLanguage size={32} className="text-blue-500" />,
      before: {
        label: "Some Countries",
        value: "Language Barrier",
        desc: "Need to learn local language",
      },
      after: {
        label: "In Georgia",
        value: "100% English",
        desc: "Curriculum & Teaching",
      },
      description:
        "Complete MBBS program taught in English with no language barrier.",
    },
    {
      title: "Quality Education",
      gradient: "from-violet-400 to-purple-600",
      icon: <FaGraduationCap size={32} className="text-violet-500" />,
      before: {
        label: "Many Foreign Options",
        value: "Compromised Quality",
        desc: "Lacking facilities & faculty",
      },
      after: {
        label: "In Georgia",
        value: "European Standards",
        desc: "Modern facilities & faculty",
      },
      description: "European standard education with modern infrastructure.",
    },
    {
      title: "Safety First",
      gradient: "from-emerald-400 to-green-600",
      icon: <FaShieldVirus size={32} className="text-emerald-500" />,
      before: {
        label: "Some Countries",
        value: "Safety Concerns",
        desc: "Parents worry about safety",
      },
      after: {
        label: "Georgia",
        value: "One of Safest",
        desc: "Countries in Europe",
      },
      description: "One of the safest countries in Europe with low crime rate.",
    },
    {
      title: "Global Recognition",
      gradient: "from-cyan-400 to-teal-600",
      icon: <FaPassport size={32} className="text-cyan-500" />,
      before: {
        label: "Some Foreign Degrees",
        value: "Limited Recognition",
        desc: "Restricted options",
      },
      after: {
        label: "Georgian Degree",
        value: "Global Acceptance",
        desc: "Practice in 40+ countries",
      },
      description: "Georgian medical degrees are recognized worldwide.",
    },
  ],

  // Service journey steps
  services: [
    {
      title: "University Selection & Admission Guidance",
      icon: "🏫",
      description:
        "Personalized university selection based on your academic profile, budget, and career goals.",
    },
    {
      title: "Document Preparation & Verification",
      icon: "📋",
      description:
        "Complete assistance with application forms, document verification, and translation services.",
    },
    {
      title: "Visa Application & Interview Preparation",
      icon: "🛂",
      description:
        "Step-by-step guidance for visa application and mock interviews to ensure visa success.",
    },
    {
      title: "Accommodation & Pre-Departure Assistance",
      icon: "🏠",
      description:
        "Securing comfortable and affordable accommodation before you arrive in Georgia.",
    },
    {
      title: "Airport Pickup & University Registration",
      icon: "✈",
      description:
        "Smooth arrival with pickup service and assistance with university registration process.",
    },
    {
      title: "Ongoing Academic & Personal Support",
      icon: "📚",
      description:
        "Regular check-ins and assistance with academic challenges throughout your program.",
    },
    {
      title: "Career Guidance & Placement Assistance",
      icon: "💼",
      description:
        "Career counseling, internship opportunities, and job placement support after graduation.",
    },
    {
      title: "Alumni Network & Mentorship",
      icon: "👥",
      description:
        "Connect with successful alumni and receive mentorship from practicing doctors.",
    },
  ],

  // Student testimonials
  testimonials: [
    {
      name: "Priya Sharma",
      emoji: "👩‍⚕",
      university: "Tbilisi State Medical University",
      testimonial:
        "The guidance I received was exceptional. From admission to settling in Georgia, every step was smoothly handled. Now I'm confidently pursuing my MBBS dreams.",
      details: [
        { label: "Batch", value: "2022" },
        { label: "From", value: "Delhi, India" },
      ],
    },
    {
      name: "Rahul Patel",
      emoji: "👨‍⚕",
      university: "Batumi Shota Rustaveli University",
      testimonial:
        "I was worried about studying abroad, but the support system here is amazing. The education quality is world-class and the fees are very reasonable.",
      details: [
        { label: "Batch", value: "2021" },
        { label: "From", value: "Mumbai, India" },
      ],
    },
    {
      name: "Ananya Singh",
      emoji: "👩‍🎓",
      university: "European University",
      testimonial:
        "Georgia has given me opportunities I never imagined. The international exposure and quality education have prepared me well for a global medical career.",
      details: [
        { label: "Batch", value: "2023" },
        { label: "From", value: "Pune, India" },
      ],
    },
    {
      name: "Vikram Mehta",
      emoji: "👨‍🎓",
      university: "University of Georgia",
      testimonial:
        "SR Counselling made my transition to Georgia seamless. Their pre-departure orientation and on-ground support helped me adjust quickly to my new environment.",
      details: [
        { label: "Batch", value: "2022" },
        { label: "From", value: "Jaipur, India" },
      ],
    },
  ],

  // Wall of fame image captions
  wallOfFameImages: [
    { caption: "ISBU University Visit" },
    { caption: "Student Meetup" },
    { caption: "Alte University Campus Tour" },
    { caption: "Tbilisi University Tour" },
    { caption: "CIU University Visit" },
    { caption: "New Vision University Visit" },
    { caption: "Meetup" },
    { caption: "Student Meetup" },
    { caption: "Student Meetup" },
    { caption: "Scenes from Georgia" },
    { caption: "Tourist places" },
    { caption: "Georgia Tour" },
    { caption: "David Tvildiani University Visit" },
    { caption: "Exploring Georgia" },
    { caption: "Caucasus University Visit" },
    { caption: "Student Meetup" },
    { caption: "Campus tour" },
    { caption: "Local Banking Setup Assistance" },
    { caption: "Student Talk" },
    { caption: "Getting Experiences" },
    { caption: "Student Meetup" },
    { caption: "Classroom tour" },
    { caption: "Exploring the City" },
    { caption: "Exploring the City" },
    { caption: "Night life of Georgia" },
    { caption: "Tbilisi City Tour for New Students" },
    { caption: "Exploring the City" },
    { caption: "Faculty Meetup" },
    { caption: "Sight Meeting" },
    { caption: "Medical Equipment Orientation" },
    { caption: "Practical Training Session" },
    { caption: "Campus Tour" },
    { caption: "Graduation Ceremony Support" },
    { caption: "Alumni Network Connection" },
    { caption: "University Tour" },
    { caption: "Georgian Technical University" },
    { caption: "The University of Georgia" },
    { caption: "University Tour" },
    { caption: "Fun Meetup" },
  ],
};

/**
 * SectionHeader - Reusable component for section titles and descriptions
 * @param {Object} props - Component props
 * @param {ReactNode} props.title - Title content, can include JSX for styling
 * @param {string} props.description - Description text for the section
 * @returns {JSX.Element} - Rendered section header
 */
const SectionHeader = ({ title, description }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold text-[#232a36] mb-6">{title}</h2>
    <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">{description}</p>
  </div>
);

/**
 * Home Component - Main landing page of the application
 * Contains multiple sections showcasing different aspects of studying in Georgia
 * @returns {JSX.Element} - Rendered Home page
 */
const Home = () => {
  // State for carousel control
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = DATA.carouselSlides.length;

  // State for flip cards
  const [flipped, setFlipped] = useState(
    Array(DATA.whyUsFeatures.length).fill(false)
  );

  // Ref for adjusting hero section position
  const heroSectionRef = useRef(null);

  /**
   * Effect to adjust hero section position to account for navbar height
   * Runs on component mount and window resize
   */
  useEffect(() => {
    // Function to calculate and set the padding
    const adjustHeroSection = () => {
      const navbar = document.querySelector("nav");
      if (navbar && heroSectionRef.current) {
        const navHeight = navbar.offsetHeight;
        heroSectionRef.current.style.paddingTop = `${navHeight}px`;
      }
    };

    // Initial adjustment
    adjustHeroSection();

    // Add resize listener for responsive adjustments
    window.addEventListener("resize", adjustHeroSection);

    // Cleanup - remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustHeroSection);
    };
  }, []);

  /**
   * Navigate to a specific slide by index
   * @param {number} slideIndex - Index of the target slide
   */
  const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);

  /**
   * Navigate to the previous slide with wraparound
   */
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  /**
   * Navigate to the next slide with wraparound
   */
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  /**
   * CarouselDots - Navigation dots component for carousel
   * @returns {JSX.Element} - Rendered navigation dots
   */
  const CarouselDots = () => (
    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
      {[...Array(totalSlides)].map((_, i) => (
        <button
          key={i}
          onClick={() => goToSlide(i)}
          className={`w-3 h-3 rounded-full transition-colors ${
            currentSlide === i ? "bg-red-500" : "bg-gray-400 hover:bg-gray-600"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        ></button>
      ))}
    </div>
  );

  /**
   * ChallengeCard - Displays a challenge and its solution
   * @param {Object} props - Card data
   * @param {string} props.title - Card title
   * @param {ReactNode} props.icon - Icon for the card
   * @param {string} props.bgColor - Background gradient colors
   * @param {string} props.description - Card description text
   * @param {string} props.quote - Student quote to display
   * @returns {JSX.Element} - Rendered challenge card
   */
  const ChallengeCard = ({ title, icon, bgColor, description, quote }) => {
    // Get hover background class based on the card's primary color
    const getHoverBgClass = () => {
      if (bgColor.includes("blue")) return "group-hover:bg-[#e0f3ff]";
      if (bgColor.includes("red") || bgColor.includes("pink"))
        return "group-hover:bg-[#ffeaf2]";
      if (bgColor.includes("green") || bgColor.includes("teal"))
        return "group-hover:bg-[#e8fff1]";
      return "group-hover:bg-gray-50"; // Default fallback
    };

    // Custom styles based on card color theme
    const getPatternColor = () => {
      if (bgColor.includes("blue")) return "text-blue-200";
      if (bgColor.includes("red") || bgColor.includes("pink"))
        return "text-pink-200";
      if (bgColor.includes("green") || bgColor.includes("teal"))
        return "text-green-200";
      return "text-gray-200";
    };

    return (
      <div
        className={`bg-gradient-to-br ${bgColor} rounded-xl p-8 md:w-1/3 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 hover:-translate-y-2 group overflow-hidden flex flex-col min-h-[470px]`}
      >
        {/* Decorative pattern overlay */}
        <div
          className={`absolute -right-8 -bottom-8 opacity-10 ${getPatternColor()}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L1 9l11 6l9-4.91V17h2V9L12 2z" />
          </svg>
        </div>

        {/* Card title */}
        <h3 className="text-2xl font-bold text-[#232a36] mb-6 mt-2 text-center group-hover:text-red-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Icon with animated hover effects */}
        <div className="flex items-center justify-center mb-7">
          <div
            className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${getHoverBgClass()} group-hover:shadow-xl transform group-hover:rotate-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-500 group-hover:scale-110 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icon}
            </svg>
          </div>
        </div>

        {/* Card description */}
        <p className="text-[#4a5568] group-hover:text-[#232a36] transition-colors duration-300 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Quote section with styled quotation mark */}
        <div className="mt-auto">
          <div className="bg-white/80 p-4 rounded-lg border-l-4 border-red-500 group-hover:bg-white group-hover:shadow-md transition-all duration-300 relative">
            <div className="absolute -top-3 -left-2 text-red-400 opacity-50 transform rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 27"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="font-medium italic text-sm text-[#232a36] z-10 relative">
              {quote}
            </p>
          </div>
        </div>

        {/* Rising gradient overlay animation on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:h-16 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    );
  };

  /**
   * ComparisonCard - Shows before/after comparison with animated transition
   * @param {Object} props - Component props
   * @param {string} props.title - Card title
   * @param {string} props.gradient - Background gradient colors
   * @param {ReactNode} props.icon - Icon component
   * @param {Object} props.before - "Before" state data
   * @param {Object} props.after - "After" state data
   * @param {string} props.description - Card description
   * @returns {JSX.Element} - Rendered comparison card
   */
  const ComparisonCard = ({
    title,
    gradient,
    icon,
    before,
    after,
    description,
  }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Card Header with gradient background */}
      <div
        className={`h-24 bg-gradient-to-r ${gradient} flex items-center justify-center relative px-4`}
      >
        {/* Floating icon container */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white">
          <div className="text-red-500">{icon}</div>
        </div>
        <h3 className="text-xl text-white font-bold text-center mb-8">
          {title}
        </h3>
      </div>

      <div className="p-6 pt-12 space-y-4">
        {/* Interactive comparison slider with hover effect */}
        <div className="relative overflow-hidden h-32 mt-2">
          {/* Before state - shows by default */}
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg absolute inset-0 transition-transform duration-500 group-hover:translate-y-[-100%]">
            <div>
              <span className="block text-sm text-gray-500">
                {before.label}
              </span>
              <span className="text-2xl font-bold text-[#232a36]">
                {before.value}
              </span>
              <span className="block text-sm mt-1">{before.desc}</span>
            </div>
            <svg
              className="w-10 h-10 text-red-500 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </div>

          {/* After state - slides up on hover */}
          <div className="absolute inset-0 bg-green-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 rounded-lg flex items-center justify-between">
            <div>
              <span className="block text-sm text-gray-500">{after.label}</span>
              <span className="text-2xl font-bold text-[#232a36]">
                {after.value}
              </span>
              <span className="block text-sm mt-1">{after.desc}</span>
            </div>
            <svg
              className="w-10 h-10 text-green-500 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Card description footer */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-[#4a5568] text-center">{description}</p>
        </div>
      </div>
    </div>
  );

  /**
   * OurServices - Step-by-step services journey with interactive navigation
   * @returns {JSX.Element} - Rendered services section
   */
  const OurServices = () => {
    // State for active step
    const [activeStep, setActiveStep] = useState(0);
    const contentRef = useRef(null);

    // Step navigation functions
    const nextStep = () => {
      if (activeStep < DATA.services.length - 1) {
        setActiveStep(activeStep + 1);
      }
    };

    const prevStep = () => {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      }
    };

    const goToStep = (stepIndex) => {
      setActiveStep(stepIndex);
    };

    /**
     * Effect for content transition animation
     * Triggers fade-in effect when active step changes
     */
    useEffect(() => {
      if (contentRef.current) {
        // Apply initial "hidden" state
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "translateY(20px)";

        // Reveal with animation after a brief delay
        setTimeout(() => {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }, 50);
      }
    }, [activeStep]);

    /**
     * ServiceStep - Individual step indicator in the stepper
     * @param {Object} props - Component props
     * @param {number} props.number - Step number
     * @param {boolean} props.isActive - Whether this step is currently active
     * @param {boolean} props.isCompleted - Whether this step has been completed
     * @param {Function} props.onClick - Click handler function
     * @returns {JSX.Element} - Rendered step indicator
     */
    const ServiceStep = ({ number, isActive, isCompleted, onClick }) => (
      <button
        onClick={onClick}
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-medium text-sm md:text-base relative transition-all duration-300 ${
          isActive
            ? "bg-red-500 text-white border-2 border-red-200 shadow-lg scale-110"
            : isCompleted
            ? "bg-red-100 text-red-600 border border-red-300"
            : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
        }`}
        aria-label={`Go to step ${number}`}
      >
        {isCompleted ? (
          <svg
            className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          number
        )}
        {isActive && (
          <>
            {/* Active indicator line */}
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-red-300"></span>
            {/* Pulsating effect */}
            <span className="absolute -inset-1.5 animate-ping rounded-full bg-red-200 opacity-75 duration-1000"></span>
          </>
        )}
      </button>
    );

    return (
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-50 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>
        <div
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-red-300 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232a36] mb-4 sm:mb-6">
              Our{" "}
              <span className="text-red-500 relative">
                Services
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-red-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
              </span>
            </h2>
            <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">
              From admission to graduation, we provide comprehensive support
              throughout your medical education journey.
            </p>
          </div>

          {/* Stepper - Desktop (Horizontal) */}
          <div className="hidden md:flex justify-center items-center mb-10 py-4">
            <div className="flex items-center">
              {DATA.services.map((_, index) => (
                <React.Fragment key={index}>
                  {/* Step indicator */}
                  <ServiceStep
                    number={index + 1}
                    isActive={activeStep === index}
                    isCompleted={index < activeStep}
                    onClick={() => goToStep(index)}
                  />

                  {/* Connector line between steps */}
                  {index < DATA.services.length - 1 && (
                    <div className="relative h-0.5 w-8 lg:w-12">
                      <div
                        className={`absolute inset-0 bg-gray-200 transition-all duration-500`}
                      ></div>
                      <div
                        className={`absolute inset-0 bg-red-400 transition-all duration-1000 ${
                          index < activeStep ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Stepper - Mobile (Shows only current step and adjacent ones) */}
          <div className="md:hidden flex justify-center items-center mb-8">
            <div className="flex items-center">
              {/* Previous step (if not at first step) */}
              {activeStep > 0 && (
                <>
                  <ServiceStep
                    number={activeStep}
                    isActive={false}
                    isCompleted={true}
                    onClick={() => prevStep()}
                  />
                  <div className="h-0.5 w-6 bg-red-400"></div>
                </>
              )}

              {/* Current step */}
              <ServiceStep
                number={activeStep + 1}
                isActive={true}
                isCompleted={false}
                onClick={() => {}}
              />

              {/* Next step (if not at last step) */}
              {activeStep < DATA.services.length - 1 && (
                <>
                  <div className="h-0.5 w-6 bg-gray-200"></div>
                  <ServiceStep
                    number={activeStep + 2}
                    isActive={false}
                    isCompleted={false}
                    onClick={() => nextStep()}
                  />
                </>
              )}
            </div>
          </div>

          {/* Step indicator text (Mobile only) */}
          <div className="md:hidden text-center text-sm text-gray-500 mb-6 font-medium">
            Step {activeStep + 1} of {DATA.services.length}
          </div>

          {/* Content Card with animation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
            <div className="px-6 py-8">
              {/* Card Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-full text-3xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-red-50 group">
                  <span className="inline-block transition-transform duration-700 group-hover:rotate-12">
                    {DATA.services[activeStep].icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {DATA.services[activeStep].title}
                  </h3>
                  <div className="hidden md:block text-sm text-red-500 font-medium">
                    Step {activeStep + 1} of {DATA.services.length}
                  </div>
                </div>
              </div>

              {/* Card Content with fade effect */}
              <div
                ref={contentRef}
                className="mb-8 transition-all duration-300"
                style={{ opacity: 1, transform: "translateY(0)" }}
              >
                <p className="text-gray-700 leading-relaxed">
                  {DATA.services[activeStep].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                    activeStep === 0
                      ? "text-gray-400 cursor-not-allowed bg-gray-50"
                      : "text-red-500 hover:bg-red-50 border border-red-500 hover:shadow-md"
                  }`}
                  disabled={activeStep === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={nextStep}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 group ${
                    activeStep === DATA.services.length - 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-50"
                      : "bg-red-500 text-white hover:bg-red-600 hover:shadow-md"
                  }`}
                  disabled={activeStep === DATA.services.length - 1}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Step Dots - Mobile and Tablet (Alternative navigation) */}
          <div className="flex justify-center mt-8 gap-1.5 md:hidden">
            {DATA.services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-red-500 transform scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to step ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    );
  };

  /**
   * StudentTestimonials - Displays student feedback in card layout
   * @returns {JSX.Element} - Rendered testimonials section
   */
  const StudentTestimonials = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#232a36] mb-6">
              What Student Say about{" "}
              <span className="text-red-500">SR Counselling</span>?
            </h2>
          </div>

          {/* Testimonial cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DATA.testimonials.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Top decoration */}
                <div className="relative">
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col h-full">
                  {/* Student info and avatar */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-4 border-blue-50 shadow-md">
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <span className="text-4xl">{student.emoji}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#232a36] mb-1 text-center">
                      {student.name}
                    </h4>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      {student.university}
                    </p>
                  </div>

                  <div className="flex-grow flex flex-col">
                    {/* Student testimonial */}
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 mb-4 flex-grow">
                      <p className="italic text-[#4a5568] line-clamp-4">
                        "{student.testimonial}"
                      </p>
                    </div>

                    {/* Additional details */}
                    {student.details && (
                      <div className="w-full grid grid-cols-2 gap-2 mt-auto">
                        {student.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 rounded p-2 text-center hover:bg-blue-50 transition-all duration-300"
                          >
                            <p className="text-xs text-gray-500">
                              {detail.label}
                            </p>
                            <p className="text-sm font-medium truncate">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  /**
   * WallOfFame - Image gallery with interactive lightbox viewer
   * @returns {JSX.Element} - Rendered gallery section
   */
  const WallOfFame = () => {
    // State for the image popup/lightbox
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const lastClickTime = useRef(0);

    // Gallery configuration
    const imagesPerRow = 4; // Using 4 columns for grid layout
    const totalImages = 40;
    const visibleImages = 15;
    const remainingCount = totalImages - visibleImages;

    // Generate array of image data
    const srImages = Array.from({ length: totalImages }, (_, i) => ({
      id: i + 1,
      src: `/src/assets/SR images/${i + 1}.jpg`,
      alt: `SR Counselling moment ${i + 1}`,
      featured: false, // All images same size
      // Use the wallOfFameImages array for captions in a circular manner
      caption: DATA.wallOfFameImages[i % DATA.wallOfFameImages.length].caption,
      emoji: DATA.wallOfFameImages[i % DATA.wallOfFameImages.length].emoji,
    }));

    /**
     * Opens the lightbox popup with the selected image
     * @param {number} index - Index of the image to display
     */
    const openImagePopup = (index) => {
      setSelectedImage(srImages[index]);
      setSelectedIndex(index);
      setIsPopupOpen(true);
      setDragPosition({ x: 0, y: 0 });
      setIsZoomed(false);
      document.body.style.overflow = "hidden"; // Prevent page scrolling
    };

    /**
     * Closes the lightbox popup
     */
    const closePopup = () => {
      setIsPopupOpen(false);
      setIsZoomed(false);
      setDragPosition({ x: 0, y: 0 });
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };

    /**
     * Navigate to next image in the lightbox
     * @param {Event} e - Click event
     */
    const goToNext = (e) => {
      e.stopPropagation();
      const nextIndex = (selectedIndex + 1) % srImages.length;
      setSelectedImage(srImages[nextIndex]);
      setSelectedIndex(nextIndex);
      setDragPosition({ x: 0, y: 0 });
      setIsZoomed(false);
    };

    /**
     * Navigate to previous image in the lightbox
     * @param {Event} e - Click event
     */
    const goToPrev = (e) => {
      e.stopPropagation();
      const prevIndex = (selectedIndex - 1 + srImages.length) % srImages.length;
      setSelectedImage(srImages[prevIndex]);
      setSelectedIndex(prevIndex);
      setDragPosition({ x: 0, y: 0 });
      setIsZoomed(false);
    };

    /**
     * Handle image click events - detects double-clicks for zoom toggle
     * @param {Event} e - Click event
     */
    const handleImageClick = (e) => {
      const currentTime = new Date().getTime();
      const clickTimeDiff = currentTime - lastClickTime.current;

      // If double click (within 300ms)
      if (clickTimeDiff < 300) {
        setIsZoomed(!isZoomed);
        setDragPosition({ x: 0, y: 0 });
      }

      lastClickTime.current = currentTime;
    };

    /**
     * Mouse down event handler - initiates image dragging
     * @param {MouseEvent} e - Mouse event
     */
    const handleMouseDown = (e) => {
      if (!isZoomed) return;
      setIsDragging(true);
      e.preventDefault(); // Prevent default image drag
    };

    /**
     * Mouse move event handler - updates drag position
     * @param {MouseEvent} e - Mouse event
     */
    const handleMouseMove = (e) => {
      if (!isDragging || !isZoomed) return;
      const movementX = e.movementX;
      const movementY = e.movementY;
      setDragPosition((prev) => ({
        x: prev.x + movementX,
        y: prev.y + movementY,
      }));
    };

    /**
     * Mouse up event handler - ends dragging
     */
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    /**
     * Touch start event handler - for mobile devices
     * @param {TouchEvent} e - Touch event
     */
    const handleTouchStart = (e) => {
      if (!isZoomed) return;
      setIsDragging(true);
      dragRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      e.preventDefault(); // Prevent default touch behavior
    };

    /**
     * Touch move event handler - for mobile drag
     * @param {TouchEvent} e - Touch event
     */
    const handleTouchMove = (e) => {
      if (!isDragging || !isZoomed || !dragRef.current) return;
      e.preventDefault(); // Critical for preventing scrolling during drag

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      const deltaX = touchX - dragRef.current.x;
      const deltaY = touchY - dragRef.current.y;

      setDragPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));

      dragRef.current = {
        x: touchX,
        y: touchY,
      };
    };

    /**
     * Touch end event handler - ends touch dragging
     */
    const handleTouchEnd = () => {
      setIsDragging(false);
      dragRef.current = null;
    };

    /**
     * Creates grid items for the image gallery
     * @returns {Array} - Array of grid item objects
     */
    const createGridItems = () => {
      // Calculate how many complete rows needed
      const totalRows = Math.ceil((visibleImages + 1) / imagesPerRow);
      const totalCells = totalRows * imagesPerRow;

      // Create grid items
      const gridItems = [];

      // Add visible images
      for (let i = 0; i < visibleImages; i++) {
        gridItems.push({
          type: "image",
          image: srImages[i],
        });
      }

      // Add "+25 more" item - always place in bottom-right position
      const morePhotoPosition = totalCells - 1;

      // Ensure we have enough items to reach the bottom-right position
      while (gridItems.length < morePhotoPosition) {
        gridItems.push({
          type: "image",
          image: srImages[gridItems.length % visibleImages],
        });
      }

      // Add the "more photos" tile at the bottom-right
      gridItems.push({
        type: "more",
        count: remainingCount,
      });

      return gridItems;
    };

    const gridItems = createGridItems();

    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#232a36] mb-4">
              Wall of <span className="text-red-500">Fame</span>
            </h2>
            <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">
              Moments and memories from our journey helping students achieve
              their dreams in Georgia
            </p>
          </div>

          {/* Photo gallery grid */}
          <div className="grid grid-cols-4 gap-3">
            {gridItems.map((item, index) => {
              if (item.type === "more") {
                // "More photos" tile
                return (
                  <div
                    key="more-photos"
                    className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-red-400 to-red-600"
                    style={{ aspectRatio: "1/1" }} // Square aspect ratio
                    onClick={() => openImagePopup(visibleImages)}
                  >
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <div className="text-4xl font-bold mb-2">
                          +{item.count}
                        </div>
                        <div className="text-lg font-medium">More Photos</div>
                        <div className="mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular image tile
              return (
                <div
                  key={`image-${index}`}
                  className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 cursor-pointer"
                  style={{ aspectRatio: "1/1" }} // Square aspect ratio
                  onClick={() => openImagePopup(index % visibleImages)}
                >
                  <div className="relative h-full bg-gray-100">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center h-full">
                            <div class="text-red-500 font-medium">SR Counselling</div>
                          </div>`;
                      }}
                    />
                    {/* Caption overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white w-full">
                        <p className="font-medium text-sm">
                          {item.image.caption}
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          {item.image.emoji}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Popup/Lightbox */}
          {isPopupOpen && selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
              onClick={closePopup}
            >
              <div
                className="relative w-full max-w-6xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
                  onClick={closePopup}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Image container with interactive features */}
                <div
                  className={`h-full overflow-hidden rounded-lg transition-all duration-500 ${
                    isZoomed ? "cursor-grab" : "cursor-default"
                  } ${isDragging ? "cursor-grabbing" : ""}`}
                  onClick={handleImageClick}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    touchAction: "none", // Prevent browser touch actions
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className={`transition-all duration-500 ${
                        isZoomed
                          ? "max-h-none max-w-none scale-150"
                          : "max-h-[80vh] max-w-full"
                      } object-contain pointer-events-none`}
                      style={
                        isZoomed
                          ? {
                              transform: `scale(1.5) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                              WebkitUserDrag: "none",
                              WebkitTouchCallout: "none",
                              WebkitTapHighlightColor: "transparent",
                            }
                          : {
                              WebkitUserDrag: "none",
                              WebkitTouchCallout: "none",
                              WebkitTapHighlightColor: "transparent",
                            }
                      }
                      draggable="false"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'%3E%3Cpath fill='%23e53e3e' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  onClick={goToPrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  onClick={goToNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Caption and image counter */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      {selectedImage.emoji} {selectedImage.caption}
                    </p>
                  </div>
                  <p className="text-sm text-gray-300">
                    {selectedIndex + 1} of {srImages.length}
                  </p>
                </div>

                {/* User instructions */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs opacity-80">
                  <p>Double-click to {isZoomed ? "zoom out" : "zoom in"}</p>
                </div>

                {/* Additional instruction for zoomed state */}
                {isZoomed && (
                  <div
                    className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs opacity-80 transition-opacity duration-300"
                    style={{ opacity: isDragging ? 0 : 0.8 }}
                  >
                    <p>Drag to move around zoomed image</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section - Dynamic carousel with multiple content types */}
      <div
        ref={heroSectionRef}
        className="relative h-[450px] z-0"
        style={{
          paddingTop: "0px", // Dynamically adjusted by useEffect
        }}
      >
        {/* Carousel slides */}
        {DATA.carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full">
              <div className="flex flex-col md:flex-row items-center justify-between h-full py-4">
                {/* Content side */}
                <div className="md:w-5/12 lg:w-5/12 md:pr-4">
                  <div className="space-y-3">
                    {/* Main heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle with conditional rendering */}
                    <div className="py-2">
                      {index === 0 ? (
                        <>
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#232a36] leading-tight">
                            Don't Miss Your Dream
                          </h2>
                          <h3 className="text-lg md:text-xl lg:text-2xl">
                            Study{" "}
                            <span className="text-[#e44e50]">
                              MBBS in Georgia
                            </span>
                          </h3>
                        </>
                      ) : (
                        <div className="text-base md:text-lg lg:text-xl">
                          {slide.subtitle}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#4a5568] line-clamp-2 md:line-clamp-3 max-w-md">
                      {slide.description}
                    </p>

                    {/* Optional statistics grid */}
                    {slide.stats && (
                      <div className="grid grid-cols-2 gap-3 py-2 max-w-md">
                        {slide.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="text-center p-2 bg-red-50 rounded-lg shadow-sm hover:shadow transition-shadow duration-300"
                          >
                            <h3 className="text-lg md:text-xl font-bold text-[#e44e50]">
                              {stat.value}
                            </h3>
                            <p className="text-xs md:text-sm text-[#4a5568]">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional testimonial quote */}
                    {slide.testimonial && (
                      <div className="bg-white p-2 rounded-lg shadow-md max-w-md border-l-2 border-red-400">
                        <p className="text-[#4a5568] italic text-xs md:text-sm line-clamp-2">
                          "{slide.testimonial.quote}"
                        </p>
                        <div className="mt-1 flex items-center">
                          <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                          <div className="ml-2">
                            <p className="font-medium text-xs">
                              {slide.testimonial.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {slide.testimonial.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    {slide.buttons && (
                      <div
                        className={`${
                          slide.buttons.length > 1 ? "flex gap-3" : ""
                        } pt-2`}
                      >
                        {slide.buttons.map((button, idx) => (
                          <Link
                            key={idx}
                            to={
                              button.text === "Learn More"
                                ? "/AboutGeorgia"
                                : button.to
                            }
                            className={`inline-block px-4 py-2 md:px-5 md:py-2 ${
                              button.primary
                                ? "bg-red-500 text-white hover:bg-red-600 shadow-sm"
                                : "border border-red-500 text-red-500 hover:bg-red-50"
                            } font-medium rounded-lg transition text-xs md:text-sm ${
                              button.className || ""
                            }`}
                          >
                            {button.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Image side */}
                <div className="md:w-6/12 lg:w-6/12 flex justify-center mt-4 md:mt-0">
                  <div className="bg-white p-4 rounded-lg shadow-md w-full max-h-[320px] flex items-center justify-center overflow-hidden transition-transform hover:shadow-lg duration-300">
                    <div
                      className={
                        slide.image.containerClass ||
                        "h-full w-full flex items-center justify-center"
                      }
                    >
                      <img
                        src={slide.image.src}
                        alt={slide.image.alt}
                        className={`${
                          index === 0
                            ? "w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48"
                            : "max-h-[300px] w-auto object-contain rounded-lg"
                        } transition-all duration-500 hover:scale-105 shadow-sm`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = slide.image.fallbackSrc;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 md:p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} className="text-gray-800" />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 md:p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={18} className="text-gray-800" />
        </button>

        {/* Pagination indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "bg-red-500 scale-125"
                  : "bg-gray-400 hover:bg-gray-600 hover:scale-110"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx={true}>
        {`
          /* Custom scrollbar styles for better UX */
          div::-webkit-scrollbar {
            width: 4px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background-color: rgba(203, 213, 225, 0.5);
            border-radius: 20px;
          }
        `}
      </style>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader
            title={
              <>
                We Understand Your{" "}
                <span className="text-red-500">Struggles</span>
              </>
            }
            description="Every year, thousands of deserving students lose hope. But their dreams don't end there and neither should yours."
          />

          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              {DATA.challengeCards.map((card, index) => (
                <ChallengeCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Georgia Section - With improved layout and spacing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader
            title={
              <>
                Why Choose Georgia for{" "}
                <span className="text-red-500">MBBS</span>?
              </>
            }
            description="Georgia offers world-class medical education at affordable prices with international recognition and safety for Indian students."
          />

          {/* Improved grid layout with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
            {DATA.comparisonCards.map((card, index) => (
              <ComparisonCard key={index} {...card} />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link
              to="/Universities"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-full font-medium text-base shadow-lg hover:scale-105 transition"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>Explore Universities</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Flip card CSS */}
      <style>
        {`
          .perspective { perspective: 1200px; }
          .transform-style-preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .rotate-y-180 .backface-hidden { backface-visibility: hidden; }
        `}
      </style>
      <OurServices />
      <StudentTestimonials />
      <WallOfFame />
    </div>
  );
};

export default Home;
