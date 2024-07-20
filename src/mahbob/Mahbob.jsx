import React from 'react';
import { data as mahbobs } from '../contants/_mahbob.json';

export default function Mahbob() {
  return (
    <div className='p-6 m-4 rounded-3xl border-2'>
      <h1 className=' flex justify-center font  text-2xl'>⭐محبوب ترین برند ها</h1>{' '}
      <div className=' flex justify-around  p-4 '>
        {mahbobs.map((mahbob) => {
          return (
            <div className='border-l-2  last:border-l-0 w-auto h-auto'>
              <a href='' className='px-5  flex justify-center' key={mahbob.id}>
                <img className='w-24 h-22' src={mahbob.img} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
