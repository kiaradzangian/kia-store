import React from 'react';
import { data as amazinglist } from '../contants/_amazingcard.json';
import Amazingcard from '../components/Amazingcard';
export default function Cards() {
  return (
    <div>
      <div className='flex justify-around '>
        <div className='flex flex-col'>
          <div className='p-2'>
            <img
              className='w-24'
              src={'https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg'}
              alt='Logo'
            />

            <img
              className=''
              src={'https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg'}
              alt='Logo'
            />
            <a href=''>
              {' '}
              <p className='text-center p-4 text-red-50 font-bold'>بیشتر</p>
            </a>
          </div>
        </div>
        <div className='flex gap-2 flex-row '>
          {amazinglist.map((amazing) => {
            return <Amazingcard amazing={amazing} key={amazing.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
