import React from 'react';
import Card from './Card'

export default function CardList() {
  return (
   <div>
     <div className='flex gap-[170px] py-10 ml-[150px]' >
      <Card/>
      <Card/>
    </div>
    <div className='flex gap-[100] py-10 ml-[150px]' >
      <Card/>
      <Card/>
    </div>
   </div>
  )
}
