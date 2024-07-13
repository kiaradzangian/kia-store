import React from 'react';

export default function Amazingcard() {
  return (
    <div class=' rounded-l-lg  w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
      <img
        class='w-full  object-cover  text-sm '
        alt='Card Image'
        src={
          'https://dkstatics-public.digikala.com/digikala-products/908c3f6922ec35a73446b774320791ea67eab2f9_1698223162.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        }
      />
      <div class='p-1'>
        <h6 class='text-lg'>هندسفری بلوتوثی</h6>
        <h6 class='text-gray-600'>هندسفری بلوتوٍثی مارک سامسونگ</h6>
        <div class=' rounded-l-lg flex justify-between items-center mt-4 text-sms   '></div>
      </div>
    </div>
  );
}
