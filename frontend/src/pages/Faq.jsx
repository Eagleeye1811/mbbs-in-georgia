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

function Faq() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  }
  
  return(
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center md:text-left md:ml-8">
              <h1 className="text-5xl font-bold text-blue-800">
                <span className="block">Frequently</span>
                <span className="block ml-8 text-blue-700">Asked</span>
                <span className="block ml-16 text-blue-600">Questions</span>
              </h1>
              <div className="h-1 w-36 bg-blue-600 mt-4 mx-auto md:mx-0"></div>
            </div>
            <div className="bg-blue-500 rounded-full p-2 w-32 h-32 flex items-center justify-center shadow-md">
              <div className="bg-blue-900 rounded-full w-28 h-28 flex items-center justify-center text-white text-6xl">
                ?
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12 bg-white p-6 rounded-xl shadow-md">
          <p className="text-lg">Get answers to all your doubts about studying MBBS in Georgia. Still have questions? Our counselors are here to help!</p>
          <div className="mt-4 flex justify-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/4279/4279321.png" alt="Georgia" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/5315/5315920.png" alt="Medical" className="w-12 h-12" />
            <img src="https://cdn-icons-png.flaticon.com/512/2357/2357073.png" alt="Education" className="w-12 h-12" />
          </div>
        </div>
        
        <div className="faq-container bg-white p-6 rounded-xl shadow-md">
          {faqData.map((item) => (
            <FaqItem 
              key={item.id} 
              {...item} 
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}     
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Still Have Questions?</h2>
            <p className="mb-4">Our counselors are available to address any concerns you may have about MBBS in Georgia.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center mx-auto">
              <i className="bx bx-phone-call mr-2"></i> Contact a Counselor
            </button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8">
            <img src="https://cdn-icons-png.flaticon.com/512/2833/2833408.png" alt="University" className="w-24 h-24 opacity-70" />
            <img src="https://cdn-icons-png.flaticon.com/512/10115/10115132.png" alt="Doctor" className="w-24 h-24 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;