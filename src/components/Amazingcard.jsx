import React from 'react';

export default function Amazingcard({ amazing }) {
  return (
    <div className='w-40 h-auto first:rounded-r-lg last:rounded-l-lg p-2 bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img className='w-full  object-cover  text-sm ' alt='Card Image' src={amazing.img} />
      <div className='p-1'>
        <h6 className='text-lg'> {amazing.name} </h6>
        <h6 className='text-gray-600'>{amazing.information}</h6>
        <div className=' flex justify-between items-center mt-4 text-sms   '></div>
      </div>
    </div>
  );
}
