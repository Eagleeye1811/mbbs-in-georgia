import React from 'react';  
import { Wifi, ShieldCheck, Tv, BedDouble, Utensils, WashingMachine } from "lucide-react";
import studentLifeStyleImg from '../assets/studentlifestyle.jpg'; 
import CardItem from "../components/cardItem";
import { Link } from 'react-router-dom';

const StudentLifeStyle = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative h-[450px] mb-8">
        <img
          src="https://i.iheart.com/v3/re/assets.getty/60623a3aec85858a41dcf005?ops=contain(1480,0)"
          alt="Student's Life in Georgia"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-6xl font-bold text-white font-serif leading-tight">
                Student's Life
                <br />
                <span className="text-red-400">in Georgia</span>
              </h1>
              <p className="text-xl text-white/100 leading-relaxed">
               Studying in Georgia isn't just about earning a degree; it's about discovering who you are in a world far from home
              </p>
              <div className="flex space-x-8 pt-4">
                <div>
                  <p className="text-4xl font-bold text-white">20+</p>
                  <p className="text-red-400">Universities</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">50K+</p>
                  <p className="text-red-400">Int'l Students</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">95%</p>
                  <p className="text-red-400">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section (With Padding and Centered) */}
      <div className="w-full max-w-5xl mx-auto p-5 space-y-24"> {/* Changed space-y-8 to space-y-24 for more uniform spacing */}
        {/* Campus Features Section - Update the wrapper div */}
        <div className="py-20 px-4 bg-gradient-to-br from-white via-gray-100 to-white rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">Campus </span>
              <span className="text-red-600">Features</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Experience world-class facilities and amenities designed for your comfort and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Wifi className="w-10 h-10 text-red-500" />,
                title: "High-Speed Internet",
                description: "Available 24×7 campus-wide WiFi connectivity",
                color: "from-red-400 to-red-600"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
                title: "Campus Security",
                description: "24×7 security with modern surveillance systems",
                color: "from-green-400 to-green-600"
              },
              {
                icon: <Tv className="w-10 h-10 text-purple-500" />,
                title: "Entertainment",
                description: "Regular social activities and entertainment zones",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: <BedDouble className="w-10 h-10 text-blue-500" />,
                title: "Modern Comfort",
                description: "Well-furnished rooms with all modern amenities",
                color: "from-blue-400 to-blue-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.color}`}></div>
                <div className="p-8">
                  <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-500`}></div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Section - Update the wrapper div */}
        <div className="space-y-12 py-8"> {/* Changed space-y-6 to space-y-12 */}
          <div className="text-center mb-12 ">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">Accommodation </span>
              <span className="text-red-600">Facilities</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mt-4">
              Experience comfortable living with modern amenities and a supportive environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Facility Items */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <BedDouble className="w-10 h-10 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          Fully furnished rooms (On sharing basis)
        </p>
      </div>
    </div>

    <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <WashingMachine className="w-10 h-10 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          Laundry Facilities Available
        </p>
      </div>
    </div>

    <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <Utensils className="w-10 h-10 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          Indian Food Options Available
        </p>
      </div>
    </div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpIEr6MsmsYq_MKsOt2NlhHYatuiX5mNxEQ&s" 
        alt="Room 1" 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-xl font-semibold mb-2">Modern Rooms</h3>
        <p className="text-white/90 text-sm">Comfortable and well-maintained living spaces</p>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <img 
        src="https://www.ajc.com/resizer/v2/TEXTDI6N3PUBJ7JO47QOHQZUGM.jpg?auth=980e2763e21f71ebc6192739fc2c6e90cb12a37a7a6d2f21b0aef8805bb26c14&height=1000&smart=true" 
        alt="Room 2" 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-xl font-semibold mb-2">Student Housing</h3>
        <p className="text-white/90 text-sm">Safe and secure accommodation facilities</p>
      </div>
    </div>
          </div>
        </div>

        {/* Hospitals Section - Update the wrapper div */}
        <div className="space-y-12 py-8"> {/* Changed space-y-6 to space-y-12 */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">Hospitals in </span>
              <span className="text-red-600">Georgia</span>
            </h2>
          </div>
          
          <section className="bg-gray-100 rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video">
                    <img 
                      src={`https://source.unsplash.com/800x600/?hospital,medical/${index}`}
                      alt={`Hospital ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Hospital Name {index + 1}
                    </h3>
                    <p className="text-gray-600 text-base mb-4">
                      Modern facilities with state-of-the-art medical equipment
                    </p>
                    <button className="text-red-600 font-medium hover:text-blue-800 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Student's Lifestyle Section - Update the wrapper div */}
        <div className="space-y-12 py-8"> {/* Changed space-y-8 to space-y-12 */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">Student's </span>
              <span className="text-red-600">Lifestyle</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: "https://doingmoretoday.com/app/uploads/2021/12/UGA-3-edit.jpg",
                alt: "Campus Life",
                title: "Campus Activities"
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQK8VkfQclD8YZQ4l1R7iKZwCOXKzhwRzMw&s",
                alt: "Student Events",
                title: "Social Events"
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIj9GC5fHjPtTfOA8PX0mDEfWEzi5fkht2Q&s",
                alt: "Academic Life",
                title: "Academic Excellence"
              },
              {
                src: "https://res.cloudinary.com/dv0jqjrc3/image/fetch/ar_1.48,c_fill,f_auto,q_auto,w_768/https://www.pulte.com/-/media/static-picturepark-assets/uncategorized/2024/09/30/13/15/422410-1--gacollege-lifestylewebjpg.jpg",
                alt: "Student Housing",
                title: "Modern Living"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mt-8">
            Experience a vibrant student life in Georgia with modern facilities, cultural activities, and a supportive international community.
          </p>
        </div>

        {/* Related Blogs Section - Update the wrapper div */}
        <div className="space-y-12 py-8"> {/* Changed space-y-6 to space-y-12 */}
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">Related </span>
              <span className="text-red-600">Blogs</span>
            </h2>
          </div>

          {/* Blog Cards */}
          <section className="bg-gray-100 rounded-xl p-8">
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
                  excerpt: "Exploring the cultural experience and student community",
                  link: "https://example.com/blog2"
                },
                {
                  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLy48XpuUVUBXi-SsKLC8ldreJYdG-Yl8Wg&s",
                  title: "Medical Programs",
                  excerpt: "Comprehensive guide to medical courses and specializations",
                  link: "https://example.com/blog3"
                }
              ].map((blog, index) => (
                <a 
                  key={index}
                  href={blog.link}
                  className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
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
                    <p className="text-gray-600 text-base mb-4 line-clamp-2">
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
          </section>
        </div>

        {/* CTA Button - Add padding */}
        <div className= "flex justify-center py-8">
          <Link to="/testimonials">
            <button className="cursor-pointer group flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="text-lg font-medium">Read More</span>
              <svg 
                className="w-6 h-6 transform rotate-90 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* New Hero Image Section */}
      <div 
        className="w-full bg-cover bg-center relative" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: "450px" // Fixed height of 450px
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          {/* Content remains unchanged */}
        </div>
      </div>
    </>
  );
}

export default StudentLifeStyle;
