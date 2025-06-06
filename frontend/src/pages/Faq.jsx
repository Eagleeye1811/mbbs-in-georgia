import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqData = [
	{
		id: 1,
		title: 'Is MBBS from Georgia valid in India?',
		content:
			'Yes, MBBS from NMC-approved Georgian universities is valid in India. Graduates need to clear the NEXT exam to practice in India.',
		icon: 'bx bxs-certification',
	},
	{
		id: 2,
		title: 'What is the total cost of MBBS in Georgia?',
		content:
			'The total cost for MBBS in Georgia typically ranges from 20-25 lakhs INR including tuition fees, accommodation, and living expenses for the entire program.',
		icon: 'bx bx-money',
	},
	{
		id: 3,
		title: 'Is Georgia safe for Indian students?',
		content:
			'Georgia is considered a safe country for international students with low crime rates. Many Indian students are already studying there with positive experiences.',
		icon: 'bx bx-shield-quarter',
	},
	{
		id: 4,
		title: 'What about the language barrier?',
		content:
			'The medium of instruction in Georgian medical universities is English for international students. Basic Georgian language training is provided to help with day-to-day communication.',
		icon: 'bx bx-conversation',
	},
	{
		id: 5,
		title: 'Will I get Indian food in Georgia?',
		content:
			'Yes, there are Indian restaurants and grocery stores in major Georgian cities. Many universities also have Indian food options in their cafeterias.',
		icon: 'bx bx-restaurant',
	},
	{
		id: 6,
		title: 'What is the visa success rate?',
		content:
			'The visa success rate for Indian students applying to Georgian universities is very high, approximately 98-99% if all required documents are properly submitted.',
		icon: 'bx bx-id-card',
	},
	{
		id: 7,
		title: 'Can I work while studying?',
		content:
			'Yes, international students in Georgia are allowed to work part-time (20 hours per week) during their studies and full-time during holidays.',
		icon: 'bx bx-briefcase',
	},
	{
		id: 8,
		title: 'What about internship and practical training?',
		content:
			'Georgian medical universities provide clinical rotations from the 3rd year onwards. Students complete a one-year internship during their final year of MBBS.',
		icon: 'bx bxs-buildings',
	},
];

function FaqItem({ title, content, icon, isExpanded, onToggle }) {
	return (
		<div className="mb-4 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
			<div
				className={`flex justify-between items-center p-4 cursor-pointer ${
					isExpanded
						? 'bg-[#272e3f] text-white'
						: 'bg-gray-100 hover:bg-gray-200'
				}`}
				onClick={onToggle}
			>
				<div className="font-medium flex items-center">
					<i
						className={`${icon} mr-3 text-xl ${
							isExpanded ? 'text-white' : 'text-[#ff5a5f]'
						} transition-colors duration-300`}
					></i>
					{title}
				</div>
				<i
					className={`bx ${
						isExpanded ? 'bx-chevron-up' : 'bx-chevron-down'
					} text-xl transition-all duration-300 ${
						isExpanded ? '' : 'hover:translate-y-1'
					}`}
				></i>
			</div>
			{isExpanded && (
				<div className="bg-white p-5 shadow-inner border border-gray-200 animate-fadeIn">
					<div className="leading-relaxed">{content}</div>
				</div>
			)}
		</div>
	);
}

function Faq() {
	const [expandedId, setExpandedId] = useState(null);
	const navigate = useNavigate();

	const toggleFaq = (id) => {
		setExpandedId(expandedId === id ? null : id);
	};

	const handleContactClick = () => {
		navigate('/ContactUs');
	};

	return (
    <div className="min-h-screen bg-gray-50 py-0">
      {/* Hero Section with hover effects */}
      <div
        className="bg-[#272e3f] text-white relative overflow-hidden"
        style={{ height: "450px" }}
      >
        {/* Background elements with hover effects */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent transition-all duration-500 hover:from-red-500/20"></div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 h-full flex items-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-white inline-block playfair-display transition-transform duration-300 hover:translate-x-2">
                  Frequently Asked
                </span>
                <br />
                <span className="text-[#ff5a5f] inline-block playfair-display transition-all duration-300 hover:text-[#ff7b80] hover:translate-x-2">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl transition-all duration-300 hover:text-white">
                Everything you need to know about studying MBBS in Georgia
              </p>

              <div className="mt-8 flex space-x-4">
                <button
                  className="bg-[#ff5a5f] hover:bg-[#ff4146] text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center hover:shadow-lg hover:-translate-y-1"
                  onClick={handleContactClick}
                >
                  <i className="bx bx-conversation mr-2 transition-transform duration-300 group-hover:rotate-12"></i>
                  Ask a Question
                </button>
                <button
                  className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center hover:shadow-lg hover:-translate-y-1"
                  onClick={() =>
                    document
                      .querySelector(".faq-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <i className="bx bx-chevron-down mr-2 transition-transform duration-300 hover:translate-y-1"></i>
                  Browse FAQs
                </button>
              </div>
            </div>

            {/* Right side decorative elements with hover effects */}
            <div className="md:w-2/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center">
                    <i className="bx bxs-certification text-[#ff5a5f] text-3xl mr-3 transition-transform duration-300 hover:scale-110"></i>
                    <span className="font-medium text-lg">NMC Approved</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm mt-6 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center">
                    <i className="bx bx-money-withdraw text-[#ff5a5f] text-3xl mr-3 transition-transform duration-300 hover:scale-110"></i>
                    <span className="font-medium text-lg">Affordable</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center">
                    <i className="bx bx-globe text-[#ff5a5f] text-3xl mr-3 transition-transform duration-300 hover:scale-110"></i>
                    <span className="font-medium text-lg">
                      Global Recognition
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm mt-6 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center">
                    <i className="bx bx-shield-quarter text-[#ff5a5f] text-3xl mr-3 transition-transform duration-300 hover:scale-110"></i>
                    <span className="font-medium text-lg">
                      Safe Environment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content with added hover effects */}
      <div className="faq-section container mx-auto px-4 mt-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 transition-transform duration-300 hover:scale-105">
            Find Answers
          </h2>
          <p className="text-[#ff5a5f] font-semibold text-center mb-8 transition-colors duration-300 hover:text-[#ff4146]">
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

          {/* Contact Section with enhanced hover effects */}
          <div className="mt-12 text-center p-5 border-t border-gray-100 transition-colors duration-300 hover:bg-gray-50 rounded-lg">
            <p className="mb-4 font-medium transition-colors duration-300 hover:text-gray-700">
              Still have query?
            </p>

            <button
              className="bg-[#ff5a5f] hover:bg-[#ff4146] text-white py-2 px-6 rounded-md font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              onClick={handleContactClick}
            >
              <span className="flex items-center">
                <i className="bx bx-conversation mr-2 transition-transform duration-300 hover:rotate-12"></i>
                Contact Our Counselors
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this at the top of your file or in your CSS/tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`;
document.head.appendChild(style);

export default Faq;