import React from 'react';

const Headers = () => {
  return (
    <div className='shadow-xl'>
      <nav className='bg-white border-gray-200 dark:bg-gray-900  '>
        <div className='flex flex-wrap justify-between items-center  max-w-screen-xl p-2 '>
          <a
            href='https://flowbite.com'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              className='p-4 h-14'
              src='https://www.digikala.com/statics/img/svg/logo.svg'
              alt=''
            />

            <form className='m-4'>
              <label
                form='search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  ></svg>
                </div>
                <input
                  type='search'
                  id='search'
                  className='block w-96 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search'
                  required
                />
              </div>
            </form>
          </a>
          <div className='flex items-center space-x-6 rtl:space-x-reverse  justify-end'>
            <button className=' text-sm  text-black border px-2 py-1 rounded-lg transition duration-200 ease-in-out focus:outline-none justify-end'>
              ورود | ثبت نام
            </button>

            <img
              className='w-10'
              src='https://freepek.ir/wp-content/uploads/2022/11/shopping-cart.gif'
              alt=''
            />
          </div>
        </div>
      </nav>
      <nav className='bg-gray-50 dark:bg-gray-700'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <ul className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li>
                <a
                  href='/product'
                  className='text-gray-900 dark:text-white hover:underline '
                  aria-current='page'
                >
                  شگفت انگیز
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-900 dark:text-white hover:underline'>
                  سوپر مارکت
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-900 dark:text-white hover:underline'>
                  کارت هدیه
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-900 dark:text-white hover:underline'>
                  تخفیف و پیشنهادات
                </a>
              </li>
              <h1>|</h1>
              <li>
                <a href='#' className='text-gray-900 dark:text-white hover:underline'>
                  سوالی دارید
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-900 dark:text-white hover:underline'>
                  در دیجی کالا بفروشید
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
