import React from 'react';
import { data as images } from '../contants/_image.json';
export default function image() {
  return (
    <div>
      <div className=' flex justify-around  p-6  pb-4  pt-5 gap-1 '>
        {' '}
        {images.map((Image) => {
          return (
            <a href='' key={Image.id}>
              <img className='w-14 h-14 rounded-lg  gap-7' src={Image.img} />
              <div className='text-center flex items-center'>
                <h6 className=' font-bold flex text-xs text-center'>{Image.text}</h6>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
