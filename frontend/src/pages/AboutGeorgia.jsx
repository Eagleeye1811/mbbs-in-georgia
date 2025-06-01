import React from "react";
import "./AboutGeorgia.css"

import {
  Mountain,
  Landmark,
  Wine,
  Building2,
  Trees,
  Flame
} from "lucide-react";


import flag from "../assets/flag2.jpg"
import khinkali from "../assets/khinkali.jpg"
import khachapuri from "../assets/khachapuri.webp";
import lobio from "../assets/lobio.webp";
import churchkhela from "../assets/churchkhela.jpg";

import mountain from "../assets/kazbeki_mountain.jpeg"
import cave from "../assets/cave.jpg"
import beach from "../assets/beach.webp"
import mtskheta from "../assets/mtskheta.jpg"

import tbilisi from "../assets/tbilisi.jpg"


const AboutGeorgia = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="relative overflow-hidden p-0 mb-6 min-h-[500px]">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-200 opacity-90 z-0" />
        {/* Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-8 py-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-white drop-shadow-lg mb-2 animate-fade-in-down">
              Georgia <span className="text-white">–</span> More Than a Destination
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl animate-fade-in-up font-bold">
              Discover the magic of Georgia: where ancient culture, breathtaking landscapes, and warm hospitality await you.
            </p>
          </div>
          <img
            src={flag}
            alt="Georgia Flag"
            className="h-44 w-88 md:h-100 md:w-200 rounded-xl border-4 border-none ml-0 md:ml-8 mt-6 md:mt-0 animate-fade-in"
          />
        </div>
      </header>

      {/* Introduction */}
      <section className="p-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Discover Georgia, a gem nestled between Europe and Asia. Explore its stunning mountains,
          historic landmarks, vibrant cities, and warm hospitality. A destination where every moment
          becomes a memory.
        </p>
      </section>

      {/* Highlights */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold">
          <div className="bg-[#D8EFFF] text-[#000000] shadow-lg  p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Mountain className="w-10 h-10 text-[#0A58CA] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Scenic Mountains</p>
          </div>

          <div className="bg-[#FFE5CC] text-[#000000] shadow-lg  p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Landmark className="w-10 h-10 text-[#D72638] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Historic Sites</p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-200 text-[#000000] shadow-lg  p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Wine className="w-10 h-10 text-[#9D174D] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Wine Culture</p>
          </div>

          <div className="bg-[#F9D3D3] text-[#000000] shadow-lg  p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Building2 className="w-10 h-10 text-[#B45309] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Modern Cities</p>
          </div>

          <div className="bg-[#ddf9ef] text-[#000000] shadow-lg  p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Trees className="w-10 h-10 text-[#059669] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Nature Reserves</p>
          </div>

          <div className="bg-[#E7E4F2] text-[#000000] shadow-lg p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 hover: transition-all duration-300 ease-in-out cursor-pointer">
            <Flame className="w-10 h-10 text-[#EA580C] mb-3 drop-shadow-md" />
            <p className="font-semibold text-lg">Thermal Baths</p>
          </div>

        </div>
      </section>

      {/* Tbilisi Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tbilisi</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p>
              Tbilisi, the capital and largest city of Georgia, is nestled in the South Caucasus region, where the continents of Europe and Asia converge. Strategically located on the banks of the Kura River and encircled by scenic hills and mountains, Tbilisi enjoys a dramatic natural setting that enhances its timeless appeal. The city’s origin dates back to the 5th century when it was founded by King Vakhtang I Gorgasali, who is considered one of the most revered figures in Georgian history. Over the centuries, Tbilisi has been a significant crossroads of trade and culture, and its location made it a target for various empires. As a result, the city has experienced periods of rule by the Persians, Arabs, Mongols, Ottomans, and Russians, each leaving their mark on its identity, culture, and infrastructure.
            </p>
            <p className="mt-4">
              Tbilisi’s rich history is reflected in its diverse architecture and culture, blending Eastern and Western styles. The city features ancient Orthodox churches, medieval fortresses, Art Nouveau buildings, Soviet-era blocks, and modern landmarks like the Bridge of Peace. 
            </p>
          </div>
          <img
            src = {tbilisi}
            height={40}
            width={20}
            alt="Tbilisi"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-4">
          Today, Tbilisi stands as a vibrant cultural hub and cosmopolitan center in the region. It is home to numerous theaters, art galleries, museums, and cultural festivals that celebrate both its national heritage and its global connections. The city's nightlife is lively and diverse, with a mix of traditional Georgian taverns and trendy clubs that cater to a growing international audience. Food and wine are integral to the city’s identity—Georgian cuisine is known for its bold flavors and warm hospitality, while the country’s wine tradition is among the oldest in the world. Its Old Town, with narrow streets, colorful balconies, and historic sulphur baths, highlights the city's mix of tradition and innovation, showcasing Tbilisi’s unique charm and resilience. 
        </p>
      </section>

      {/* Famous Cuisine */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Famous Cuisine</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              dish: "Khinkali",
              desc: "Juicy dumplings filled with spiced meat.",
              img: khinkali
            },
            {
              dish: "Khachapuri",
              desc: "Cheese-filled bread, often topped with an egg.",
              img: khachapuri
            },
            {
              dish: "Lobio",
              desc: "Bean stew spiced with coriander and garlic.",
              img: lobio
            },
            {
              dish: "Churchkhela",
              desc: "Traditional snack made from nuts and grape juice.",
              img: churchkhela
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={item.img}
                  alt={item.dish}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.dish}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tourism Attractions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-semibold">
          {[
            {
              title: "Kazbegi Mountains",
              desc: "Kazbegi Mountains in northeastern Georgia include Mount Kazbek (5,047 m), a high dormant volcano. Stepantsminda is the main town. The Gergeti Trinity Church offers great mountain views. The area is popular for hiking and stunning scenery.",
              image: mountain
            },
            {
              title: "Uplistsikhe Caves",
              desc: "Uplistsikhe is an ancient rock-hewn cave city in eastern Georgia, dating back to the early Iron Age. Once a major political and religious center, it features tunnels, temples, and dwellings carved into the cliffs. It offers a unique glimpse into pre-Christian Georgian civilization.",
              image: cave
            },
            {
              title: "Batumi Seaside",
              desc: "Batumi is a coastal city on the Black Sea, known for its beaches, modern architecture, and lively nightlife. Its seaside boulevard, botanical garden, and cable car rides offer fun for tourists. A great destination for a summer vacation in Georgia.",
              image: beach
            },
            {
              title: "Mtskheta",
              desc: "Mtskheta is one of Georgia’s oldest cities and a UNESCO World Heritage Site. It was once the capital of the ancient Kingdom of Iberia and is home to key religious landmarks like the Svetitskhoveli Cathedral and Jvari Monastery. It's considered the spiritual heart of Georgia.",
              image: mtskheta
            }
          ].map((place, index) => (
            <div key={index} className="relative group perspective">
              <div className="relative w-full h-64 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{place.title}</h3>
                  </div>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-blue-100 rounded-lg shadow-md transform rotate-y-180 p-4 overflow-y-auto">
                  <h3 className="text-sm">{place.desc}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Visit Georgia */}
      <section className="bg-blue-50 p-6 mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Why Visit Georgia?</h2>
        <p>
          Whether you're an adventure seeker, a history buff, or a foodie, Georgia offers something for everyone.
          Come for the mountains, stay for the culture.
        </p>
      </section>
    </div>
  );
};

export default AboutGeorgia;