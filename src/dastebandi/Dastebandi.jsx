import React from 'react';
import { data as dastebandis } from '../contants/_dastebandi.json';
export default function Dastebandi() {
  return (
    <div>
      <h1 className='flex justify-center font-bold text-xl'>خرید بر اساس دسته بندی </h1>
      <div className=' grid grid-cols-8 gap-8 pb-8 pt-8 p-24  '>
        {' '}
        {dastebandis.map((dastebandi) => {
          return (
            <a href='' key={dastebandi.id}>
              <img className='w-24 h-24 m-2' src={dastebandi.img} />
              <h6 className='justify-center  font-bold flex text-xs p-1  '>{dastebandi.text}</h6>
            </a>
          );
        })}
      </div>

      <div className='flex justify-between w-1/2  p-2 m-3 gap-4'>
        <img
          className='rounded-3xl'
          src='https://dkstatics-public.digikala.com/digikala-adservice-banners/5698c224f4b8eb11b50d4d0f3a708ce38408a5cc_1720010149.jpg?x-oss-process=image/quality,q_95/format,webp'
          alt=''
        />
        <img
          className='rounded-3xl'
          src='https://dkstatics-public.digikala.com/digikala-adservice-banners/50142ee4443ad4b1e13cfef444958bc6e6a3b6c2_1720009488.jpg?x-oss-process=image/quality,q_95/format,webp'
          alt=''
        />
      </div>
    </div>
  );
}
