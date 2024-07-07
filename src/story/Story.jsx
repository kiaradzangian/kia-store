import React from 'react';
import slider from '../assets/img/slider.gif';
import '../story/story.css';
import { data as stories } from '../contants/_story.json';
export default function Story() {
  return (
    <div>
      <br></br>
      <div className='w-full flex justify-around'>
        {' '}
        {stories.map((story) => {
          return (
            <a href='' key={story.id}>
              <img className='w-16 h-16 rounded-full ring-2 ring-red-500 ' src={story.img} />
              <h6 className='text-xs '>{story.text}</h6>
            </a>
          );
        })}
        {/* <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500 '
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/8955c4254095864d0ffa27110f1b4fca72894654_1719417647.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '> کیک ویکتوریا </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/022d87c984fc87d1b76c5e63fbb3b5c8192a39fe_1719135962.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '> گوشی سامسونگ </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/e24c144c71a1275bb6d319f844246996fee80ad0_1718531258.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>انواع لوازم خانگی </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/ce00df0803092d76e1dc9afd3dae8096a6938c78_1706389267.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>انواع لوازم طبی </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/43d2be938b6cb6fb66ad3fd6dcae78502bf5ff75_1705913577.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '> برسی پاوربانک</h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/b8a525517da60ab00b21f60fdfba50c13c1d07d8_1705836910.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>
            حرفه ای ترین <br></br>دوربین ها{' '}
          </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/6e646788c940c75f6f2d6a9e885471face02ff22_1705776010.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>انواع نخ لباس </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/3e9fb44f03349cfa89aee5b21409462ecf28af75_1705876145.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>
            بهترین بازی <br></br>های بازار{' '}
          </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/31c748950bc72e01b5a4c03409bf4ccf2284f4df_1706511150.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs '>
            {' '}
            بهترین شرکت <br></br> لبنیات بازار
          </h6>
        </a>
        <a href=''>
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500'
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/62dabea9ffdf866ed3eb6bb67648c8a5c834ec46_1706516158.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs font-bold'>
            {' '}
            های انواع دسته <br></br>بندی اجیل
          </h6>
        </a>
        <a href=''>
          {' '}
          <img
            className='w-16 h-16 rounded-full ring-2 ring-red-500 '
            src={
              'https://dkstatics-public.digikala.com/digikala-content-x-post-media/a90838d59aa2990c6cb53911e132caeea0343268_1716543387.jpg?x-oss-process=image/resize,m_fill,h_115,w_115'
            }
          />
          <h6 className='text-xs  '>بهترین هدفون</h6>
        </a> */}
      </div>
      <br></br>
      <img src={slider} alt='Logo' />
    </div>
  );
}
