import React from 'react'
import globeImage from '../assets/photo.jpg'; 
import CardItem from "../components/cardItem";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-[600px]">
        {/* Background Image */}
        <img
          src="https://visavalley.com/sites/default/files/2024-12/overseas_education_consultants_in_kerala1.jpg"
          alt="Education Globe"
          className="w-full h-full object-cover brightness-90"
        />
        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center justify-end text-right px-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-white text-6xl font-bold font-serif mb-4 drop-shadow-lg">
              Real Stories <br /> 
              <span className="text-red-400">from Georgia</span>
            </h1>
            <p className="text-white text-xl font-semibold leading-relaxed drop-shadow-md">
              Join thousands of Indian students transforming their dreams into global success stories — start your journey in Georgia today.
            </p>
            <div className="flex justify-end space-x-4 mt-8">
              <div className="text-right">
                <p className="text-white text-4xl font-bold">500+</p>
                <p className="text-red-600 font-medium">Success Stories</p>
              </div>
              <div className="text-right">
                <p className="text-white text-4xl font-bold">95%</p>
                <p className="text-red-600 font-medium">Student Satisfaction</p>
              </div>
            </div>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-45 py-8">
        {/* Recent Blogs */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">Recent </span>
            <span className="text-red-600">Blogs</span>
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  imageSrc: "https://assets.studies-overseas.com/Banner1_404x262_65ffa3bfeb.png",
                  title: "Study Abroad Guide",
                  excerpt: "Essential tips for international students pursuing medical education",
                  link: "https://www.timeshighereducation.com/student/advice/transferring-my-study-abroad-university"
                },
                {
                  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7Hr_mICfvtFkc2o_fnFpi5gR9DhWiq1GGA&s",
                  title: "Life in Georgia",
                  excerpt: "Experience the vibrant culture and education system",
                  link: "https://example.com/blog2"
                },
                {
                  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLy48XpuUVUBXi-SsKLC8ldreJYdG-Yl8Wg&s",
                  title: "Medical Education",
                  excerpt: "Comprehensive guide to medical programs",
                  link: "https://example.com/blog3"
                }
              ].map((blog, index) => (
                <a 
                  key={index}
                  href={blog.link}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={blog.imageSrc}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 line-clamp-2 font-normal leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Read More 
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Student Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-gray-800">Student </span>
            <span className="text-red-600">Testimonials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                batch: "2023 Batch",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                quote:
                  "Studying MBBS in Georgia was the best decision of my life. The quality of education and practical exposure is exceptional.",
                rating: 5,
                location: "New Delhi",
              },
              {
                name: "Priya Patel",
                batch: "2022 Batch",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                quote:
                  "The faculty support and modern facilities have made my medical education journey amazing. Highly recommend!",
                rating: 5,
                location: "Mumbai",
              },
              {
                name: "Amit Kumar",
                batch: "2023 Batch",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                quote:
                  "Great learning environment with perfect blend of theoretical and practical knowledge.",
                rating: 5,
                location: "Bangalore",
              },
              {
                name: "Sneha Gupta",
                batch: "2022 Batch",
                image: "https://randomuser.me/api/portraits/women/4.jpg",
                quote:
                  "The international exposure and quality of medical education here is outstanding.",
                rating: 5,
                location: "Pune",
              },
              {
                name: "Vikram Singh",
                batch: "2023 Batch",
                image: "https://randomuser.me/api/portraits/men/5.jpg",
                quote:
                  "Excellent infrastructure and supportive faculty. The clinical training is incredible.",
                rating: 5,
                location: "Chandigarh",
              },
              {
                name: "Neha Sharma",
                batch: "2022 Batch",
                image: "https://randomuser.me/api/portraits/women/6.jpg",
                quote:
                  "The multicultural environment helped me grow both personally and professionally.",
                rating: 5,
                location: "Hyderabad",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-red-50"
              >
                <div className="flex items-center mb-4 relative">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover transform group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓ 
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-red-600 text-sm font-medium">
                      {testimonial.batch}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <blockquote className="relative mt-6">
                  <svg
                    className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 transform -translate-x-2 -translate-y-2 group-hover:text-red-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 italic pl-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Testimonials




