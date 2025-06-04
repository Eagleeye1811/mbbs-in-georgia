import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 h-full flex items-center">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative">
                  <div className="flex flex-col">
                    <span className="text-white">Privacy</span>
                    <span className="text-[#ff5a5f]">Policy</span>
                  </div>
                </h1>
                
                <p className="text-lg text-gray-300 max-w-2xl">
                  How we collect, use, and protect your information when you use our services.
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
                  onClick={() => window.scrollTo({ top: document.querySelector('.privacy-content').offsetTop - 80, behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300 flex items-center"
                >
                  <i className="bx bx-chevron-down mr-2"></i>
                  Read Policy
                </button>
              </div>
            </div>
            
            {/* Simplified decorative elements */}
            <div className="md:w-2/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-lock-alt text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Data Security</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mt-4 md:mt-6 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-check-shield text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Consent-Based</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-user-pin text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">User Rights</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mt-4 md:mt-6 transition-colors duration-300">
                  <div className="flex items-center">
                    <i className="bx bx-shield text-[#ff5a5f] text-2xl mr-3"></i>
                    <span className="font-medium">Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Privacy Policy Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-16 privacy-content mt-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-xl">
          {/* Header strip */}
          <div className="bg-gradient-to-r from-[#272e3f] to-[#3a4257] py-4 px-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <i className="bx bx-shield-quarter text-3xl mr-3 text-[#ff5a5f]"></i>
              Privacy Policy
            </h2>
          </div>
          
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8 text-lg leading-relaxed border-l-4 border-[#ff5a5f] pl-4 italic">
              At SR Counselling, accessible through our official website, the privacy of our visitors is of utmost importance to us. This Privacy Policy outlines the types of information we collect, how we use it, how we protect it, and the rights you have concerning your personal data.
              </p>

              {/* Policy sections with enhanced styling */}
              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">1</span>
                  Consent
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600">
                    By using our website, you consent to our Privacy Policy and agree to its terms.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">2</span>
                  Information We Collect
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    We may collect and process the following personal data:
                  </p>
                  <ul className="list-none ml-0 text-gray-600 space-y-2">
                    {[
                      "Name, email address, phone number, and other contact details",
                      "Address and location information",
                      "Details provided via forms or direct communication",
                      "Information related to your inquiries or services requested",
                      "Technical data like IP address, browser type, ISP, referring/exit pages, date/time stamps, and clicks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#ff5a5f] mr-2">
                          <i className="bx bx-check-circle"></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mt-4 bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
                    <strong>Note:</strong> We collect personal data only through lawful and fair means, either directly from you or your authorized representative.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">3</span>
                  How We Use Your Information
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    We use collected information to:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Operate, improve, and personalize our website</li>
                    <li>Respond to your queries and provide customer service</li>
                    <li>Communicate updates, offers, and promotional content</li>
                    <li>Analyze website usage to improve user experience</li>
                    <li>Prevent fraudulent activities and enhance security</li>
                    <li>Develop new services and functionality</li>
                  </ul>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">4</span>
                  Log Files
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    Like most websites, we use log files to track visits. These may include:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>IP addresses</li>
                    <li>Browser types</li>
                    <li>Date and time</li>
                    <li>Referring/exit pages</li>
                    <li>Number of clicks</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    These logs help us analyze trends and manage the website, and do not link to personally identifiable information.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">5</span>
                  Cookies and Web Beacons
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    We use cookies to:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Store user preferences</li>
                    <li>Track pages visited</li>
                    <li>Customize content based on browser or device</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can disable cookies through your browser settings. Visit your browser's website for more details.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">6</span>
                  Data Security
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    We take reasonable steps to protect your information from:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Unauthorized access</li>
                    <li>Loss, misuse, or disclosure</li>
                    <li>Tampering or destruction</li>
                  </ul>
                  <p className="text-gray-600 mt-4 mb-4">
                    Security measures include:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Firewalls and password-protected systems</li>
                    <li>Regular security audits and software updates</li>
                    <li>Staff training and confidentiality agreements</li>
                    <li>Limiting data access to authorized personnel only</li>
                  </ul>
                  <p className="text-gray-600 mt-4 italic">
                    However, please note that no method of data transmission over the internet is 100% secure.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">7</span>
                  Sharing Your Information
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    We do not sell or trade your personal data. However, we may share information with:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Service providers assisting with website operations</li>
                    <li>Legal authorities, when required by law</li>
                    <li>Partners for relevant services with your consent</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We are not responsible for the privacy practices of third-party websites or advertisers linked to our site.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">8</span>
                  Your Data Protection Rights
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600 mb-4">
                    Depending on your location (especially EU and California residents), you may have the right to:
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>Access the data we hold about you</li>
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Restrict or object to processing</li>
                    <li>Request data portability to another service</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise any of these rights, please contact us. We will respond within one month.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">9</span>
                  Children's Privacy
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600">
                    We do not knowingly collect data from children under the age of 13. If you believe your child has provided such information, please contact us immediately so we can delete it.
                  </p>
                </div>
              </div>

              <div className="mb-10 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-md">10</span>
                  Updates to This Privacy Policy
                </h2>
                <div className="ml-14">
                  <p className="text-gray-600">
                    We reserve the right to modify this policy at any time. Changes will be posted on this page with a revised effective date. We encourage you to review it periodically.
                  </p>
                </div>
              </div>

              {/* Contact Us - Enhanced */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg border border-gray-200 mt-12 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className="bx bx-envelope text-[#ff5a5f] text-3xl mr-3"></i>
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  If you have any questions about this Privacy Policy or your data, please contact us:
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-gradient-to-r from-[#ff5a5f] to-[#ff4146] hover:from-[#ff4146] hover:to-[#e73d43] text-white font-medium rounded-md transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <i className="bx bx-envelope mr-2"></i>
                    Contact Our Team
                  </button>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-md transition-all duration-300 flex items-center border border-gray-200 shadow hover:shadow-md"
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

export default PrivacyPolicy;
