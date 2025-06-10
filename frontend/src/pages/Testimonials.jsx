import React from "react";
import CardItem from "../components/cardItem";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Fixed to remove white gap */}
      <div className="hero-section">
        <img
          src="/Testimonial/georgia.webp"
          alt="Student Testimonials"
          className="hero-image"
        />
        {/* Keep the existing gradient overlay */}
        <div className="hero-overlay bg-gradient-to-r from-black/10 to-transparent"></div>

        <div className="hero-content">
          <div className="hero-content-wrapper">
            <h1 className="hero-title ">
              Student <span className="hero-accent">Testimonials</span>
            </h1>
            <p className="hero-subtitle">
              Hear directly from our students about their experiences studying
              MBBS in Georgia
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the testimonials content */}
      <div className="container mx-auto px-4 py-12">
        {/* Recent Blogs */}
        <section className="mb-12">
          <div className="bg-gray-100  py-10 px-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-5xl font-bold mb-6 text-center">
              <span className="text-gray-800">Recent </span>
              <span className="text-red-500">Blogs</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  imageSrc: "/Testimonial/nurses.webp",
                  title: "MBBS in GEORGIA",
                  excerpt:
                    "Georgia is a top choice for Indian medical students....",
                  link: "https://www.kg2pgeduhub.com/blogs/mbbs-in-georgia/",
                },
                {
                  imageSrc: "/Testimonial/university.webp",
                  title: "The Ultimate Guide to Study MBBS in Georgia",
                  excerpt:
                    "Are you dreaming of becoming a doctor and exploring the world?...",
                  link: "https://www.globaladmissions.com/blog/the-ultimate-guide-to-study-mbbs-in-georgia",
                },
                {
                  imageSrc: "/Testimonial/doctors.webp",
                  title: "Indian Students in Georgia: Experiences & Advice",
                  excerpt:
                    "Studying abroad is a thrilling experience, but it also...",
                  link: "https://www.acadfly.com/blogs/indian-students-in-georgia-experience",
                },
              ].map((blog, index) => (
                <a
                  key={index}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={blog.imageSrc}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-500 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 line-clamp-2 font-normal leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-red-500 font-medium mt-auto">
                      <span className="align-middle">Read More</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform align-middle"
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
        <div className="bg-gray-100 mt-25 py-10 px-8 rounded-2xl shadow-xl border border-gray-200">
          <section className="mb-12">
            <h2 className="text-5xl font-bold mb-8 text-center">
              <span className="text-gray-800">Student </span>
              <span className="text-red-500">Testimonials</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ritu Panjwani",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                  quote:
                    "Sr counseling is the best, Hardik Sir will give you the best guidance possible based on your GRE, toefl and finances, the preparation for visa interviews is great as well.",
                },
                {
                  name: "Pruthvi Mulik",
                  image: "https://randomuser.me/api/portraits/women/2.jpg",
                  quote:
                    "It was very pleasant and smooth experience with SR counseling in this Covid situation. I highly recommend to join them for your bright future",
                },
                {
                  name: "Ameeta",
                  image: "https://randomuser.me/api/portraits/men/3.jpg",
                  quote:
                    "Excellent counseling by Hardik sir. The staff is good in assistance and quick response..",
                },
                {
                  name: "Shivani Darekar",
                  image: "https://randomuser.me/api/portraits/women/4.jpg",
                  quote:
                    "I honestly don’t know where to start, but I just want to say the biggest thank you to Neerav sir, Ravi sir, and Sanghini ma’am for helping me realise my true potential.",
                },
                {
                  name: "Kesha Dalal",
                  image: "https://randomuser.me/api/portraits/men/5.jpg",
                  quote:
                    "My experience with SR Consultancy for my study abroad process was the best, and I couldn't be more satisfied with their expertise and support for filing the visa. ",
                },
                {
                  name: "Bhavesh Mhatre",
                  image: "https://randomuser.me/api/portraits/women/6.jpg",
                  quote:
                    "The SR counselling service played a crucial role in simplifying the complex US university admission process for me. ",
                },
                {
                  name: "Tanisha Luhadia",
                  image: "https://randomuser.me/api/portraits/men/7.jpg",
                  quote:
                    "I had an amazing experience with SR Counselling. Nirav Sir and Sangini Ma'am provided me with invaluable assistance throughout my counselling journey.",
                },
                {
                  name: "Nitya Patel",
                  image: "https://randomuser.me/api/portraits/women/8.jpg",
                  quote:
                    "My experience with SR COUNSELLING has been amazing. The journey between LOR and last mock interview was fabulous and all the staff over their were so helpful.",
                },
                {
                  name: "Jeel Patel",
                  image: "https://randomuser.me/api/portraits/men/9.jpg",
                  quote:
                    "Sr counselling helps me through my entire going to us journey. Specially sangini mam and ravi sir helps me the most for my university admission to visa proration seamlessly.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
                transition-all duration-700 transform hover:-translate-y-2 
                hover:bg-gradient-to-br from-gray-200 via-gray-300 to-purple-100 
                animate-fade-in-up cursor-pointer h-full flex flex-col min-h-[3px]"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex items-center mb-4 relative overflow-visible">
                    <div className="relative z-10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-indigo-500 object-cover 
                      transform group-hover:scale-110 transition-all duration-700 
                      group-hover:rotate-6 bg-white"
                        style={{
                          boxShadow: "0 4px 16px 0 rgba(80,80,80,0.10)",
                        }}
                      />
                      <div
                        className="absolute -bottom-1 -right-1 bg-gradient-to-r from-gray-600 to-purple-600 rounded-full p-1.5 
                      transform group-hover:scale-110 transition-all duration-500 z-20"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.084 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.166.865.25 1.336.25 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.437.695.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-red-600 text-sm font-medium">
                        {testimonial.batch}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <blockquote
                    className="relative mt-6 transform transition-all duration-500 
                  group-hover:translate-x-2"
                  >
                    <svg
                      className="absolute -top-2 -left-2 h-8 w-8 text-gray-300 
                    transform -translate-x-2 -translate-y-2 
                    group-hover:text-purple-200 transition-colors duration-500 
                    group-hover:rotate-12"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p
                      className="text-gray-600 italic pl-6 leading-relaxed 
                    group-hover:text-gray-700 transition-colors transform 
                    group-hover:scale-105 duration-500"
                    >
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
