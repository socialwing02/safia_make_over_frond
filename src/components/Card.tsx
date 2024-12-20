import React from 'react';
import { CardData } from '../constant/data';



export default function Card({item}:{item:CardData}) {
  return (
    <div>
       
        <div className="max-w-[500px]  bg-white borderrounded-lg shadow-md overflow-hidden">
        <h1 className='text-center'>{item.title}</h1>
      <img
        className="w-1000 h-[450px] aspect-square object-cover"
        src={item.image}
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 mt-2">
          {item.desc}
        </p>
        <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
    </div>
  )
}
