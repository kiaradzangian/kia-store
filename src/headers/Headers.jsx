import React from 'react';

export default function Headers() {
  return (
    <div className='shadow-xl'>
      <nav class='bg-white border-gray-200 dark:bg-gray-900  '>
        <div class='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 '>
          <a href='https://flowbite.com' class='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              className='p-4'
              src='https://www.digikala.com/statics/img/svg/logo.svg'
              class='h-6'
              alt='Flowbite Logo'
            />

            <form className='m-4'>
              <label
                for='search'
                class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div class='relative'>
                <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='search'
                  class='block w-96 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search'
                  required
                />
              </div>
            </form>
          </a>
          <div class='flex items-center space-x-6 rtl:space-x-reverse'>
            <button class=' text-sm  text-black border border-slate-300 px-2 py-1 rounded-lg transition duration-200 ease-in-out focus:outline-none'>
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
      <nav class='bg-gray-50 dark:bg-gray-700'>
        <div class='max-w-screen-xl px-4 py-3 mx-auto'>
          <div class='flex items-center'>
            <ul class='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li>
                <a
                  href='#'
                  class='text-gray-900 dark:text-white hover:underline'
                  aria-current='page'
                >
                  شگفت انگیز
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-900 dark:text-white hover:underline'>
                  سوپر مارکت
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-900 dark:text-white hover:underline'>
                  کارت هدیه
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-900 dark:text-white hover:underline'>
                  تخفیف و پیشنهادات
                </a>
              </li>
              <h1>|</h1>
              <li>
                <a href='#' class='text-gray-900 dark:text-white hover:underline'>
                  سوالی دارید
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-900 dark:text-white hover:underline'>
                  در دیجی کالا بفروشید
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
