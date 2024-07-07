import React from 'react';
import logo from '../assets/img/logo.svg';
import '../header/header.css';
import ms from '../assets/img/header.gif';
export default function Header() {
  return (
    <div>
      <img src={ms} alt='Logo' />
      <nav class='w-full shadow-xl border-red-700 dark:bg-red-900 flex flex-wrap items-center justify-between  p-4 '>
        <a href='https://flowbite.com/' class='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={logo} alt='Logo' class='h-6' />
          <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
        </a>
        <div class='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            type='button'
            class='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            ورود|ثبت نام
          </button>
          <button
            data-collapse-toggle='navbar-cta'
            type='button'
            class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-cta'
            aria-expanded='false'
          >
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
                class='block py-2 px-3 md:p-0 text-amber-900 bg-red-900 rounded md:bg-transparent md:text-zinc-950 md:dark:text-zinc-950'
                aria-current='page'
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href='#'
                class=' font-bold block py-2 px-3 md:p-0 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-950 md:dark:hover:text-zinc-950 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                موبایل
              </a>
            </li>
            <li>
              <a
                href='#'
                class=' font-bold block py-2 px-3 md:p-0 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-900 md:dark:hover:text-zinc-950 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                لوازم جانبی
              </a>
            </li>
            <li>
              <a
                href='#'
                class=' font-bold block py-2 px-3 md:p-0 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-900 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                کنسول بازی
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
