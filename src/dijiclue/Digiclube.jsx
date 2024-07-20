import React from 'react';

export default function Digiclube() {
  return (
    <div>
      <div className='bg-sky-700 rounded-r-lg m-4 rounded-md'>
        <div className=''>
          {' '}
          <div className='flex justify-between'>
            <img
              className='m-4'
              src='https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg'
              alt=''
            />
            <div className='flex justify-end gap-2 p-1'>
              {' '}
              <img
                className='w-40 h-16 m-1   rounded-r-lg '
                src='https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.webp'
                alt=''
              />
              <img
                className='w-40 h-16 m-1   '
                src='https://www.digikala.com/statics/img/png/digiclub/missions.webp'
                alt=''
              />
              <img
                className='w-40 h-16 m-1  rounded-l-lg'
                src='https://www.digikala.com/statics/img/png/digiclub/awards.webp'
                alt=''
              />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
