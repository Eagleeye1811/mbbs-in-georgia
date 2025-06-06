import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import universities from "../data/universities.json";

export default function UniversityDetailPage() {
  const [university, setUniversity] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const selectedUniversityName = searchParams.get("name");
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
    <div className="container mx-auto px-4 py-10 ">
      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Main Image */}
        <div className="flex justify-center items-center">
          <img
            src={university.images[0]} // Main image
            alt={`${university.name} Main`}
            className="w-full h-105 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-2 gap-4 p-2.5">
          {university.images.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${university.name} Gallery ${index + 1}`}
              className="w-full h-50 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* University Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mt-12 flex items-center">
        <img
          src={university.logo}
          alt={`${university.name} Logo`}
          className="w-16 h-16 object-contain mr-4"
        />
        {university.name}
      </h1>

      {/* Overview Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-info-circle text-white mr-2"></i> Overview
        </h2>
        <div className="mt-4 bg-gray-200 p-4 rounded-b-lg">
          {Array.isArray(university.overview)
            ? university.overview.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 text-justify mb-4">
                  {paragraph}
                </p>
              ))
            : university.overview.split(". ").map((sentence, index) => (
                <p key={index} className="text-lg text-gray-600 text-justify mb-4">
                  {sentence}.
                </p>
              ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-thumbs-up text-white mr-2"></i> Why Choose {university.name}
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          {university.whyChoose.map((reason, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2"></i> {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Highlights */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-lightbulb text-white mr-2"></i> Key Highlights
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          <li className="flex items-center mb-2">
            <i className="fas fa-calendar-alt text-blue-500 mr-2"></i><strong> Established Year: </strong> {university.established_year}
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-university text-blue-500 mr-2"></i><strong> Type: </strong> {university.type}
          </li>
          <li className="flex items-center mb-2">
            <i className="fas fa-chart-line text-blue-500 mr-2"></i><strong> National Ranking: </strong> {university.ranking.national}
          </li>
          <li className="flex items-center">
            <i className="fas fa-globe text-blue-500 mr-2"></i><strong> World Ranking: </strong> {university.ranking.world}
          </li>
        </ul>
      </div>

      {/* Recognition & Accreditation */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-award text-white mr-2"></i> Recognition & Accreditation
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          {university.recognition_accreditation.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-star text-yellow-400 mr-2"></i> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Programs Offered */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-book text-white mr-2"></i> Programs Offered
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          {university.programs_offered.map((program, index) => (
            <li key={index} className="flex items-center mb-2">
              {/* Display icons for each program */}
              <i className="fas fa-graduation-cap text-green-500 mr-2"></i> {program}
            </li>
          ))}
        </ul>
      </div>

      {/* Fees */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-wallet text-white mr-2"></i> Fees
        </h2>
        <div className="bg-gray-200 p-4 rounded-b-lg">
          <div className="flex items-center mb-2">
            <i className="fas fa-coins text-blue-500 mr-2"></i>
            <p className="text-lg text-gray-600">
              <strong>Annual Tuition Fee:</strong> ${university.annual_tuition_fee.usd} (USD) /{" "}
              {university.annual_tuition_fee.gel} (GEL)
            </p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-coins text-blue-500 mr-2"></i>
            <p className="text-lg text-gray-600">
              <strong>Hostel Fee:</strong> ${university.hostel_fee.usd} (USD)
            </p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
        <i className="fas fa-building text-white mr-2"></i> Facilities
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          {university.facilities.map((facility, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-toolbox text-yellow-400 mr-2"></i> {facility}
            </li>
          ))}
        </ul>
      </div>

      {/* Affiliated Hospitals */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-clinic-medical text-white mr-2"></i> Affiliated Hospitals
        </h2>
        <ul className="mt-4 list-none text-gray-600 bg-gray-200 p-4 rounded-b-lg">
          {university.affiliated_hospitals.map((hospital, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-hospital text-green-500 mr-2"></i> {hospital}
            </li>
          ))}
        </ul>
      </div>

      {/* Location */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-map-marker-alt text-white mr-2"></i> Location
        </h2>
        <p className="mt-4 text-lg text-gray-600 bg-gray-200 p-4 rounded-b-lg flex items-center">
          <i className="bx bx-map text-red-500 mr-2"></i> {university.location}
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white bg-red-500 p-4 rounded-t-lg flex items-center">
          <i className="fas fa-phone text-white mr-2"></i> Contact Information
        </h2>
        <div className="bg-gray-200 p-4 rounded-b-lg">
          <p className="text-lg text-gray-600">
            Website:{" "}
            <a href={university.contact_info.website} className="text-blue-500">
              {university.contact_info.website}
            </a>
          </p>
          <p className="mt-2 text-lg text-gray-600">Email: {university.contact_info.email}</p>
          <p className="mt-2 text-lg text-gray-600">Phone: {university.contact_info.phone}</p>
        </div>
      </div>
    </div>
  );
}