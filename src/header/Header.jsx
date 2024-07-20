import React from 'react';
import logo from '../assets/img/logo.svg';
import '../header/header.css';
import h from '../assets/img/2.webp';
export default function Header() {
  return (
    <div>
      <img src={h} alt='Logo' />
      <nav class='w-full   border-red-700 dark:bg-red-900 flex flex-wrap items-center justify-between  p-4 '>
        <a
          href='https://flowbite.com/'
          class=' flex justify-end flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img src={logo} alt='Logo' class='h-6' />

          <span class=' flex justify-end self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
        </a>
        <div class='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3'>
          <button
            type='button'
            class=' flex justify-end text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            ورود|ثبت نام
          </button>
          <br></br>

          <button
            data-collapse-toggle='navbar-cta'
            type='button'
            class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-cta'
            aria-expanded='false'
          >
            <form class='max-w-md mx-auto'>
              <label
                for='default-search'
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
                  id='default-search'
                  class='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search Mockups, Logos...'
                  required
                />
                <button
                  type='submit'
                  class='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Search
                </button>
              </div>
            </form>

            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-inherit'
          id='navbar-cta'
        >
          <ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700'>
            <li>
              <a
                href='#'
                class=' flex-row-reverse flex justify-end font-bold block py-2 px-3 md:p-0 text-amber-900 bg-red-900 rounded md:bg-transparent md:text-zinc-950 md:dark:text-zinc-950'
                aria-current='page'
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex justify-end  font-bold block py-2 px-3 md:p-0 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-950 md:dark:hover:text-zinc-950 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                موبایل
              </a>
            </li>
            <li>
              <a
                href='#'
                class=' font-bold block py-2 px-3 md:p-0 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black-900 md:dark:hover:text-zinc-950 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                لوازم جانبی
              </a>
            </li>
            <li>
              <a
                href='#'
                class=' font-bold block py-2 px-3 md:p-0 text-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black-200 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                کنسول بازی
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <footer class='bg-white rounded-lg  dark:bg-gray-800 shadow-md '>
        <div class='w-100 mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between '>
          <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400 '>
            IR <a href='https://flowbite.com/' class='hover:underline'></a>
            شهر خود را انتخاب کنید لطفا
          </span>
          <ul class='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6 p-4'>
                در دیجی کالا بفروشید
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-2'>
                سوالی دارید
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-2 p-2'>
                |
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-2 p-2'>
                سوپر مارکت
              </a>
            </li>

            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                کارت هدیه
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                تخفیف و پیشنهادات
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                سوالی دارید
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                در دیجی کالا بفروشید
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
