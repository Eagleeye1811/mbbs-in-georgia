import React from 'react'

const Testimonials = () => {
  return (
    <div>
      
      {/* Header */}
      <header className="bg-blue-100 text-center py-8">
        <h1 className="text-2xl font-bold">Real Stories from Georgia</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Recent Blogs */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Recent Blogs</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-32" />
            <div className="bg-gray-200 h-32" />
          </div>
        </section>

        {/* Student Testimonials */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Student Testimonials</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-32" />
            <div className="bg-gray-200 h-32" />
          </div>
        </section>

        {/* Watch Video Stories */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Watch video stories</h2>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            <button className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Testimonials
