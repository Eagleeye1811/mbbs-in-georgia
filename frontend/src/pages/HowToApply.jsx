import React, { useState, useEffect } from 'react';
import skyimg from '../assets/sky_img.jpg';
import aeroplaneImg from '../assets/aeroplane_f.png';
import heroSectionImg from '../assets/herosection_img.png';

const applicationSteps = [
  {
    id: 1,
    title: "Application Form & Process",
    description: "Complete step-by-step guidance for your MBBS application",
    icon: "bx bx-file"
  },
  {
    id: 2,
    title: "Document Collection",
    description: "Prepare and organize all required documents",
    icon: "bx bx-folder-open"
  },
  {
    id: 3,
    title: "University Selection",
    description: "Choose the right Georgian medical university for you",
    icon: "bx bx-buildings"
  },
  {
    id: 4,
    title: "Application Submission",
    description: "Submit your application to your chosen universities",
    icon: "bx bx-send"
  },
  {
    id: 5,
    title: "Admission Letter",
    description: "Receive your official admission letter",
    icon: "bx bx-envelope-open"
  },
  {
    id: 6, 
    title: "Visa Process",
    description: "Apply for your student visa with our guidance",
    icon: "bx bx-id-card"
  },
  {
    id: 7,
    title: "Fee Payment",
    description: "Complete your tuition and other fee payments",
    icon: "bx bx-credit-card"
  },
  {
    id: 8,
    title: "Travel Arrangements",
    description: "Book flights and prepare for your journey",
    icon: "bx bx-plane"
  },
  {
    id: 9,
    title: "Arrival & Orientation",
    description: "Settle into your new life in Georgia",
    icon: "bx bx-map-pin"
  }
];

const HowToApply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  
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

  return (
    <>
      <div 
        className="min-h-[450px] sm:min-h-[500px] duration-200 flex items-center relative"
        style={{
          backgroundImage: `url(${skyimg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Darker overlay for better text contrast against the sky background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between ml-20">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center sm:text-left sm:items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Start your
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-400 mb-3">
                Journey
              </h1>
              <p className="text-white text-base sm:text-lg max-w-lg">
                Begin your medical education journey in Georgia with our step-by-step application process and expert guidance.
              </p>
              
              
            </div>
            
            {/* Right side - Hero image */}
            <div className="hidden md:flex w-full md:w-1/2 justify-end items-center mt-8 md:mt-0">
              <div className="relative mr-15">
                {/* Hero image with animation */}
                <img 
                  src={heroSectionImg} 
                  alt="Application Process" 
                  className="max-w-md w-full h-auto object-contain relative z-10 animate-float"
                  style={{
                    filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2))',
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
                {/* Add subtle glow effect behind image */}
                <div 
                  className="absolute inset-0 bg-blue-400 bg-opacity-20 rounded-full filter blur-xl z-0" 
                  style={{transform: 'scale(0.8) translateY(5%)'}}
                ></div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default HowToApply;
