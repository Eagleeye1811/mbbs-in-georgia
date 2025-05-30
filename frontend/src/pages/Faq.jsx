import { useState } from 'react';

const faqData = [
  {
    id: 1,
    title: "Is MBBS from Georgia valid in India?",
    content: "Yes, MBBS from NMC-approved Georgian universities is valid in India. Graduates need to clear the NEXT exam to practice in India.",
    icon: "bx bxs-certification"
  },
  {
    id: 2,
    title: "What is the total cost of MBBS in Georgia?",
    content: "The total cost for MBBS in Georgia typically ranges from 20-25 lakhs INR including tuition fees, accommodation, and living expenses for the entire program.",
    icon: "bx bx-money"
  },
  {
    id: 3,
    title: "Is Georgia safe for Indian students?",
    content: "Georgia is considered a safe country for international students with low crime rates. Many Indian students are already studying there with positive experiences.",
    icon: "bx bx-shield-quarter"
  },
  {
    id: 4,
    title: "What about the language barrier?",
    content: "The medium of instruction in Georgian medical universities is English for international students. Basic Georgian language training is provided to help with day-to-day communication.",
    icon: "bx bx-conversation"
  },
  {
    id: 5,
    title: "Will I get Indian food in Georgia?",
    content: "Yes, there are Indian restaurants and grocery stores in major Georgian cities. Many universities also have Indian food options in their cafeterias.",
    icon: "bx bx-restaurant"
  },
  {
    id: 6,
    title: "What is the visa success rate?",
    content: "The visa success rate for Indian students applying to Georgian universities is very high, approximately 98-99% if all required documents are properly submitted.",
    icon: "bx bx-id-card"
  },
  {
    id: 7,
    title: "Can I work while studying?",
    content: "Yes, international students in Georgia are allowed to work part-time (20 hours per week) during their studies and full-time during holidays.",
    icon: "bx bx-briefcase"
  },
  {
    id: 8,
    title: "What about internship and practical training?",
    content: "Georgian medical universities provide clinical rotations from the 3rd year onwards. Students complete a one-year internship during their final year of MBBS.",
    icon: "bx bx-hospital"
  }
];

function FaqItem({ title, content, icon, isExpanded, onToggle }) {
  return(
    <div className="mb-4 transition-all duration-300 hover:shadow-md">
      <div 
        className={`flex justify-between items-center p-4 rounded-t-md cursor-pointer ${
          isExpanded ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={onToggle}
      >
        <div className="font-medium flex items-center">
          <i className={`${icon} mr-3 text-xl`}></i>
          {title}
        </div>
        <i className={`bx bx-chevron-down transition-transform duration-300 ${
          isExpanded ? "transform rotate-180" : ""
        }`}></i>
      </div>
      {isExpanded && (
        <div className="bg-white p-5 rounded-b-md shadow-md border-t-0 border border-gray-200">
          <div className="leading-relaxed">{content}</div>
        </div>
      )}
    </div>
  )
}

export default Faq
