import React from "react";
import {
  Wifi,
  ShieldCheck,
  Tv,
  BedDouble,
  Utensils,
  WashingMachine,
} from "lucide-react";

// Constants
const CAMPUS_FEATURES = [
  {
    icon: <Wifi aria-hidden="true" className="w-10 h-10 text-red-500" />,
    title: "High-Speed Internet",
    description: "Available 24x7 campus-wide WiFi connectivity",
    color: "from-red-400 to-red-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    title: "Campus Security",
    description: "24x7 security with modern surveillance systems",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <Tv className="w-10 h-10 text-purple-500" />,
    title: "Entertainment",
    description: "Regular social activities and entertainment zones",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <BedDouble className="w-10 h-10 text-blue-500" />,
    title: "Modern Comfort",
    description: "Well-furnished rooms with all modern amenities",
    color: "from-blue-400 to-blue-600",
  },
];

const HOSPITALS_DATA = [
  {
    name: "N.Kipshidze Central Clinical Hospital",
    description: "Tbilisi, Georgia and was founded in 1930",
    image: "/StudentLifestyle/fountain-uni.jpeg",
    features: [
      "Leading hospital under Tbilisi State Medical University",
      "Offers multi-specialty medical services with modern equipment",
      "Serves as a major clinical training center for medical students",
    ],
  },
  {
    name: "Clinical Medicine Research Institute",
    description: "Tbilisi, Georgia and was founded in 1991",
    image: "/StudentLifestyle/hospital1.jpg",
    features: [
      "Top medical and research center in Georgia",
      "Founded by Prof. Gia Todua",
      "Advanced diagnostics and imaging",
    ],
  },
  {
    name: "Tbilisi Central Hospital",
    description: "Tbilisi, Georgia and was founded in 1955",
    image: "/StudentLifestyle/hospital2.png",
    features: [
      "International-standard equipment",
      "Modern, multidisciplinary hospital",
      "140 beds, emergency & inpatient care",
    ],
  },
  {
    name: "National Center of surgery",
    description: "Tbilisi, Georgia and was founded in 1946",
    image: "/StudentLifestyle/hospital3.jpeg",
    features: [
      "Modern equipment and technologies",
      "Multidisciplinary medical center",
      "Advanced diagnostics (MRI, CT, etc.)",
    ],
  },
  {
    name: "Republican Hospital",
    description: "Tbilisi, Georgia and was founded in 1946",
    image: "/StudentLifestyle/hospital4.jpg",
    features: [
      "24/7 medical care and research focus",
      "Multidisciplinary state hospital",
      "700-bed capacity (planned expansion)",
    ],
  },
  {
    name: "New Hospital",
    description: "Tbilisi, Georgia and was founded in 2011",
    image: "/StudentLifestyle/hospital5.jpg",
    features: [
      "Provides emergency and critical care",
      "285 beds, European standards",
      "KTQ accredited",
    ],
  },
  {
    name: "Iashvili Children's Hospital",
    description: "Tbilisi, Georgia and was founded in 1965",
    image: "/StudentLifestyle/hospital6.webp",
    features: [
      "Strong international training collaborations",
      "Georgia's only third-level pediatric referral center",
      "260 beds with 24/7 emergency care",
    ],
  },
  {
    name: "Evex Clinics georgia",
    description: "Tbilisi, Georgia and was founded in 2012",
    image: "/StudentLifestyle/hospital7.jpeg",
    features: [
      "Largest healthcare network in Georgia with 78 clinics",
      "Offers cardiology, oncology, surgery, pediatrics, and more",
      "Modern technology and skilled staff",
    ],
  },
  {
    name: "Gagua Clinic",
    description: "Tbilisi, Georgia and was founded in 1997",
    image: "/StudentLifestyle/hospital8.jpeg",
    features: [
      "Georgia's first private maternity hospital",
      "100 beds, including NICU and operating theaters",
      "Specializes in obstetrics, IVF, pediatrics, and surgery",
    ],
  },
  {
    name: "AdventHealth Gordon",
    description: "Calhoun, Georgia and was founded in 1935",
    image: "/StudentLifestyle/hospital9.jpeg",
    features: [
      "69-bed acute-care hospital",
      "Part of AdventHealth system",
      "24/7 emergency services",
    ],
  },
  {
    name: "Chatuge Regional Hospital",
    description: "Hiawassee, Georgia and was founded in 1951",
    image: "/StudentLifestyle/hospital10.jpg",
    features: [
      "25-bed Critical Access Hospital",
      "Part of Union General Health System",
      "24/7 emergency care with helicopter transport",
    ],
  },
  {
    name: "East Georgia Regional Medical Center",
    description: "Statesboro, Georgia and was founded in 2000",
    image: "/StudentLifestyle/hospital11.jpeg",
    features: [
      "150-bed acute-care hospital",
      "24/7 emergency department",
      "Specialties: cardiology, orthopedics, women's health, neurology",
    ],
  },
];

const LIFESTYLE_IMAGES = [
  {
    src: "/StudentLifestyle/campus1.jpg",
    alt: "Campus Life",
    title: "Campus life",
  },
  {
    src: "/StudentLifestyle/class.avif",
    alt: "Student Events",
    title: "Advanced classes",
  },
  {
    src: "/StudentLifestyle/lab.jpg",
    alt: "Academic Life",
    title: "Academic Excellence",
  },
  {
    src: "/StudentLifestyle/campus2.jpg",
    alt: "Campus Activities",
    title: "Cultural Integration",
  },
  {
    src: "/StudentLifestyle/clinic.jpg",
    alt: "Cultural Events",
    title: "Internship opportunities",
  },
  {
    src: "/StudentLifestyle/garden.jpg",
    alt: "Student Life",
    title: "Campus Community",
  },
];

const ErrorFallback = ({ message }) => (
  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center h-full">
    <div className="text-red-500 font-medium">{message || "Error loading image"}</div>
  </div>
);

const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return <ErrorFallback message={`Failed to load ${alt}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

const stats = [
  { name: "Success Stories", value: "500+" },
  { name: "Student Satisfaction", value: "95%" },
];

const StudentLife = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Without Stats */}
      <div className="hero-section">
        <img
          src="/StudentLifestyle/convocation.webp"
          alt="Student's Life in Georgia"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gray-900/60 bg-blend-multiply"></div>

        <div className="hero-content">
          <div className="hero-content-wrapper">
            <h2 className="hero-title text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Student's Life in{" "}
              <span className="text-red-500">Georgia</span>
            </h2>
            <p className="hero-subtitle mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Studying in Georgia isn't just about earning a degree; it's about
              discovering who you are in a world far from home
            </p>
          </div>
        </div>
      </div>

      {/* Hospitals Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mt-0">
            <h2 className="text-5xl font-bold mb-4 pb-2">
              <span className="text-gray-800">Hospitals in </span>
              <span className="text-red-600">Georgia</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {HOSPITALS_DATA.map((hospital, index) => (
                <div key={index} className="group h-[350px] perspective-1000">
                  <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-video">
                          <img
                            src={hospital.image}
                            alt={hospital.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {hospital.name}
                          </h3>
                          <p className="text-gray-600 text-base">
                            {hospital.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="h-full bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">
                            {hospital.name}
                          </h3>
                          <ul className="space-y-3">
                            {hospital.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-2 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student's Lifestyle Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#232a36] mb-4">
              Campus Life <span className="text-red-500">Uncovered</span>
            </h2>
            <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">
              Experience the vibrant student life and cultural diversity in
              Georgian universities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {LIFESTYLE_IMAGES.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: "1/1" }}
              >
                <div className="relative h-full bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = `
                        <div class="absolute inset-0 bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center h-full">
                          <div class="text-red-500 font-medium">Student Life</div>
                        </div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white w-full">
                      <p className="font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
