import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    icon: "bx bxs-buildings"
  }
];


function FaqItem({ title, content, icon, isExpanded, onToggle }) {
  return(
    <div className="mb-4 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div 
        className={`flex justify-between items-center p-4 cursor-pointer ${
          isExpanded ? "bg-[#272e3f] text-white" : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={onToggle}
      >
        <div className="font-medium flex items-center">
          <i className={`${icon} mr-3 text-xl`}></i>
          {title}
        </div>
        <i className={`bx ${isExpanded ? "bx-chevron-up" : "bx-chevron-down"} text-xl transition-transform duration-300`}></i>
      </div>
      {isExpanded && (
        <div className="bg-white p-5 shadow-inner border border-gray-200">
          <div className="leading-relaxed">{content}</div>
        </div>
      )}
    </div>
  )
}

function Faq() {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();
  
  const toggleFaq = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Handler to navigate to the ContactUs page
  const handleContactClick = () => {
    navigate('/ContactUs');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-0">
      {/* Hero Section with Navy Header like the image */}
      <div className="bg-[#272e3f] text-white py-16 mb-8 relative overflow-hidden">
        {/* Simpler background without pattern */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about studying MBBS in Georgia
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            {/* Enhanced Question Mark Icon */}
            <div className="relative">
              <div className="bg-white rounded-full p-4 w-36 h-36 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-20 animate-pulse"></div>
                <div className="z-10 flex items-center justify-center">
                  <i className="bx bx-question-mark text-7xl text-red-500 animate-bounce"></i>
                </div>
              </div>
              {/* Small decorative elements */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                <i className="bx bx-bulb text-white text-lg"></i>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                <i className="bx bx-book-open text-white text-lg"></i>
              </div>
              <div className="absolute -top-2 -left-10 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                <i className="bx bx-check text-white text-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Find Answers</h2>
          <p className="text-red-500 font-semibold text-center mb-8">
            Common questions about MBBS in Georgia
          </p>
          
          <div className="space-y-4">
            {faqData.map((faq) => (
              <FaqItem 
                key={faq.id}
                title={faq.title}
                content={faq.content}
                icon={faq.icon}
                isExpanded={expandedId === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>

          {/* Contact Section - Updated button with onClick handler */}
          <div className="mt-12 text-center">
            <p className="mb-4">Still have query?</p>
           
            <button 
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
              onClick={handleContactClick}
            >
              Contact Our Counselors
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
