import React, { useState } from 'react';
import aeroplaneImg from '../assets/aeroplane_f.png';
// Import the new background image
import heroSectionImg from '../assets/georgia-how to apply.webp';
import documentList from '../assets/Document_Checklist.pdf';
import nmcRegulations from '../assets/nmc-regulations.pdf'; // You'll need to add this PDF to your assets

// Update the applicationSteps array with the more detailed descriptions
const applicationSteps = [
  {
    id: 1,
    title: "Document Collection",
    description: "Start by understanding which documents are required for the entire admission process. Instead of collecting everything at once, we guide you through a step-by-step checklist tailored to each stage—ensuring nothing is missed. ",
    icon: "bx bx-folder-open"
  },
  {
    id: 2,
    title: "University Selection",
    description: "Research and shortlist accredited medical universities in Georgia based on curriculum, tuition fees, language of instruction, location, and global recognition. Get personalized counseling to match your goals and ensure the university meets MCI/NMC/WHO standards for future licensing and recognition.",
    icon: "bx bx-buildings"
  },
  {
    id: 3,
    title: "Application Submission",
    description: "Fill out application forms for the selected universities with accurate academic and personal information. Submit your collected documents through the proper channels, and ensure deadlines are met. We assist with proper documentation formatting and application tracking.",
    icon: "bx bx-send"
  },
  {
    id: 4,
    title: "Admission Letter",
    description: "Once your application is reviewed and accepted, you will receive a conditional or unconditional offer/admission letter from the university. This confirms your acceptance and is a key document for the next steps like visa processing.",
    icon: "bx bx-envelope-open"
  },
  {
    id: 5, 
    title: "Visa Process",
    description: "Begin your visa application with our expert assistance. This includes preparing your visa file with the admission letter, financial proof, passport, visa forms, and other supporting documents. We guide you through the embassy appointment, interview preparation, and submission procedures.",
    icon: "bx bx-id-card"
  },
  {
    id: 6,
    title: "Fee Payment",
    description: "Pay the required university fees as mentioned in the admission letter. This may include tuition fees, visa processing charges, insurance, and hostel fees. We assist with secure international payment methods and confirmation procedures from the university.",
    icon: "bx bx-credit-card"
  },
  {
    id: 7,
    title: "Travel Arrangements",
    description: "Once your visa is approved, we help you book your flight to Georgia and plan your travel. Get assistance with choosing suitable dates, booking affordable tickets, packing checklists, and pre-departure orientation. You'll also receive airport pickup and local contact information.",
    icon: "bx bx-briefcase-alt"
  },
  {
    id: 8,
    title: "Arrival & Orientation",
    description: "Arrive in Georgia and settle into your new environment. We provide airport reception, help with hostel/accommodation check-in, local SIM registration, opening a bank account, and city orientation. Attend the university's official orientation program to get started.",
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
        className="duration-200 flex items-center relative"
        style={{
          backgroundImage: `url(${heroSectionImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "450px", // Fixed height of 450px
        }}
      >
        {/* Hero content overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 text-left ml-5">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 ">
            <span className="text-white playfair-display">
              How to Apply for MBBS
            </span>{" "}
            <br />
            <span className="text-[#ff5a5f] playfair-display">in Georgia</span>
          </h1>
          <p className="text-xl text-white max-w-2xl  ">
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
          <div className="relative max-w-4xl mt-15 mx-auto mb-4 px-6">
            {/* Curved Path with SVG - Increased height from h-24 to h-36 */}
            <div className="relative h-36 mb-0 overflow-visible">
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
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
                  const percentage =
                    (index / (applicationSteps.length - 1)) * 100;
                  // Adjusted curve calculation with more amplitude to ensure dots are visible
                  const y =
                    70 -
                    65 *
                      Math.sin(
                        (Math.PI * index) / (applicationSteps.length - 1)
                      );
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
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
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
                  style={{ transform: "translateX(-50%)" }}
                ></div>
              </div>
            </div>

            {/* Step labels - keep this part unchanged */}
            <div className="flex justify-between mt-2 px-2">
              {[0, applicationSteps.length - 1].map((index) => (
                <div
                  key={index}
                  className={`text-sm font-medium ${
                    index <= currentStep ? "text-red-500" : "text-gray-500"
                  }`}
                  style={{
                    width: "80px",
                    textAlign: index === 0 ? "left" : "right",
                    marginLeft: index === 0 ? "0" : "auto",
                    marginRight:
                      index === applicationSteps.length - 1 ? "0" : "auto",
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
              {/* White content area - increased minimum height */}
              <div className="bg-white rounded-xl p-6 sm:p-8 min-h-[300px] flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start">
                  {/* Left side with icon */}
                  <div className="md:w-1/4 text-center mb-6 md:mb-0 flex flex-col items-center mt-23">
                    <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <i
                        className={`${applicationSteps[currentStep].icon} text-4xl text-red-500`}
                      ></i>
                    </div>
                    <div className="mt-2 text-sm font-medium py-1 px-3 rounded-full bg-red-100 text-red-600 inline-block">
                      Step {currentStep + 1} of {applicationSteps.length}
                    </div>
                  </div>

                  {/* Right side with content */}
                  <div className="md:w-3/4 md:pl-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {applicationSteps[currentStep].title}
                    </h3>

                    {/* Description - using a larger text with better spacing */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {applicationSteps[currentStep].description}
                    </p>

                    {/* Additional helper info box */}
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex">
                        <div className="flex-shrink-0 ">
                          <i className="bx bx-info-circle text-red-500 text-xl"></i>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-600">
                            <strong>Pro Tip:</strong> Our counselors provide
                            personalized assistance at each stage to ensure a
                            smooth application process.
                            {currentStep === 0 &&
                              " Create a digital backup of all your documents for easy access."}
                            {currentStep === 1 &&
                              " Compare universities based on your budget and career goals before making a choice."}
                            {currentStep === 2 &&
                              " Double-check all application details before final submission to avoid delays."}
                            {currentStep === 3 &&
                              " Keep digital and physical copies of your admission letter safe for future reference."}
                            {currentStep === 4 &&
                              " Start your visa process as soon as you receive the admission letter for timely processing."}
                            {currentStep === 5 &&
                              " Ensure you receive official receipts for all payments made to the university."}
                            {currentStep === 6 &&
                              " Purchase travel insurance that covers medical emergencies and related requirements."}
                            {currentStep === 7 &&
                              " Learn basic Georgian phrases to help navigate your initial days in the country."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                currentStep === applicationSteps.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={goToNextStep}
              disabled={
                currentStep === applicationSteps.length - 1 || animating
              }
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
                        <span className="font-semibold block">
                          10th Marksheet
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          12th Marksheet
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          NEET Score Card
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          NEET Admit Card
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Valid Passport
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Passport Size Photo
                        </span>
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
                        <span className="font-semibold block">
                          Father's Passport or Aadhar Card
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Mother's Passport or Aadhar Card
                        </span>
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
                        <span className="font-semibold block">
                          Bank Statement (Last 6 months)
                        </span>
                        <ul className="text-sm text-gray-600 mt-1 ml-1 space-y-1">
                          <li>- Closing Balance of ₹3 Lakhs</li>
                          <li>
                            - Bank Manager's Signature & Stamp on every page
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Birth Certificate (in English)
                        </span>
                        <span className="text-sm text-gray-600">
                          - if minor
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Power of Attorney
                        </span>
                        <span className="text-sm text-gray-600">
                          - for minor student
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          PAN Card of Student
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          PAN Card of Parent
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Sponsor Affidavit
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <i className="bx bx-check-circle text-red-500 text-xl mt-0.5 mr-3"></i>
                      <div>
                        <span className="font-semibold block">
                          Name Change Affidavit
                        </span>
                        <span className="text-sm text-gray-600">
                          - if there is a difference in name
                        </span>
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
                      <strong>Important:</strong> All documents must be in
                      English or officially translated. Please ensure to bring
                      original copies along with photocopies for verification.
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
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/40"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                NMC Regulations
              </h3>
              <button
                onClick={() => setShowPdfModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <i className="bx bx-x text-2xl"></i>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                This document contains the latest National Medical Commission
                (NMC) regulations for studying MBBS abroad.
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
