import React from 'react'
import globeImage from '../assets/photo.jpg'; 


const Testimonials = () => {
  return (
    <div>
       {/* Header */}
      <header className="bg-blue-100 text-center py-10 px-4">
        <h1 className="text-4xl font-bold font-serif mb-6">
          Real Stories <br /> from Georgia
        </h1>
        <div className="flex justify-center">
          <img
            src={globeImage}
            alt="Education Globe"
            className="w-[550px] h-[200px] object-contain"
          />
        </div>
      </header>


      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Recent Blogs */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Recent Blogs</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-100 w-11/12 mx-auto" />
            <div className="bg-gray-200 h-100 w-11/12 mx-auto" />
          </div>
        </section>

        {/* Student Testimonials */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Student Testimonials</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-100 w-11/12 mx-auto" />
            <div className="bg-gray-200 h-100 w-11/12 mx-auto" />
          </div>
        </section>

        {/* Watch Video Stories */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Watch video stories</h2>
          <div className="bg-gray-200 h-100 flex items-center justify-center">
            <button className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </section>
      </main> 
     
    </div>
  )
}

export default Testimonials
