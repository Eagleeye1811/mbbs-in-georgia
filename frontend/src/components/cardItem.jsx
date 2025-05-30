import React from 'react'

const CardItem = () => (
  <div className="bg-white rounded-lg shadow-md flex flex-col h-full min-h-[500px] ">
    <svg
      aria-label="Placeholder: Image cap"
      className="w-full min-h-[40] rounded-t-lg object-cover"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <title>Placeholder</title>
      <rect width="100" height="100" fill="#868e96" />
      <text
        x="50"
        y="50"
        fill="#dee2e6"
        dy=".3em"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Image cap
      </text>
    </svg>

    <div className="p-4 flex-grow">
      <h5 className="text-xl font-semibold mb-2">Card title</h5>
      <p className="text-gray-700 text-base">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
    </div>

    <div className="px-4 py-2 bg-gray-100 rounded-b-lg">
      <small className="text-gray-500">Last updated 3 mins ago</small>
    </div>
  </div>
)

export default CardItem
