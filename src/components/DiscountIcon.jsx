import React from 'react';

export default function DiscountIcon({ discount }) {
  return (
    <div className='relative'>
      <img className='w-20 h-20 rounded-full' src={discount.img} alt='' />
      <div className=' absolute bottom-1 right-0  bg-red-500 rounded-xl px-1.5'>
        <span className='text-red-50 rounded-xl text-sm/3'>{discount.discount}</span>
      </div>
    </div>
  );
}
