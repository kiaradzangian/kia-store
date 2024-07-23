import React from 'react';

export default function Amazingcard({ amazing }) {
  return (
    <div class='w-40 h-auto first:rounded-r-lg last:rounded-l-lg p-2 bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img class='w-full  object-cover  text-sm ' alt='Card Image' src={amazing.img} />
      <div class='p-1'>
        <h6 class='text-lg'> {amazing.name} </h6>
        <h6 class='text-gray-600'>{amazing.information}</h6>
        <div class=' flex justify-between items-center mt-4 text-sms   '></div>
      </div>
    </div>
  );
}
