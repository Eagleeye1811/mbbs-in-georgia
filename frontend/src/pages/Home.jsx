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

// Data Constants (grouped at the top for easy reference and modification)
const DATA = {
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
  srStats: [
    { label: "Years of Experience", value: "10+" },
    { label: "Visa Success Rate", value: "100%" },
    { label: "Students Guided", value: "5000+" },
    { label: "Top University Partners", value: "12+" },
  ],
  carouselSlides: [
    {
      title: (
        <h1 className="whitespace-nowrap">
          <span className="text-[#232a36]">Missed </span>
          <span className="text-red-500">NEET?</span>
        </h1>
      ),
      subtitle: (
        <>
          <h2 className="text-5xl font-semibold text-[#232a36]">
            Don't Miss Your Dream
          </h2>
          <h3 className="text-3xl">
            Study <span className="text-[#e44e50]">MBBS in Georgia</span>
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
        <h1 className="whitespace-nowrap">
          <span className="text-red-400">Explore</span>
          <span className="text-[#232a36]"> Universities</span>
        </h1>
      ),
      subtitle: (
        <>
          <h2 className="text-5xl font-semibold text-[#232a36]">
            Find the Perfect Medical University
          </h2>
          <h3 className="text-3xl">
            <span className="text-[#e44e50]">12+ NMC</span> Approved Options
          </h3>
        </>
      ),
      description:
        "Discover top medical universities in Georgia with world-class facilities, experienced faculty, and international recognition.",
      stats: [
        { value: "12+", label: "NMC Approved Universities" },
        { value: "6+", label: "Years of Excellence" },
        { value: "10k+", label: "Indian Students" },
        { value: "100%", label: "Visa Success" },
      ],
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
        <h1 className="whitespace-nowrap">
          <span className="text-red-400">Student</span>
          <span className="text-[#232a36]"> Success Stories</span>
        </h1>
      ),
      subtitle: (
        <>
          <h2 className="text-5xl font-semibold text-[#232a36]">
            Hear from our Alumni
          </h2>
          <h3 className="text-3xl">
            Real <span className="text-red-400">Experiences</span>, Real
            Success
          </h3>
        </>
      ),
      description:
        "Learn from students who have successfully completed their MBBS in Georgia and are now practicing medicine around the world.",
      testimonial: {
        quote:
          "Studying MBBS in Georgia was one of the best decisions of my life. The education quality, international exposure, and practical clinical experience prepared me well for my medical career.",
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
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
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
      icon: "✈️",
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
  testimonials: [
    {
      name: "Priya Sharma",
      emoji: "👩‍⚕️",
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
      emoji: "👨‍⚕️",
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
  wallOfFameImages: [
    { caption: "SR Counselling Office", emoji: "🏢" },
    { caption: "Student Orientation", emoji: "👨‍🎓" },
    { caption: "University Visit", emoji: "🏫" },
    { caption: "Visa Assistance Workshop", emoji: "🛂" },
    { caption: "Pre-departure Session", emoji: "✈️" },
    { caption: "Student Welcome Event", emoji: "🎉" },
    { caption: "Academic Counselling", emoji: "📚" },
    { caption: "Campus Tour", emoji: "🏛️" },
    { caption: "Student Housing Tour", emoji: "🏠" },
    { caption: "Cultural Program", emoji: "🎭" },
    { caption: "Medical Workshop", emoji: "👨‍⚕️" },
    { caption: "Career Guidance Session", emoji: "💼" },
  ],
};

// Reusable component definitions
const SectionHeader = ({ title, description }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold text-[#232a36] mb-6">{title}</h2>
    <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">{description}</p>
  </div>
);

const Home = () => {
  // State declarations
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = DATA.carouselSlides.length;
  const [flipped, setFlipped] = useState(
    Array(DATA.whyUsFeatures.length).fill(false)
  );

  // ADDED: Fix navbar overlap by adding a ref for the hero section
  const heroSectionRef = useRef(null);

  // ADDED: Adjust hero section top margin after render
  useEffect(() => {
    // Function to adjust hero section position
    const adjustHeroSection = () => {
      const navbar = document.querySelector("nav");
      if (navbar && heroSectionRef.current) {
        const navHeight = navbar.offsetHeight;
        heroSectionRef.current.style.paddingTop = `${navHeight}px`;
      }
    };

    // Initial adjustment
    adjustHeroSection();

    // Adjust on window resize
    window.addEventListener("resize", adjustHeroSection);

    // Cleanup
    return () => {
      window.removeEventListener("resize", adjustHeroSection);
    };
  }, []);

  // Carousel navigation functions
  const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  // Auto carousel effect
  // useEffect(() => {
  //   const interval = setInterval(goToNextSlide, 20000);
  //   return () => clearInterval(interval);
  // }, []);

  // Component: Carousel Dots
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

  // Component: Challenge Card
  const ChallengeCard = ({
    number,
    title,
    icon,
    bgColor,
    description,
    quote,
  }) => (
    <div
      className={`bg-gradient-to-br ${bgColor} rounded-xl p-8 md:w-1/3 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 hover:-translate-y-2 group`}
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-[#232a36] mb-4 mt-4 text-center">
        {title}
      </h3>
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-white shadow-inner flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300"
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
      <p className="text-[#4a5568] group-hover:text-[#232a36] transition-colors duration-300">
        {description}
      </p>
      <div className="mt-6 bg-white/70 p-3 rounded-lg border-l-4 border-red-500 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
        <p className="font-medium italic text-sm text-[#232a36]">{quote}</p>
      </div>
    </div>
  );

  // Component: Comparison Card - Updated with icons
  const ComparisonCard = ({
    title,
    gradient,
    icon,
    before,
    after,
    description,
  }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Card Header with Better Gradient and Icon Placement */}
      <div
        className={`h-24 bg-gradient-to-r ${gradient} flex items-center justify-center relative px-4`}
      >
        {/* Improved icon container with consistent sizing and positioning */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white">
          <div className="text-red-500">{icon}</div>
        </div>
        <h3 className="text-xl text-white font-bold text-center mb-8">
          {title}
        </h3>
      </div>

      <div className="p-6 pt-12 space-y-4">
        <div className="relative overflow-hidden h-32 mt-2">
          {/* Before */}
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

          {/* After - Slides up on hover */}
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

        <div className="pt-4 border-t border-gray-100">
          <p className="text-[#4a5568] text-center">{description}</p>
        </div>
      </div>
    </div>
  );

  const OurServices = () => {
    const [activeStep, setActiveStep] = useState(0);
    const contentRef = useRef(null);

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

    // Animation for content transitions
    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "translateY(20px)";

        setTimeout(() => {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }, 50);
      }
    }, [activeStep]);

    // ServiceStep Component with enhanced visuals
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
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-red-300"></span>
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
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-300 rounded-full opacity-30 animate-ping"></div>
        <div
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-red-300 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-[#232a36] mb-4 sm:mb-6"
            >
              Our{" "}
              <span className="text-red-500 relative">
                Services
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-red-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-[#4a5568] max-w-3xl mx-auto"
            >
              From admission to graduation, we provide comprehensive support
              throughout your medical education journey.
            </motion.p>
          </div>

          {/* Stepper - Desktop (Horizontal) */}
          <div className="hidden md:flex justify-center items-center mb-10 overflow-x-auto py-4">
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

          {/* Additional "quick jump" to popular services */}
          <div className="mt-16 text-center">
            <p className="text-sm font-medium text-gray-500 mb-4">
              Quick Jump to Popular Services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[1, 3, 6].map((serviceIndex) => (
                <button
                  key={serviceIndex}
                  onClick={() => goToStep(serviceIndex)}
                  className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                    activeStep === serviceIndex
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {DATA.services[serviceIndex].icon}{" "}
                  {DATA.services[serviceIndex].title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  };

    // Student Testimonials Section
    const StudentTestimonials = () => {
      return (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#232a36] mb-6">
                What{" "}
                <span className="text-red-400">Students</span> Say about Us?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-red-400 mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DATA.testimonials.map((student, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
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
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500 mb-4 flex-grow">
                        <p className="italic text-[#4a5568] line-clamp-4">
                          "{student.testimonial}"
                        </p>
                      </div>

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

    // Wall of Fame Section
    const WallOfFame = () => {
      return (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-[#232a36] mb-4">
                Wall of <span className="text-red-500">Fame</span>
              </h2>
              <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">
                Moments and memories from our journey helping students achieve
                their dreams
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-red-400 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {DATA.wallOfFameImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl transform transition-transform duration-300 hover:scale-110">
                        {image.emoji}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <p className="text-white font-medium text-sm text-center">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Carousel - Fixed z-index and positioning */}
        <div
          ref={heroSectionRef}
          className="relative min-h-[600px] z-0"
          style={{
            paddingTop: "0px", // Will be set dynamically by useEffect
          }}
        >
          {DATA.carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between h-full">
                  {/* Content side - consistent width for all slides */}
                  <div className="md:w-1/2 lg:w-1/2 md:pr-4">
                    <div className="space-y-4">
                      {/* Title with consistent styling */}
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        {slide.title}
                      </div>

                      {/* Subtitle with consistent styling */}
                      <div className="py-2">{slide.subtitle}</div>

                      {/* Description with consistent styling */}
                      <p className="text-sm md:text-base text-[#4a5568] max-w-xl">
                        {slide.description}
                      </p>

                      {/* Stats in a consistent layout */}
                      {slide.stats && (
                        <div className="grid grid-cols-2 gap-3 py-3 max-w-xl">
                          {slide.stats.map((stat, idx) => (
                            <div
                              key={idx}
                              className="text-center p-2 bg-white rounded-lg shadow-sm"
                            >
                              <h3 className="text-lg md:text-xl font-bold text-[#e44e50]">
                                {stat.value}
                              </h3>
                              <p className="text-xs text-[#4a5568]">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Testimonial */}
                      {slide.testimonial && (
                        <div className="bg-white p-3 rounded-lg shadow-md max-w-xl">
                          <p className="text-[#4a5568] italic text-xs md:text-sm">
                            "{slide.testimonial.quote}"
                          </p>
                          <div className="mt-1 flex items-center">
                            <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-gray-300"></div>
                            <div className="ml-2">
                              <p className="font-medium text-xs md:text-sm">
                                {slide.testimonial.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {slide.testimonial.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Buttons with consistent spacing */}
                      {slide.buttons && (
                        <div
                          className={`${
                            slide.buttons.length > 1 ? "flex gap-3" : ""
                          } pt-3`}
                        >
                          {slide.buttons.map((button, idx) => (
                            <Link
                              key={idx}
                              to={button.to}
                              className={`inline-block px-4 py-2 md:px-5 md:py-3 ${
                                button.primary
                                  ? "bg-red-500 text-white hover:bg-red-600"
                                  : "border border-red-500 text-red-500 hover:bg-red-50"
                              } font-medium rounded transition text-sm md:text-base ${
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

                  {/* Image side - consistent width for all slides */}
                  <div className="md:w-1/2 lg:w-1/2 flex justify-end mt-6 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full aspect-square flex items-center justify-center">
                      <div className={slide.image.containerClass || ""}>
                        <img
                          src={slide.image.src}
                          alt={slide.image.alt}
                          className={`${
                            // Consistent image sizing for all slides
                            index === 0
                              ? "w-48 h-48 md:w-56 md:h-56"
                              : "w-full h-full object-cover rounded-lg"
                          } transition-transform duration-500 hover:scale-105`}
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

          {/* Navigation Controls - Positioned further to the sides */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 md:p-3 rounded-full shadow-lg z-20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 md:p-3 rounded-full shadow-lg z-20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-gray-800" />
          </button>

          <CarouselDots />
        </div>

        {/* ADDED: Custom scrollbar style */}
        <style jsx="true">{`
          /* Custom scrollbar styles */
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
        `}</style>

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
                  <span className="text-red-400">MBBS</span>?
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
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition shadow-lg transform hover:scale-105 duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Compare Universities
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
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

        {/* Why Choose Us - Grid Section */}
        <section className="py-20 bg-white flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-red-500">Us</span> for Your Georgian
            Journey?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {DATA.whyUsFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="relative w-72 h-44 mx-auto cursor-pointer perspective"
                onMouseEnter={() =>
                  setFlipped(flipped.map((f, i) => (i === idx ? true : f)))
                }
                onMouseLeave={() =>
                  setFlipped(flipped.map((f, i) => (i === idx ? false : f)))
                }
              >
                <div
                  className={`transition-transform duration-500 transform-style-preserve-3d w-full h-full ${
                    flipped[idx] ? "rotate-y-180" : ""
                  }`}
                >
                  <div className="absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100 backface-hidden">
                    <div className="bg-red-500 text-white rounded-full p-4 mb-4 shadow-lg">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[#232a36]">
                      {feature.front}
                    </h4>
                  </div>
                  <div className="absolute w-full h-full flex flex-col items-center justify-center bg-red-500 text-white rounded-xl shadow-lg border border-red-200 rotate-y-180 backface-hidden px-6">
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm">{feature.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="w-full max-w-3xl bg-gray-50 rounded-lg shadow flex flex-wrap justify-center items-center gap-6 py-6 px-4 mb-12">
            {DATA.srStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center mx-4">
                <span className="text-2xl font-bold text-red-500">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Logo, tagline, CTA - with larger logo and removed SR Counselling text */}
          <div className="flex flex-col items-center">
            <img src={srLogo} alt="SR Counselling" className="h-24 w-24 mb-6" />
            {/* Text "SR Counselling" removed */}
            <p className="text-center text-lg text-[#4a5568] max-w-xl mb-6">
              Let us guide you to your dream medical career in Georgia with
              expertise, support, and trust.
            </p>
            <a
              href="https://www.srcounselling.in/about.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow-lg"
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

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
        </section>

        {/* Additional Sections */}
        <OurServices />
        <StudentTestimonials />
        <WallOfFame />
      </div>
    )
  }

  


  export default Home;
