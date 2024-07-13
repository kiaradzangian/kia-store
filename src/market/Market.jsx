import React from 'react';
import { data as discounts } from '../contants/_discountIcon.json';
import DiscountIcon from '../components/DiscountIcon';
export default function Market() {
  return (
    <div>
      {' '}
      <div className='flex justify-between'>
        {' '}
        <div className='flex justify-center '>
          {' '}
          <img
            className='w-16 h-16 m-3'
            src={'https://www.digikala.com/statics/img/png/amazing/fresh.webp'}
            alt=''
          />
          <img
            className='p-2 gap-2 w-60'
            src={'https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg'}
            alt=''
          />{' '}
          <button class=' animate-bounce rounded-3xl m-7 p-2  bg-green-600 text-white font-bold h-8 w-28 rounded inline-flex items-center'>
            <span className='text-xs m-3 gap-4  '> تا50% تخفیف</span>
          </button>
        </div>
        <div className=' flex justify-between gap-2'>
          {discounts.map((discount) => {
            return <DiscountIcon discount={discount} key={discount.id} />;
          })}{' '}
          <button class='  rounded-3xl  m-6 p-2 bg-white hover:bg-white text-green-600 font-bold h-8 w-28 rounded inline-flex items-center'>
            <span className='gap-2 p-4 text-xs '>بیش 40 کالا</span>
          </button>
        </div>
      </div>
    </div>
  );
}
