import React from 'react';
import slider from '../assets/img/slider.gif';
import '../story/story.css';
import { data as stories } from '../contants/_story.json';
export default function Story() {
  return (
    <div>
      <div className=' flex justify-around  p-6  pb-4  pt-5 gap-1 '>
        {' '}
        {stories.map((story) => {
          return (
            <a href='' key={story.id}>
              <img
                className='w-17 h-20 rounded-full ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-600 '
                src={story.img}
              />
              <h6 className='justify-center  font-bold flex text-xs p-1  '>{story.text}</h6>
            </a>
          );
        })}
      </div>

      <img
        className='w-screen h-96'
        src={
          'https://dkstatics-public.digikala.com/digikala-adservice-banners/d252a1866a08c3a12ccca97549d650f9af7fa3b3_1719999669.gif?x-oss-process=image?x-oss-process=image/format,webp'
        }
        alt='Logo'
      />
    </div>
  );
}
