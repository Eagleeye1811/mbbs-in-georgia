import React from 'react'
import globeImage from '../assets/photo.jpg'; 
import CardItem from "../components/cardItem";


const Testimonials = () => {
  return (
    <div className ="bg - blue">

{/* Header */}
<header className="relative w-full ">
  {/* Background Image */}
  <img
     src="https://visavalley.com/sites/default/files/2024-12/overseas_education_consultants_in_kerala1.jpg"
    alt="Education Globe"
    className="w-full h-full object-cover"
  />

{/* Overlay with Text */}
<div className="absolute inset-0 bg-opacity-40 flex items-center justify-end text-right px-20">
  <div className="max-w-2xl">
    <h1 className="text-black text-6xl font-bold font-serif mb-4">
      Real Stories <br /> from Georgia
    </h1>
    <p className="text-black text-xl font-semibold">
      Join thousands of Indian students transforming their dreams into global success stories — start your journey in Georgia today.
    </p>
  </div>
</div>

</header>
{/* Main Content */}
<main className="max-w-7xl mx-auto px-6 md:px-45 ">
  {/* Recent Blogs */}
  <h2 className="text-3xl font-semibold italic py-9">Recent Blogs</h2>
  <section className="bg-blue-100 py-9 px-7 rounded-xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <CardItem
        imageSrc="https://assets.studies-overseas.com/Banner1_404x262_65ffa3bfeb.png"
        link="https://www.timeshighereducation.com/student/advice/transferring-my-study-abroad-university"
      />
      <CardItem imageSrc="/blog2.jpg" link="https://example.com/blog2" />
      <CardItem imageSrc="/blog3.jpg" link="https://example.com/blog3" />
    </div>
  </section>

  {/* Student Testimonials */}
<section className="mt-15 px-2 py-1 h-200 w-160">
  <h2 className="text-3xl font-semibold italic py-3">Student Testimonials</h2>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
    <div className="bg-blue-100 h-50 w-150 rounded-xl" />
  </div>
</section>


</main>
 </div>
  )
}

export default Testimonials




      