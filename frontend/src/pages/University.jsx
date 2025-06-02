import React, { useState } from "react"
import CardItem from "../components/cardItem";

const stats = [
  { name: 'Universities', value: '12+' },
  { name: 'Years Experience', value: '10+' },
  { name: 'Students Placed', value: '5000+' },
  { name: 'Visa Success Rate', value: '100%' },
]

export default function University() {
    const [active, setActive] = useState("all");
  
    const buttonClasses = (type) =>
      `px-4 py-2 !rounded-full border cursor-pointer ${
        active === type
          ? "bg-red-500 text-white"
          : "bg-gray-400 text-white hover:bg-gray-500"
    }`;
  
    return (
      <>
        {/* Fixed height hero section with proper structure */}
        <div className="relative isolate overflow-hidden bg-gray-900" style={{ height: "450px" }}>
          <img
            alt="University background"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />
          
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[36.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[36.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          
          {/* Content container - properly placed inside the hero section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                MCI/NMC Approved <span className="text-red-500">Universities</span>
              </h2>
              <p className="mt-4 text-lg font-medium text-pretty text-gray-300">
                Explore top-ranked medical universities in Georgia offering world-class education 
                with international recognition and affordable fees.
              </p>
              
              {/* Stats section */}
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col gap-1 bg-white/5 p-3 rounded-lg">
                    <dd className="text-2xl font-semibold tracking-tight text-white">{stat.value}</dd>
                    <dt className="text-sm text-gray-300">{stat.name}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <section className="p-1 mt-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 ">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search Universities"
                className="border border-gray-300 rounded-full px-4 py-2 w-full pl-10 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>

            <button className="bg-red-500 text-white px-4 py-2 !rounded-full hover:bg-red-600 transition-colors">
              Search
            </button>

            <div className="flex gap-2 flex-wrap">
              <button
                className={buttonClasses("all")}  
                onClick={() => setActive("all")}
              >
                All Universities
              </button>
              <button
                className={buttonClasses("public")}
                onClick={() => setActive("public")}
              >
                Public
              </button>
              <button
                className={buttonClasses("private")}
                onClick={() => setActive("private")}
              >
                Private
              </button>
              <button
                className={buttonClasses("tbilisi")}
                onClick={() => setActive("tbilisi")}
              >
                Tbilisi
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
        </section>
      </>
    )
}