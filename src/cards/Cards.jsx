import React from 'react';

export default function Cards() {
  return (
    <div>
      <div className='flex justify-around '>
        <div class='w-40 h-1/2 p-1 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-s-lg'>
          <img
            src={
              'https://dkstatics-public.digikala.com/digikala-products/d49e0729e01a8b4301f1d616cdade41789ad5205_1709364522.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
            class='w-full  object-cover rounded-t-lg'
            alt='Card Image'
          />

          <div class='p-2'>
            <h2 class='text-xl  '>ناتینگ فون 2 </h2>
            <p class='text-gray-600'>رم 8 و 128 گیگ حافظه داخلی</p>
            <div class='flex justify-between items-center mt-2'></div>
          </div>
        </div>
        <div>
          <div class='w-40   p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
            <img
              src={
                'https://dkstatics-public.digikala.com/digikala-products/10b3ddf4ed5afd60ba74e4d5e2c1866d79716c7f_1675155251.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
              }
              class='w-full h-1/2  object-cover rounded-t-lg'
              alt='Card Image'
            />

            <div class='p-2'>
              <h2 class='text-xl  '> موتورولا e2</h2>
              <p class='text-gray-600'>رم 4 و 128 گیگ حافظه داخلی</p>
              <div class='flex justify-between items-center mt-2'></div>
            </div>
          </div>
        </div>
        <div class='w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            class='w-full object-cover rounded-t-lg'
            alt='Card Image'
            src={
              'https://dkstatics-public.digikala.com/digikala-products/3dbc56ad9ae7501ac16731a111ae465dd33e8404_1719228862.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
          />
          <div class='p-1'>
            <h2 class='text-xl  '>نوکیا قدیمی</h2>
            <p class='text-gray-600'>حافظه 16 و تک سیمکارت خور</p>
            <div class='flex justify-between items-center mt-4'></div>
          </div>
        </div>
        <div class='w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            class='w-full  object-cover rounded-t-lg'
            alt='Card Image'
            src={
              'https://dkstatics-public.digikala.com/digikala-products/34a0afd6eb9eacbf51bbe484e4f978ef3e4065a8_1693659067.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
          />
          <div class='p-1'>
            <h2 class='text-xl font-extralight '> موبایل دکمه ای</h2>
            <p class='text-gray-600'>حافظه 32 و 2 سیمکارت خور</p>
            <div class='flex justify-between items-center mt-4'></div>
          </div>
        </div>
        <div class='w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            class='w-full  object-cover rounded-t-lg'
            alt='Card Image'
            src={
              'https://dkstatics-public.digikala.com/digikala-products/5039e2fbccf6c2058d5d30531c4b0b1f0258b653_1653644013.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
          />
          <div class='p-1'>
            <h2 class='text-xl '> هندسفری سیمی</h2>
            <p class='text-gray-600'>هندسفری سیمی با گارنتی </p>
            <div class='flex justify-between items-center mt-4'></div>
          </div>
        </div>
        <div class='w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            class='w-full object-cover rounded-t-lg'
            alt='Card Image'
            src={
              'https://dkstatics-public.digikala.com/digikala-products/001a96c9e436fef968fb71b1a59226711e03acb0_1712072503.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
          />
          <div class='p-1'>
            <h6 class='text-xl   '>هدفون بلوتوثی</h6>
            <p class='text-gray-600'>هدفون بلوتوثی با گارانتی 3 ماهه</p>
            <div class='flex justify-between items-center mt-4'></div>
          </div>
        </div>
        <div class='  w-40 h-1/2 p-2 bg-white  shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-r-xl'>
          <img
            class='w-full  object-cover rounded-t-lg text-sm '
            alt='Card Image'
            src={
              'https://dkstatics-public.digikala.com/digikala-products/908c3f6922ec35a73446b774320791ea67eab2f9_1698223162.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
            }
          />
          <div class='p-1'>
            <h6 class='text-lg'>هندسفری بلوتوثی</h6>
            <h6 class='text-gray-600'>هندسفری بلوتوٍثی مارک سامسونگ</h6>
            <div class='flex justify-between items-center mt-4 text-sms'></div>
          </div>
        </div>{' '}
        <div className='flex flex-col'>
          <img
            className='w-24  '
            src={'https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg'}
            alt='Logo'
          />

          <img
            className='gap-14'
            src={'https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg'}
            alt='Logo'
          />
          <a href=''>
            {' '}
            <p className='text-center p-4 text-red-50 font-bold'>بیشتر</p>
          </a>
        </div>
      </div>
    </div>
  );
}
