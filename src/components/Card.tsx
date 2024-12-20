import React from 'react';
import { CardData } from '../constant/data';

export default function Card({ item }: { item: CardData }) {
  return (
    <div >
      <div >
        <h1 className="text-center text-lg p-2">{item.title}</h1>
        <img
          className="w-full h-56 object-cover"
          src={item.image}
          alt="Card"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-gray-600 mt-2">{item.desc}</p>
          <button className="mt-4 w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}