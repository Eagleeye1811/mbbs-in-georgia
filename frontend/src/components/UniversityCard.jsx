import React from "react";


const UniversityCard = ({ image, name, location, year, type, highlights, onClick }) => {
  return (
    <div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:rotate-1 border-animation"
      style={{
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)", // Creative shadow spread
      }}
      onClick={onClick}
    >
      {/* Badge */}
      {type && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md m-1">
          {type}
        </span>
      )}

      {/* Image */}
      <div className="bg-gray-200 p-4 flex justify-center items-center h-64 group-hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="bx bx-university text-red-500 mr-2"></i> {name}
        </h3>
        <div className="mt-4 border-l-4 border-red-500 pl-4">
          <p className="text-gray-600 text-sm flex items-center">
            <i className="bx bx-calendar text-green-500 mr-2"></i> Established: {year}
          </p>
          <p className="text-gray-600 text-sm flex items-center">
            <i className="bx bx-map text-blue-500 mr-2"></i> Location: {location}
          </p>
        </div>
        {highlights && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-lg shadow-md">
                <i className="bx bx-star text-yellow-500"></i>
                <span className="text-gray-700 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        )}
        <button className="bg-red-500 hover:bg-[#ff4146] text-white py-3 px-6 rounded-full font-medium transition-colors duration-300 mt-4 cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;