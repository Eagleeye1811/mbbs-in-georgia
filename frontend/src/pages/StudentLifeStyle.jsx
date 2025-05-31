import React from 'react';  
import { Wifi, ShieldCheck, Tv, BedDouble, Utensils } from "lucide-react";
import studentLifeStyleImg from '../assets/studentlifestyle.jpg'; 
import CardItem from "../components/cardItem";
import { Link } from 'react-router-dom';

const StudentLifeStyle = () => {
  return (
    <>
      {/* Header Section (Full Width, No Padding) */}
      <div className="w-full relative">
        <img
          src={studentLifeStyleImg}
          alt="Student's Life in Georgia"
          className="w-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center space-y-2">
            {/* Optional overlay text */}
          </div>
        </div>
      </div>

      {/* Main Content Section (With Padding and Centered) */}
      <div className="w-full max-w-5xl mx-auto p-5 space-y-8">
        {/* Features Section */}
        <div className="grid grid-cols-2 gap-5 text-center">
          <div className="space-y-6">
            <Wifi className="mx-auto text-2xl " />
            <p>Available 24×7</p>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="mx-auto" />
            <p>24×7 Security</p>
          </div>
          <div className="space-y-2">
            <Tv className="mx-auto" />
            <p>Social Activities</p>
          </div>
          <div className="space-y-2">
            <BedDouble className="mx-auto" />
            <p>Access to all comforts</p>
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-italicbold text-black-700">Accommodation Facilities</h1>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-xl font-semibold">Fully furnished rooms (On a sharing basis)</li>
            <li className="text-xl font-semibold">Wi-Fi Connectivity for study and communication</li>
            <li className="text-xl font-semibold">Indian Food Options (Some hostels provide Indian menu facilities)</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpIEr6MsmsYq_MKsOt2NlhHYatuiX5mNxEQ&s" alt="Room 1" width={370} height={270} className="rounded-l" />
            <img src="https://www.ajc.com/resizer/v2/TEXTDI6N3PUBJ7JO47QOHQZUGM.jpg?auth=980e2763e21f71ebc6192739fc2c6e90cb12a37a7a6d2f21b0aef8805bb26c14&height=1000&smart=true" alt="Room 2" width={350} height={250} className="rounded-l" />
          </div>
        </div>

        {/* Hospitality Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-italicbold">Hospitals in Georgia</h2>
          <section className="bg-blue-100  py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-2">
              {[...Array(6)].map((_, index) => <CardItem key={index} />)}
            </div>
          </section>
        </div>

        {/* Student's Lifestyle Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-italicbold">Student's Lifestyle</h2>
          <div className="grid grid-cols-2 gap-7">
            <img src="https://doingmoretoday.com/app/uploads/2021/12/UGA-3-edit.jpg" alt="Lifestyle 1" width={350} height={250} className="rounded-l" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQK8VkfQclD8YZQ4l1R7iKZwCOXKzhwRzMw&s" alt="Lifestyle 2" width={350} height={250} className="rounded-l" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIj9GC5fHjPtTfOA8PX0mDEfWEzi5fkht2Q&s" width={350} height={250} className="rounded-l" />
            <img src="https://res.cloudinary.com/dv0jqjrc3/image/fetch/ar_1.48,c_fill,f_auto,q_auto,w_768/https://www.pulte.com/-/media/static-picturepark-assets/uncategorized/2024/09/30/13/15/422410-1--gacollege-lifestylewebjpg.jpg" alt="Lifestyle 4" width={350} height={250} className="rounded-l" />
          </div>
        </div>

        {/* Related Blogs Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-italicbold">Related Blogs</h2>
          <section className="bg-blue-100  py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-2">
              <CardItem
                imageSrc="https://assets.studies-overseas.com/Banner1_404x262_65ffa3bfeb.png"
                link="https://www.timeshighereducation.com/student/advice/transferring-my-study-abroad-university"
              />
              <CardItem
                imageSrc="/blog2.jpg"
                link="https://example.com/blog2"
              />
              <CardItem
                imageSrc="/blog3.jpg"
                link="https://example.com/blog3"
              />
            </div>
          </section>
        </div>

        {/* CTA Button */}
        <Link to="/testimonials">
          <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg">
            Read More
          </button>
        </Link>
      </div>
    </>
  );
}

export default StudentLifeStyle;
