import React from 'react';
import image from '../assets/images/Card/1.png'



export default function Card() {
  return (
    <div>
       
        <div className="max-w-[500px]  bg-white borderrounded-lg shadow-md overflow-hidden">
        <h1 className='text-center'>Bridal Wedding Makeup</h1>
      <img
        className="w-1000 h-[450px] aspect-square object-cover"
        src={image}
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a short description of the image. It provides context and
          details about what the card is about.
        </p>
        <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
    </div>
  )
}
