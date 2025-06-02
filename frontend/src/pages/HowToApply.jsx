import React, { useState, useEffect } from 'react';
import skyimg from '../assets/sky_img.jpg';
import aeroplaneImg from '../assets/aeroplane_f.png';
// Import the new background image
import heroSectionImg from '../assets/georgia-how to apply.webp';
import documentList from '../assets/Document_checklist.pdf';
import nmcRegulations from '../assets/nmc-regulations.pdf'; // You'll need to add this PDF to your assets

const applicationSteps = [
  {
    id: 1,
    title: "Document Collection",
    description: "Prepare and organize all required documents",
    icon: "bx bx-folder-open"
  },
  {
    id: 2,
    title: "University Selection",
    description: "Choose the right Georgian medical university for you",
    icon: "bx bx-buildings"
  },
  {
    id: 3,
    title: "Application Submission",
    description: "Submit your application to your chosen universities",
    icon: "bx bx-send"
  },
  {
    id: 4,
    title: "Admission Letter",
    description: "Receive your official admission letter",
    icon: "bx bx-envelope-open"
  },
  {
    id: 5, 
    title: "Visa Process",
    description: "Apply for your student visa with our guidance",
    icon: "bx bx-id-card"
  },
  {
    id: 6,
    title: "Fee Payment",
    description: "Complete your tuition and other fee payments",
    icon: "bx bx-credit-card"
  },
  {
    id: 7,
    title: "Travel Arrangements",
    description: "Book flights and prepare for your journey",
    icon: "bx bx-briefcase-alt"
  },
  {
    id: 8,
    title: "Arrival & Orientation",
    description: "Settle into your new life in Georgia",
    icon: "bx bx-map-pin"
  }
];

const HowToApply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  
  const handleStepChange = (index) => {
    // Prevent rapid clicking during animation
    if (animating) return;
    
    setAnimating(true);
    setCurrentStep(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setAnimating(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToNextStep = () => {
    if (currentStep < applicationSteps.length - 1 && !animating) {
      handleStepChange(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0 && !animating) {
      handleStepChange(currentStep - 1);
    }
  };

  // Calculate the position of the plane along the curved path
  const calculatePlanePosition = () => {
    const progress = currentStep / (applicationSteps.length - 1);
    
    // X position (horizontal) - linear from 0% to 100%
    const xPosition = `${progress * 100}%`;
    
    // Y position (vertical) - parabolic curve to create arc
    // Goes down and then up in an arc shape (-20px at the middle)
    const yOffset = -20 * Math.sin(Math.PI * progress);
    
    return {
      left: xPosition,
      top: `calc(50% + ${yOffset}px)`,
    };
  };

  // Calculate rotation based on position in the curve
  const calculatePlaneRotation = () => {
    const progress = currentStep / (applicationSteps.length - 1);
    
    // At start: slight upward angle (negative degrees)
    // Middle: level (0 degrees)
    // End: slight downward angle (positive degrees)
    // Creates a smooth rotation that follows the arc
    const rotation = 10 * Math.sin((progress - 0.5) * Math.PI);
    
    return `rotate(${rotation}deg)`;
  };

  const planePosition = calculatePlanePosition();
  const planeRotation = calculatePlaneRotation();

  // Handle PDF download
  const handleDownloadPdf = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = nmcRegulations;
    link.download = 'NMC-Regulations.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPdfModal(false);
  };

  // Handle document checklist download
  const handleDownloadDocumentChecklist = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = documentList;
    link.download = 'Document_Checklist.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div 
        className="min-h-[450px] sm:min-h-[500px] duration-200 flex items-center relative"
        style={{
          backgroundImage: `url(${heroSectionImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Hero content overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-white">How to Apply for MBBS</span> <br />
            <span className="text-[#ff5a5f]">in Georgia</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A step-by-step guide to your medical education journey in Georgia
          </p>
        </div>
      </div>
      
      {/* Application Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 relative ">
            Application Process
          </h2>

          {/* Airplane Animation Path */}
          <div className="relative max-w-4xl mt-15 mx-auto mb-10 px-6">
            {/* Curved Path with SVG - Increased height from h-24 to h-36 */}
            <div className="relative h-36 mb-8 overflow-visible">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0,70 Q450,0 900,70" 
                  fill="none" 
                  stroke="#CBD5E0" 
                  strokeWidth="2" 
                  strokeDasharray="8,8" 
                  className="w-full"
                />
                
                {/* Step markers along the path - updated y calculation */}
                {applicationSteps.map((_, index) => {
                  const percentage = index / (applicationSteps.length - 1) * 100;
                  // Adjusted curve calculation with more amplitude to ensure dots are visible
                  const y = 70 - 65 * Math.sin(Math.PI * index / (applicationSteps.length - 1));
                  return (
                    <circle 
                      key={index} 
                      cx={`${percentage}%`} 
                      cy={y} 
                      r="5" 
                      fill={index <= currentStep ? "#FC8181" : "#E2E8F0"}
                      className="transition-colors duration-300"
                    />
                  );
                })}
              </svg>
              
              {/* Starting point - adjusted to match new curve */}
              <div className="absolute -left-3 top-[70px] flex flex-col items-center transform -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-xs mt-1 font-medium">INDIA</span>
              </div>

              {/* Ending point - adjusted to match new curve */}
              <div className="absolute -right-3 top-[70px] flex flex-col items-center transform -translate-y-1/2">
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-xs mt-1 font-medium">GEORGIA</span>
              </div>
              
              {/* Flying airplane - position adjusted for new curve */}
              <div 
                className="absolute z-20 transform -translate-x-1/2 transition-all duration-700 ease-in-out"
                style={{
                  left: planePosition.left,
                  top: planePosition.top,
                  transform: `translateX(-50%) translateY(-50%) ${planeRotation}`,
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
                }}
              >
                {/* Actual airplane image */}
                <img 
                  src={aeroplaneImg} 
                  alt="Airplane" 
                  className="w-16 h-auto"
                />
                
                {/* Small shadow - moves with the plane */}
                <div 
                  className="absolute left-1/2 -bottom-8 w-10 h-2 bg-black opacity-20 rounded-full blur-md" 
                  style={{transform: 'translateX(-50%)'}}
                ></div>
              </div>
            </div>
            
            {/* Step labels - keep this part unchanged */}
            <div className="flex justify-between mt-2 px-2">
              {[0, applicationSteps.length-1].map((index) => (
                <div 
                  key={index} 
                  className={`text-sm font-medium ${index <= currentStep ? 'text-red-500' : 'text-gray-500'}`}
                  style={{
                    width: '80px',
                    textAlign: index === 0 ? 'left' : 'right',
                    marginLeft: index === 0 ? '0' : 'auto',
                    marginRight: index === applicationSteps.length - 1 ? '0' : 'auto'
                  }}
                >
                  Step {index === 0 ? 1 : applicationSteps.length}
                </div>
              ))}
            </div>
          </div>

          {/* Process Content Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
            {/* Light blue background wrapper */}
            <div className="bg-blue-50 p-4 sm:p-6">
              {/* White content area */}
              <div className="bg-white rounded-xl p-6 sm:p-8 min-h-[300px] flex flex-col items-center justify-center">
                {/* Icon */}
                <div className="mb-6 text-center">
                  <i className={`${applicationSteps[currentStep].icon} text-5xl text-red-500`}></i>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
                  {applicationSteps[currentStep].title}
                </h3>
                <p className="text-center text-gray-600 max-w-lg mb-4">
                  {applicationSteps[currentStep].description}
                </p>
                
                {/* Step indicator (e.g., Step 1 of 9) */}
                <div className="mt-4 text-sm font-medium text-gray-500">
                  Step {currentStep + 1} of {applicationSteps.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {applicationSteps.map((step, index) => (
              <button
                key={step.id}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? "bg-red-500 transform scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => handleStepChange(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              className={`px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300 ${
                currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={goToPrevStep}
              disabled={currentStep === 0 || animating}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ${
                currentStep === applicationSteps.length - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={goToNextStep}
              disabled={currentStep === applicationSteps.length - 1 || animating}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Documents Required Section - ADD THE NEW SECTION HERE */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
            Documents Required for Admission & Visa Process
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">10th Marksheet</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">12th Marksheet</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">NEET Score Card</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">NEET Admit Card</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Valid Passport</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Passport Size Photo</span>
                        <ul className="text-sm text-gray-600 mt-1 ml-1 space-y-1">
                          <li>- Size: 35x45 mm</li>
                          <li>- 80% Face Cover</li>
                          <li>- White Background</li>
                          <li>- Matt Finish</li>
                        </ul>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Father's Passport or Aadhar Card</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Mother's Passport or Aadhar Card</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Right Column */}
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Bank Statement (Last 6 months)</span>
                        <ul className="text-sm text-gray-600 mt-1 ml-1 space-y-1">
                          <li>- Closing Balance of ₹3 Lakhs</li>
                          <li>- Bank Manager's Signature & Stamp on every page</li>
                        </ul>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Birth Certificate (in English)</span>
                        <span className="text-sm text-gray-600">- if minor</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Power of Attorney</span>
                        <span className="text-sm text-gray-600">- for minor student</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">PAN Card of Student</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">PAN Card of Parent</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Sponsor Affidavit</span>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">Name Change Affidavit</span>
                        <span className="text-sm text-gray-600">- if there is a difference in name</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Note section */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="bx bx-info-circle text-yellow-400 text-xl"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> All documents must be in English or officially translated. Please ensure to bring original copies along with photocopies for verification.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleDownloadDocumentChecklist}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-300 inline-flex items-center"
                >
                  <i className="bx bx-download mr-2"></i>
                  Download Document Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NMC Regulations Sticky Button */}
      <div className="fixed bottom-10 right-6 z-50">
        <button 
          onClick={() => setShowPdfModal(true)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center"
          aria-label="NMC Regulations"
        >
          <i className="bx bx-file-pdf mr-2 text-xl"></i>
          NMC Regulations
        </button>
      </div>

      {/* PDF Download Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">NMC Regulations</h3>
              <button 
                onClick={() => setShowPdfModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                This document contains the latest National Medical Commission (NMC) regulations for studying MBBS abroad.
              </p>
              <div className="flex items-center text-blue-600 mb-3">
                <i className="bx bx-file-pdf text-2xl mr-2"></i>
                <span className="font-medium">NMC-Regulations.pdf</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors flex-1"
              >
                Cancel
              </button>
              <button 
                onClick={handleDownloadPdf}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors flex-1 flex items-center justify-center"
              >
                <i className="bx bx-download mr-2"></i>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToApply;
