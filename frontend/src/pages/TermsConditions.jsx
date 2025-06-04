import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/ContactUs');
  };

  // Animation for floating elements
  useEffect(() => {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
      const randomX = Math.random() * 10 - 5;
      const randomY = Math.random() * 10 - 5;
      const randomDuration = 3 + Math.random() * 2;
      
      element.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${randomX}px, ${randomY}px)` },
          { transform: 'translate(0, 0)' }
        ],
        {
          duration: randomDuration * 1000,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'ease-in-out'
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#272e3f] text-white relative overflow-hidden" style={{ height: "450px" }}>
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Simple gradient effect */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 h-full flex items-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative">
                  <div className="flex flex-col">
                    <span className="text-white">Terms and</span>
                    <span className="text-[#ff5a5f]">Conditions</span>
                  </div>
                </h1>
                
                <p className="text-lg text-gray-300 max-w-2xl">
                  Our rules and regulations for using MBBS in Georgia website and services.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <button 
                  className="bg-[#ff5a5f] hover:bg-[#ff4146] text-white py-2 px-6 rounded-md font-medium transition-colors duration-300 flex items-center"
                  onClick={handleContactClick}
                >
                  <i className="bx bx-conversation mr-2"></i>
                  Contact Us
                </button>
                <button
                  onClick={() => window.scrollTo({ top: document.querySelector('.terms-content').offsetTop - 80, behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300 flex items-center"
                >
                  <i className="bx bx-chevron-down mr-2"></i>
                  Read Terms
                </button>
              </div>
            </div>
            
            {/* Simplified decorative elements */}
            <div className="md:w-2/5 ">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-file-blank text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Legal Agreement</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mt-4 md:mt-6 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-check-square text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">User Rights</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-book-open text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Guidelines</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mt-4 md:mt-6 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-certification text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-16 terms-content mt-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8 text-lg leading-relaxed border-l-4 border-[#ff5a5f] pl-4 italic">
                Welcome to MBBS in Georgia. These Terms and Conditions outline the rules and regulations for the use of our website and services. 
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use MBBS in Georgia 
                if you do not agree to all of the terms and conditions stated on this page.
              </p>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Definitions
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    "Company," "We," "Our," "Us" refers to MBBS in Georgia.<br />
                    "You," "User," "Visitor" means the person accessing or using our website.<br />
                    "Website" refers to our domain.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Use of the Website
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600 mb-4">
                    You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of or restrict the use of this site by any third party.
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>You must not use our site to transmit or distribute any viruses, spam, or any harmful technologies.</li>
                    <li>You agree not to attempt to gain unauthorized access to any portion of the website.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Eligibility
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    You must be at least 18 years old or visiting under the supervision of a parent or legal guardian to use this site and/or apply through our services.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Information Accuracy
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    While we strive to keep all information up-to-date and accurate, we do not guarantee the completeness, accuracy, or reliability of the content provided. Information such as universities, tuition fees, visa regulations, etc., may change without prior notice.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                  User Submissions
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600 mb-4">
                    Any information you submit to us (including but not limited to contact forms, queries, and document uploads) must be:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Accurate and truthful,</li>
                    <li>Not infringing on any third-party rights,</li>
                    <li>Not unlawful, defamatory, obscene, or otherwise objectionable.</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We reserve the right to remove or edit any such content at our discretion.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                  Intellectual Property Rights
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    Unless otherwise stated, all content, logos, text, graphics, and other materials on this website are owned by MBBS in Georgia and protected by intellectual property laws. You may not reproduce, republish, distribute, or otherwise exploit the content without express written permission.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">7</span>
                  Limitation of Liability
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600 mb-4">
                    We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Your use or inability to use the website,</li>
                    <li>Errors or inaccuracies in content,</li>
                    <li>Any unauthorized access to or use of our servers and/or personal information.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">8</span>
                  Third-Party Links
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    Our website may contain links to external websites that are not operated by us. We are not responsible for the content or practices of any third-party sites and encourage you to review their terms and privacy policies.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">9</span>
                  Privacy
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">10</span>
                  Amendments
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    We reserve the right to update or change these Terms and Conditions at any time without prior notice. Changes are effective immediately upon posting on this page. It is your responsibility to review them periodically.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">11</span>
                  Governing Law
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    These terms shall be governed and interpreted in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of India.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">12</span>
                  Contact Us
                </h2>
                <div className="ml-11">
                  <p className="text-gray-600">
                    If you have any questions about these Terms and Conditions, you can contact us through our Contact page.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Need More Information?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our Terms and Conditions, please feel free to reach out to us:
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
                  >
                    <i className="bx bx-envelope mr-2"></i>
                    Contact Our Team
                  </button>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-colors duration-300 flex items-center"
                  >
                    <i className="bx bx-chevron-up mr-2"></i>
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
