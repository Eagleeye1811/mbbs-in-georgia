import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import universities from "../data/universities.json";

export default function UniversityDetailPage() {
  const [university, setUniversity] = useState(null);
  const [searchParams] = useSearchParams(); // Get query parameters

  useEffect(() => {
    const selectedUniversityName = searchParams.get("name"); // Get university name from query parameter
    if (selectedUniversityName) {
      const selectedUniversity = universities.find(
        (uni) => uni.name === selectedUniversityName
      );
      setUniversity(selectedUniversity);
    }
  }, [searchParams]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
{/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-center">
        {/* Left Side - Large Image */}
        <div className="flex justify-center items-center">
          <img
            src="/src/assets/Caucasus_University.jpg"
            alt="University Main Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Grid of Small Images */}
        <div className="grid grid-cols-2 gap-4 p-2.5">
          <img
            src="/src/assets/Ilia_State_University.jpg"
            alt="Gallery Image 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/src/assets/TSM_University.jpeg"
            alt="Gallery Image 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/src/assets/IBSU_University.webp"
            alt="Gallery Image 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/src/assets/ATSU_University.jpg"
            alt="Gallery Image 4"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* University Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mt-12 text-center">
        {university.name}
      </h1>

      {/* Overview Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Overview</h2>
        <p className="mt-4 text-lg text-gray-600">{university.overview}</p>
      </div>

      {/* Key Highlights */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Key Highlights</h2>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Established Year: <strong>{university.established_year}</strong></li>
          <li>Type: <strong>{university.type}</strong></li>
          <li>
            Recognition & Accreditation:{" "}
            <strong>{university.recognition_accreditation.join(", ")}</strong>
          </li>
          <li>National Ranking: <strong>{university.ranking.national}</strong></li>
          <li>World Ranking: <strong>{university.ranking.world}</strong></li>
        </ul>
      </div>

      {/* Programs Offered */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Programs Offered</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {university.programs_offered.map((program) => (
            <span key={program} className="px-4 py-2 bg-blue-500 text-white rounded-full">
              {program}
            </span>
          ))}
        </div>
      </div>

      {/* Medium of Instruction */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Medium of Instruction</h2>
        <p className="mt-4 text-lg text-gray-600">
          {university.medium_of_instruction.join(", ")}
        </p>
      </div>

      {/* Admission Requirements */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Admission Requirements</h2>
        <p className="mt-4 text-lg text-gray-600">{university.admission_requirements}</p>
      </div>

      {/* Facilities */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Facilities</h2>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          {university.facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Annual Tuition Fee and Hostel Fee */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Fees</h2>
        <p className="mt-4 text-lg text-gray-600">
          <strong>Annual Tuition Fee:</strong> ${university.annual_tuition_fee.usd} (USD) /{" "}
          {university.annual_tuition_fee.gel} (GEL)
        </p>
        <p className="mt-2 text-lg text-gray-600">
          <strong>Hostel Fee:</strong> ${university.hostel_fee.usd} (USD)
        </p>
      </div>

      {/* Affiliated Hospitals */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Affiliated Hospitals</h2>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          {university.affiliated_hospitals.map((hospital) => (
            <li key={hospital}>{hospital}</li>
          ))}
        </ul>
      </div>

      {/* Location */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Location</h2>
        <p className="mt-4 text-lg text-gray-600 flex items-center">
          <i className="bx bx-map text-red-500 mr-2"></i> {university.location}
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Information</h2>
        <p className="mt-4 text-lg text-gray-600">
          Website:{" "}
          <a href={university.contact_info.website} className="text-blue-500">
            {university.contact_info.website}
          </a>
        </p>
        <p className="mt-2 text-lg text-gray-600">Email: {university.contact_info.email}</p>
        <p className="mt-2 text-lg text-gray-600">Phone: {university.contact_info.phone}</p>
      </div>
    </div>
  );
}