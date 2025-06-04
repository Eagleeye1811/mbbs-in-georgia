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

      {/* Main Content Section */}
<div className="w-full max-w-5xl mx-auto p-5 space-y-16">

  {/* Full-width Campus Features Section */}
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-4 rounded-3xl">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">
        <span className="text-gray-800">Campus </span>
        <span className="text-red-600">Features</span>
      </h2>
      <p className="text-gray-600 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
        Experience world-class facilities and amenities designed for your comfort and success
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-red-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <BedDouble className="w-12 h-12 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          Fully furnished rooms (On sharing basis)
        </p>
      </div>
    </div>

    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-red-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <WashingMachine className="w-12 h-12 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
        </div>
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          Laundry Facilities Available
        </p>
      </div>
    </div>

    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center p-6 space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-red-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <Utensils className="w-12 h-12 text-red-500 relative z-10 transform group-hover:rotate-6 transition-transform duration-500" />
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
        src="https://ulcdn.universityliving.com/cms/c0napcTSn7CGCHuQG12lNXXWvMFMtH.jpg?format=auto&width=1920" 
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
        <div className="space-y-12 py-8 "> {/* Changed space-y-6 to space-y-12 */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">Hospitals in </span>
              <span className="text-red-600">Georgia</span>
            </h2>
          </div>
          
          {/* Replace the existing hospital card section with this new animated version */}
<section className="bg-gray-100  rounded-xl p-8  ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        name: "N.Kipshidze Central Clinical Hospital",
        description: "Tbilisi, Georgia and was founded in 1930",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUMUX8-0LWxRbzs0oMeRVe7B67-UxKKCVp0eldzGDkIjCWeJgjRuWgmzAsdet-95xsdM&usqp=CAU",
        features: [
          "Leading hospital under Tbilisi State Medical University",
          "Offers multi-specialty medical services with modern equipment",
          "Serves as a major clinical training center for medical students"
        ]
      },
      {
        name: "Clinical Medicine Research Institute",
        description: "Tbilisi, Georgia and was founded in 1991",
        image: "https://toduaclinic.ge/storage/photos/3/64e86adea8b2e.jpg",
        features: [
          "Top medical and research center in Georgia",
           "Founded by Prof. Gia Todua",
           "Advanced diagnostics and imaging"

        ]
      },
      {
        name: "Tbilisi Central Hospital",
        description: "Tbilisi, Georgia and was founded in 1955",
        image: "https://geoassistance.ge/wp-content/uploads/2023/06/1561638664_providers-4.png",
        features: [
          "International-standard equipment",
          "Modern, multidisciplinary hospital",
          "140 beds, emergency & inpatient care"

        ]
      },
      {
        name: "National Center of surgery",
        description: "Tbilisi, Georgia and was founded in 1946",
        image: "https://avatars.mds.yandex.net/get-altay/11004775/2a0000018c7c71eb3eecf4e79f1820c28e88/orig",
        features: [
         "Modern equipment and technologies",
        "Multidisciplinary medical center",
        "Advanced diagnostics (MRI, CT, etc.)"
        ]
      },
      {
        name: "Republican Hospital",
        description: "Tbilisi, Georgia and was founded in 1946",
        image: "https://georgiatoday.ge/wp-content/uploads/2024/02/respublikuri.jpg",
        features: [
         "24/7 medical care and research focus",
         "Multidisciplinary state hospital",
        "700-bed capacity (planned expansion)"
        ]
      },
      {
        name: "New Hospital",
        description: "Tbilisi, Georgia and was founded in 2011",
        image: "https://www.newhospitals.ge/res/upload/about/1258b7ff9ffb5c95cfb4185a4f07e9c9.jpg",
        features: [
          "Provides emergency and critical care",
         "285 beds, European standards",
         "KTQ accredited"
        ]
      },
      {
        name: "Iashvili Children's Hospital",
        description: "Tbilisi, Georgia and was founded in 1965",
        image: "https://vian.health/static/media/202403261204-iashvili-mothers-and-childrens-hospital-batumi-1920-axali.webp",
        features: [
          "Strong international training collaborations",
          "Georgia’s only third-level pediatric referral center",
          "260 beds with 24/7 emergency care"
        ]
      },
      {
        name: "Evex Clinics georgia",
        description: "Tbilisi, Georgia and was founded in 2012",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50dpJe1AbWxKTbmj-TNQ42UuBJW7LCJQttrjmjv_3oWd7fKEFff7w8B8LWw00PdvNrJg&usqp=CAU",
        features: [
          "Largest healthcare network in Georgia with 78 clinics",
         "Offers cardiology, oncology, surgery, pediatrics, and more",
         "Modern technology and skilled staff"
        ]
      },
      {
        name: "Gagua Clinic",
        description: "Tbilisi, Georgia and was founded in 1997",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1B_BMZC7upiiBHcik97REuuxkzelAYXQKmvQiI5HaP2zCncJ2Se6lulu_gyGXX2MlpY&usqp=CAU",
        features: [
          "Georgia’s first private maternity hospital",
         "100 beds, including NICU and operating theaters",
         "Specializes in obstetrics, IVF, pediatrics, and surgery"
        ]
      },
      {
        name: "AdventHealth Gordon",
        description: "Calhoun, Georgia and was founded in 1935",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPJgtieWbrrNDmSnDkNJaFP7bha725LvwHx-THx7UcgCt7y1-NPkNPWyP743rSoHbm8M&usqp=CAU",
        features: [
          "69-bed acute-care hospital",
         "Part of AdventHealth system",
        "24/7 emergency services"
        ]
      },
      {
        name: "Chatuge Regional Hospital",
        description: "Hiawassee, Georgia and was founded in 1951",
        image: "https://uniongeneralhealthsystem.com/wp-content/uploads/2023/06/nav-chatuge.jpg",
        features: [
          "25-bed Critical Access Hospital",
          "Part of Union General Health System",
          "24/7 emergency care with helicopter transport"
        ]
      },
      {
        name: "East Georgia Regional Medical Center",
        description: "Statesboro, Georgia and was founded in 2000",
        image: "https://media.licdn.com/dms/image/v2/C4E1BAQFtycoojuggZA/company-background_1536_768/company-background_1536_768/0/1584107929877?e=2147483647&v=beta&t=CHu_m8Zu7KBcFDfurhY5FB5cvk6rGl5SH-YuVzo-84A",
        features: [
          "150-bed acute-care hospital",
          "24/7 emergency department",
          "Specialties: cardiology, orthopedics, women’s health, neurology"
        ]
      }
    ].map((hospital, index) => (
      <div key={index} className="group h-[350px] perspective-1000">
        <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front of Card */}
          <div className="absolute inset-0 backface-hidden">
            <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {hospital.name}
                </h3>
                <p className="text-gray-600 text-base">
                  {hospital.description}
                </p>
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="h-full bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{hospital.name}</h3>
                <ul className="space-y-3">
                  {hospital.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        </div>

        {/* Student's Lifestyle Section - Update the wrapper div */}
        <div className="space-y-12 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gray-800">Student's </span>
              <span className="text-red-600">Lifestyle</span>
            </h2>
          </div>

          {/* Update grid columns here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "https://doingmoretoday.com/app/uploads/2021/12/UGA-3-edit.jpg",
                alt: "Campus Life",
                title: "Campus life"
              },
              {
                src: "https://www.ajc.com/resizer/v2/SXVE5S7YJK5GXRR2ETHO3VJNCY.jpg?auth=9f5959b0cf82b75205094e3b11c45c1e3c9e9a248446dc106d1949dda69edc04&width=790&height=440&smart=true",
                alt: "Student Events",
                title: "Advanced classes"
              },
              {
                src: "https://admissionoffice.ge/wp-content/uploads/2020/05/Caucasus-University-Medicine-Student.jpg",
                alt: "Academic Life",
                title: "Academic Excellence"
              },
              {
                src: "https://lcuniversity.edu/wp-content/uploads/2025/02/Wed11.jpg",
                alt: "Campus Activities",
                title: "Cultural Integration"
              },
              {
                src: "https://outreach.uga.edu/wp-content/uploads/2025/04/Wight-Internship_Pulaski_Taylor-Regional-Hosp.jpg",
                alt: "Cultural Events",
                title: "Internship opportunities"
              },
              {
                src: "https://www.ticketleap.au/wp-content/uploads/2024/01/62a8e9a50f19b73012512a91_college-students-hanging-out-on-campus.jpg",
                alt: "Student Life",
                title: "Campus Community"
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
          
          
        </div>
      </div>

      
    </>
  );
}

export default StudentLifeStyle;
