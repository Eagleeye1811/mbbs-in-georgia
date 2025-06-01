import React, { useEffect, useRef } from "react";
import "./AboutGeorgia.css"
import { useState } from "react";

import {
  Mountain,
  Landmark,
  Wine,
  Building2,
  Trees,
  Flame,
  BookOpen,      // For education
  Banknote,      // For economy/money
  School,        // For universities
  Globe,         // For nature
  Handshake,     // For hospitality
  Plane,
  Home
} from "lucide-react";

import tibilisi from "../assets/tibilisi.jpg"
import tibilisi1 from "../assets/tibilisi1.jpeg"
import tibilisi2 from "../assets/tibilisi2.jpeg"
import tibilisi3 from "../assets/tibilisi3.jpeg"
import tibilisi4 from "../assets/tibilisi4.jpeg"
import tibilisi5 from "../assets/tibilisi5.jpeg"
import tibilisi6 from "../assets/tibilisi6.jpg"
import tibilisi7 from "../assets/tibilisi7.jpg"

const tbilisiImages = [tibilisi, tibilisi1, tibilisi2, tibilisi3, tibilisi4, tibilisi5, tibilisi6, tibilisi7];

import georgia from "../assets/georgia.jpg"
import khinkali from "../assets/khinkali.jpg"
import khachapuri from "../assets/khachapuri.webp";
import lobio from "../assets/lobio.webp";
import churchkhela from "../assets/churchkhela.jpg";
import chicken from "../assets/chicken.jpg"
import pkhali from "../assets/pkhali.jpeg"

import mountain from "../assets/kazbeki_mountain.jpeg"
import cave from "../assets/cave.jpg"
import beach from "../assets/beach.webp"
import mtskheta from "../assets/mtskheta.jpg"
import borjomi from "../assets/borjomi.jpg"
import caucasus from "../assets/caucasus.jpg"
import cave2 from "../assets/cave2.jpg"
import cave3 from "../assets//cave3.jpeg"
import ananuri from "../assets/ananuri.jpg"



const AboutGeorgia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cuisineSectionRef = useRef(null);

  // Remove the auto-advance timer for the Tbilisi image carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === tbilisiImages.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // Parallax tilt effect for cuisine cards
  useEffect(() => {
    const cards = cuisineSectionRef.current
      ? cuisineSectionRef.current.querySelectorAll('.famous-cuisine-tilt')
      : [];
    function handleTilt(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Increased tilt from 10deg to 18deg
      const rotateX = ((y - centerY) / centerY) * 25;
      const rotateY = ((x - centerX) / centerX) * -25;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      // Lighter shadow
      card.style.boxShadow = "0 8px 24px 0 rgba(220,38,38,0.10)";
    }
    function resetTilt(e) {
      const card = e.currentTarget;
      card.style.transform = "";
      card.style.boxShadow = "";
    }
    cards.forEach(card => {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
      card.addEventListener('blur', resetTilt);
    });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleTilt);
        card.removeEventListener('mouseleave', resetTilt);
        card.removeEventListener('blur', resetTilt);
      });
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header
        className="relative overflow-hidden p-0 mb-6 min-h-[750px] bg-cover bg-center pt-20" // Increased pt-20 for more top space
        style={{
          backgroundImage: `url(${georgia})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" /> {/* Lowered z-index to z-0 */}

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-12 min-h-[750px]">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-white drop-shadow-2xl mb-4 animate-fade-in-down">
              Georgia <span className="text-white">–</span> More Than a <span className="text-red-500">Destination</span>
            </h1>
            <p className="text-lg md:text-xl text-white font-semibold animate-fade-in-up">
              Discover the magic of Georgia: where ancient culture, breathtaking landscapes, and warm hospitality await you.
            </p>
          </div>
        </div>
      </header>
      {/* Introduction */}
      <section className="p-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">Introduction</h2>
        <p>
          Discover Georgia, a gem nestled between Europe and Asia. Explore its stunning mountains,
          historic landmarks, vibrant cities, and warm hospitality. A destination where every moment
          becomes a memory.
        </p>
      </section>

      {/* Highlights */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-red-500 tracking-wide">Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 font-bold">
          <div className="bg-red-100 text-gray-900 shadow-[0_8px_15px_rgba(220,38,38,0.3)] p-8 rounded-3xl flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_15px_25px_rgba(220,38,38,0.5)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Mountain className="w-12 h-12 text-red-600 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Scenic Mountains</p>
          </div>

          <div className="bg-gray-200 text-gray-900 shadow-[0_8px_15px_rgba(107,114,128,0.3)] p-8 rounded-3xl flex flex-col items-center text-center 
                          hover:scale-105 hover:shadow-[0_15px_25px_rgba(107,114,128,0.5)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Landmark className="w-12 h-12 text-red-700 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Historic Sites</p>
          </div>

          <div className="bg-red-300 text-gray-900 shadow-[0_8px_15px_rgba(185,28,28,0.3)] p-8 rounded-3xl flex flex-col items-center text-center 
                          hover:scale-105 hover:shadow-[0_15px_25px_rgba(185,28,28,0.6)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Wine className="w-12 h-12 text-red-800 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Wine Culture</p>
          </div>

          <div className="bg-gray-300 text-gray-900 shadow-[0_8px_15px_rgba(75,85,99,0.3)] p-8 rounded-3xl flex flex-col items-center text-center 
                          hover:scale-105 hover:shadow-[0_15px_25px_rgba(75,85,99,0.5)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Building2 className="w-12 h-12 text-red-500 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Modern Cities</p>
          </div>

          <div className="bg-red-100 text-gray-900 shadow-[0_8px_15px_rgba(244,63,94,0.3)] p-8 rounded-3xl flex flex-col items-center text-center 
                          hover:scale-105 hover:shadow-[0_15px_25px_rgba(244,63,94,0.5)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Trees className="w-12 h-12 text-red-400 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Nature Reserves</p>
          </div>

          <div className="bg-gray-100 text-gray-900 shadow-[0_8px_15px_rgba(156,163,175,0.3)] p-8 rounded-3xl flex flex-col items-center text-center 
                          hover:scale-105 hover:shadow-[0_15px_25px_rgba(156,163,175,0.6)] transition-transform duration-300 ease-in-out cursor-pointer">
            <Flame className="w-12 h-12 text-red-600 mb-4 drop-shadow-md" />
            <p className="font-semibold text-xl">Thermal Baths</p>
          </div>
        </div>
      </section>


      {/* Tbilisi Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-left text-gray-800 tracking-wide">Tbilisi</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p>
              the capital and largest city of Georgia, is nestled in the South Caucasus region, where the continents of Europe and Asia converge. Strategically located on the banks of the Kura River and encircled by scenic hills and mountains, Tbilisi enjoys a dramatic natural setting that enhances its timeless appeal. The city’s origin dates back to the 5th century when it was founded by King Vakhtang I Gorgasali, who is considered one of the most revered figures in Georgian history. Over the centuries, Tbilisi has been a significant crossroads of trade and culture, and its location made it a target for various empires. As a result, the city has experienced periods of rule by the Persians, Arabs, Mongols, Ottomans, and Russians, each leaving their mark on its identity, culture, and infrastructure.

            </p>
            <p className="mt-4">
              Tbilisi’s rich history is reflected in its diverse architecture and culture, blending Eastern and Western styles. The city features ancient Orthodox churches, medieval fortresses, Art Nouveau buildings, Soviet-era blocks, and modern landmarks like the Bridge of Peace. 
            </p>
          </div>

          {/* Slideshow Section */}
          <div className="w-full md:w-1/2 relative flex items-center justify-center">
            {/* 3D Carousel */}
            <div className="relative w-full h-[380px] flex items-center justify-center overflow-visible">
              <div
                className="w-[440px] h-[300px] flex items-center justify-center relative"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                }}
              >
                <img
                  src={tbilisiImages[currentIndex]}
                  alt={`Tbilisi ${currentIndex + 1}`}
                  className="rounded-3xl shadow-2xl border-4 border-white object-cover transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    boxShadow: "0 14px 40px 0 rgba(0,0,0,0.45)",
                    filter: "none",
                    opacity: 1,
                    transition:
                      "all 0.7s cubic-bezier(0.77,0,0.175,1), filter 0.7s cubic-bezier(0.77,0,0.175,1), opacity 0.7s cubic-bezier(0.77,0,0.175,1)"
                  }}
                  draggable={false}
                />
              </div>
              {/* Prev Button - Gray Gradient */}
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? tbilisiImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-500 via-gray-200 to-gray-400 bg-opacity-90 hover:bg-opacity-100 rounded-full p-2.5 shadow-xl z-50 border-2 border-white transition-transform duration-300"
                aria-label="Previous"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <svg width="28" height="28" fill="none" stroke="#374151" strokeWidth="3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#6b7280" strokeWidth="2" fill="#fff"/>
      <path d="M14.5 8l-4 4 4 4" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
              </button>
              {/* Next Button - Red Gradient */}
              <button
                onClick={() => setCurrentIndex((prev) => (prev === tbilisiImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-red-200 via-red-400 to-red-500 bg-opacity-90 hover:bg-opacity-100 rounded-full p-2.5 shadow-xl z-50 border-2 border-white transition-transform duration-300"
                aria-label="Next"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <svg width="28" height="28" fill="none" stroke="#991b1b" strokeWidth="3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#991b1b" strokeWidth="2" fill="#fff"/>
      <path d="M9.5 8l4 4-4 4" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-50">
                {tbilisiImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
                      idx === currentIndex ? "bg-red-500 scale-125 shadow-lg" : "bg-white bg-opacity-60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    tabIndex={0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4">
          Today, Tbilisi stands as a vibrant cultural hub and cosmopolitan center in the region. It is home to numerous theaters, art galleries, museums, and cultural festivals that celebrate both its national heritage and its global connections. The city's nightlife is lively and diverse, with a mix of traditional Georgian taverns and trendy clubs that cater to a growing international audience. Food and wine are integral to the city’s identity—Georgian cuisine is known for its bold flavors and warm hospitality, while the country’s wine tradition is among the oldest in the world. Its Old Town, with narrow streets, colorful balconies, and historic sulphur baths, highlights the city's mix of tradition and innovation, showcasing Tbilisi’s unique charm and resilience. 
        </p>
      </section>


      {/* Famous Cuisine */}
      <section className="p-6 max-w-6xl mx-auto" ref={cuisineSectionRef}>
        <h2 className="text-3xl font-extrabold mb-6 text-left text-gray-800 tracking-wide">
          Famous <span className="text-red-500">Cuisine</span>
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 px-1 snap-x">
          {[
            {
              dish: "Khinkali",
              desc: "These are savory meat dumplings, traditionally boiled and eaten with the broth. They are often served with a dipping sauce and are a staple in Georgian cuisine. ",
              img: khinkali
            },
            {
              dish: "Adjarian Khachapuri: ",
              desc: "This is a unique variation of Khachapuri, shaped like a boat and filled with cheese, butter, and a fried egg. It's a delicious and visually appealing dish.  ",
              img: khachapuri
            },
            {
              dish: "Lobio",
              desc: "Lobio is a hearty red bean stew, often served with a walnut sauce and herbs. It's a vegetarian staple and is a good source of protein and fiber. ",
              img: lobio
            },
            {
              dish: "Churchkhela",
              desc: "Churchkhela is a popular Georgian snack made by dipping strings of nuts—usually walnuts or hazelnuts—into concentrated grape juice thickened with flour, then drying them to form a chewy, naturally sweet treat often called “Georgian candy.”",
              img: churchkhela
            },
            // --- Add your new cards below ---
            {
              dish: "Shkmeruli",
              desc: "This traditional Georgian dish features crispy chicken simmered in a rich, creamy garlic sauce, offering a bold and comforting flavor that's a favorite in Georgian cuisine.",
              img: chicken // Replace with your image import or URL
            },
            {
              dish: "Pkhali",
              desc: "Pkhali is a dish made from various vegetables, such as spinach, beets, or carrots, cooked with a walnut sauce. It's a refreshing and flavorful vegetarian option. ",
              img: pkhali // Replace with your image import or URL
            }
          ].map((item, index) => (
            <div
              key={index}
              className="famous-cuisine-tilt min-w-[270px] max-w-xs bg-gradient-to-b from-gray-50 to-gray-300 rounded-2xl shadow-lg p-0 flex flex-col items-center snap-center cursor-pointer transition-transform duration-300"
              tabIndex={0}
              style={{ flex: "0 0 270px" }}
            >
              <div className="w-full h-48 rounded-t-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.dish}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-bold text-lg mb-2">{item.dish}</h3>
                <p className="font-semibold text-gray-800 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-left text-gray-800 tracking-wide">Tourism <span className="text-red-500">Attractions</span></h2>
        <div className="grid md:grid-cols-3 gap-8 font-semibold">
          {[
            {
              title: "Kazbegi Mountains",
              desc: "Located in the northern part of Georgia near the Russian border, Mount Kazbek is one of the highest peaks in the Caucasus Mountains, rising to 5,047 meters. It is a dormant stratovolcano wrapped in myth and legend—Georgian folklore says it’s where Prometheus was chained as punishment by the gods. The nearby town of Stepantsminda (formerly Kazbegi) is the gateway for tourists and trekkers. The Gergeti Trinity Church, perched dramatically on a hill at 2,170 meters with the snow-covered Kazbek in the background.",
              image: mountain,
              color: "text-gray-800"
            },
            {
              title: "Uplistsikhe Caves",
              desc: "Uplistsikhe, meaning “Lord’s Fortress,” is an extraordinary archaeological site carved out of rock by ancient inhabitants over 3,000 years ago. The city was a vital cultural and political center in ancient Georgia, blending pagan and Christian traditions as evidenced by its temples and early churches. Visitors can explore ancient streets, wine cellars, an amphitheater, and even a pagan temple. The site’s rocky terraces and spectacular views over the Mtkvari River make it a must-visit for history lovers and adventurers.",
              image: cave,
              color: "text-gray-800"
            },
            {
              title: "Batumi Seaside",
              desc: "Batumi, often called the “Pearl of the Black Sea,” is Georgia’s leading resort city. The Batumi Seaside Boulevard, stretching along the coast for over 7 kilometers, is full of palm trees, sculptures, musical fountains, and art installations. It's ideal for sunset walks, cycling, and enjoying the seaside vibe. The pebble beaches are clean and popular in summer, while the modern skyline, with buildings like the Alphabet Tower and dancing fountains, reflects Batumi’s dynamic development. With casinos, restaurants, and cultural events, Batumi blends beach relaxation with urban energy.",
              image: beach,
              color: "text-gray-800"
            },
            {
              title: "Mtskheta",
              desc: "Just 20 km from Tbilisi, Mtskheta is one of the oldest and most sacred cities in Georgia and a UNESCO World Heritage Site. It was the capital of the early Georgian Kingdom of Iberia and the place where Christianity was proclaimed the state religion in the 4th century. Its centerpiece is the Svetitskhoveli Cathedral, a masterpiece of Georgian medieval architecture believed to house the robe of Christ. Jvari Monastery, standing on a hilltop overlooking the confluence of the Aragvi and Mtkvari rivers, offers a spiritual and scenic experience. Visiting Mtskheta is like stepping back into Georgia’s ancient spiritual and cultural roots.",
              image: mtskheta,
              color: "text-gray-800"
            },
            {
              title: "Borjomi National Park",
              desc: "Borjomi National Park, located in central Georgia, is famous for its mineral-rich springs that have been used for therapeutic purposes for centuries. The park covers a vast area of mixed forest, rivers, and mountain landscapes, offering excellent hiking, birdwatching, and picnic spots. The Borjomi mineral water brand, exported globally, originates here. The park’s natural beauty combined with its health and wellness significance makes it a popular retreat for both tourists and locals.",
              image: borjomi, // Replace with your image
              color: "text-gray-800"
            },
            {
              title: "Prometheus Cave (Tskaltubo)",
              desc: "Prometheus Cave, located near the spa town of Tskaltubo, is one of Georgia’s most impressive natural wonders. The cave stretches for several kilometers, featuring stunning stalactites, stalagmites, underground rivers, and waterfalls. The well-lit tourist pathways guide visitors through the mysterious chambers, where the interplay of natural formations and artificial lighting creates a magical atmosphere. The cave is also an ecological treasure trove with diverse flora and fauna living in its microclimate.",
              image: cave2, // Replace with your image
              color: "text-gray-800"
            },
            {
              title: "Caucasus Mountains",
              desc: "The Caucasus Mountains stretch across northern Georgia, forming a stunning natural barrier between Europe and Asia. Home to towering peaks like Mount Kazbek and Mount Shkhara, the range offers breathtaking scenery and is perfect for trekking, skiing, and mountaineering. Regions like Svaneti and Kazbegi showcase ancient villages, medieval towers, and rich biodiversity. With their mix of adventure, history, and natural beauty, the Caucasus are among Georgia’s top attractions.",
              image: caucasus, // Replace with your image
              color: "text-gray-800"
            },
            {
              title: "Vardzia Cave Monastery",
              desc: "Vardzia is an awe-inspiring medieval cave city carved into the cliffs of the Erusheti Mountain in southern Georgia. Founded in the 12th century by Queen Tamar, it served as a refuge from invading armies and as a monastic center. The complex once housed over 2,000 monks and included churches, living quarters, libraries, and tunnels. Exploring Vardzia’s labyrinthine caves offers a glimpse into Georgia’s rich religious and cultural history amidst breathtaking natural surroundings.",
              image: cave3, // Replace with your image
              color: "text-gray-800"
            },
            {
              title: "Ananuri Fortress",
              desc: "Located on the banks of the Aragvi River, about 70 km from Tbilisi, the Ananuri Fortress is a fine example of medieval Georgian architecture. Built in the 16th and 17th centuries, it served as a strategic stronghold for the Aragvi dynasty. The complex includes churches, watchtowers, and stone walls, all set against the beautiful Zhinvali Reservoir with its striking blue waters. With a mix of history, scenic views, and ancient charm, it’s a popular stop for tourists traveling to Kazbegi and offers a peaceful glimpse into Georgia’s feudal past.",
              image: ananuri, // Replace with your image
              color: "text-gray-800"
            }
          ].map((place, index) => (
            <div key={index} className="relative group perspective">
              <div className="relative w-full h-[420px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-200 shadow-md rounded-2xl overflow-hidden flex flex-col">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-64 object-cover"
                    style={{ minHeight: 220, maxHeight: 260 }}
                  />
                  <div className="flex-1 flex items-center justify-center p-4">
                    <h3 className={`text-xl font-bold text-center ${place.color}`}>{place.title}</h3>
                  </div>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-500 rounded-2xl shadow-md transform rotate-y-180 p-6 flex items-center justify-center">
                  <h3 className="text-base text-center text-white">{place.desc}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Visit Georgia */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-16 mt-10 text-center relative overflow-hidden">
        <h2 className="text-5xl font-extrabold mb-10 text-gray-800 drop-shadow-lg tracking-tight">
          Why <span className="text-red-500">Georgia?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12 px-4">
          {[
  {
    title: (
      <>
        Growing <span className="text-red-500">Economy</span>
      </>
    ),
    desc: "Georgia is one of the fastest-growing economies in the region, offering new opportunities for students and professionals.",
    icon: <Banknote className="w-14 h-14 mx-auto text-green-500" />
  },
  {
    title: (
      <>
        Top European & American <span className="text-red-500">Education</span>
      </>
    ),
    desc: "Experience the best of European and American educational systems in world-recognized institutions.",
    icon: <BookOpen className="w-14 h-14 mx-auto text-blue-500" />
  },
  {
    title: (
      <>
        Affordable Tuition & <span className="text-red-500">Living</span>
      </>
    ),
    desc: "Study at world-class universities with affordable tuition fees and a low cost of living.",
    icon: <Home className="w-14 h-14 mx-auto text-emerald-400" />
  },
  {
    title: (
      <>
        World-Class <span className="text-red-500">Universities</span>
      </>
    ),
    desc: "Georgia is home to globally ranked universities with modern campuses and international faculty.",
    icon: <School className="w-14 h-14 mx-auto text-yellow-500" />
  },
  {
    title: (
      <>
        Stunning <span className="text-red-500">Nature</span>
      </>
    ),
    desc: "From the Caucasus mountains to the Black Sea, Georgia offers breathtaking landscapes for every traveler.",
    icon: <Globe className="w-14 h-14 mx-auto text-blue-400" />
  },
  {
    title: (
      <>
        Warm <span className="text-red-500">Hospitality</span>
      </>
    ),
    desc: "Georgians are famous for their hospitality—feel at home with friendly locals and vibrant traditions.",
    icon: <Handshake className="w-14 h-14 mx-auto text-pink-400" />
  }
].map((reason, idx) => (
  <div
    key={idx}
    className="group bg-white bg-opacity-90 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-4 hover:ring-red-100"
  >
    <div className="mb-4">
      {reason.icon}
    </div>
    <h3 className="font-bold text-xl mb-2 text-gray-800">{reason.title}</h3>
    <p className="text-gray-600">{reason.desc}</p>
  </div>
))}
        </div>
        <a
          href="/HowToApply"
          className="inline-block mt-4 px-10 py-4 bg-gradient-to-r from-red-400 to-red-400 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
        >
          Start Your Georgian <span className="text-gray-900">Journey</span>
          <Plane className="inline-block ml-2 mb-1 w-6 h-6 text-gray-900 animate-none" />
        </a>
      </section>
    </div>
  );
};

export default AboutGeorgia;