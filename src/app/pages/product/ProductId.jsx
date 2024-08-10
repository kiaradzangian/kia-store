import Article from './Article';
import Footer from '../../../Footer';
import { useEffect, useState } from 'react';

const ProductId = () => {
  const [data, setData] = useState();
  async function getData() {
    const url = 'http://localhost:3000';
    try {
      const response = await fetch(url);

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <br></br>
      <div className='flex justify-between pt-40'>
        <div className='flex justify-start'>
          <div className='flex justify-end'>
            <div className='flex justify-end '>
              <p className=' p-3 opacity-50 font-light text-sm '>دیجیکالا</p>
              <img
                className='w-4 m-1 '
                src='https://www.svgrepo.com/show/171081/store.svg'
                alt=''
              />
            </div>
            <div className='flex justify-end'>
              <p className=' p-3 opacity-50 font-light text-sm'>موبایل</p>
              <img
                className='w-4 m-1 '
                src='https://www.svgrepo.com/show/164980/cell-phone.svg'
                alt=''
              />
            </div>
            <div className='flex justify-end'>
              <p className=' p-3 opacity-50 font-light text-sm'>گوشی موبایل</p>
              <img
                className='w-4 m-1 '
                src='https://www.svgrepo.com/show/13641/phone-call.svg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex justify-end'>
            <p className=' p-3 opacity-50 font-light text-sm'> ثبت اگهی در پینو</p>
            <img
              className='w-4 m-1 '
              src='https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg'
              alt=''
            />
          </div>
          <div className='flex justify-end'>
            <p className=' p-3 opacity-50 font-light text-sm'>فروش در دیجی کالا</p>
            <img className='w-4 m-1 ' src='https://www.svgrepo.com/show/96487/store.svg' alt='' />
          </div>
        </div>
      </div>
      <br></br>
      <div className='flex justify-start h-3/4'>
        <div className='flex justify-start w-96 h-80 m-12'>
          <img
            className='h-96 w-full'
            src='https://dkstatics-public.digikala.com/digikala-products/dfc0e25d60551cf78f9817c8c6490b1612a4256f_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
            alt=''
          />
        </div>
        <div className='p-6 flex justify-end '>
          <a href=''>
            <p className='opacity-50 font-light text-sky-800'>{data?.title}</p>
            <h1 className='text-2xl '>{data?.name}</h1>
            <h6 className='opacity-50 text-sm font-light text-sky-800 m-3'> {data?.Paragraph}</h6>
            <div className='flex justify-start gap-2'>
              <img className='w-3' src='https://www.svgrepo.com/show/13695/star.svg' alt='' />

              <p className='text-sm'>{data?.Score}</p>
              <p className='text-sm'>{data?.emtiaz}</p>
              <br></br>
              <p className='text-sm text-sky-800'>{data?.didgah}</p>
              <br></br>
              <p className='text-sm text-sky-800'>{data?.porsesh}</p>
            </div>
            <br></br>
            <h1 className='font-bold'>{data?.rang}</h1>
            <div className='flex justify-start gap-3 p-2 '>
              <img
                className=' outline outline-1 outline-offset-1 w-7 rounded-full '
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXvXueOM5BRYSQTBRjMgGRmqRCzNnfBwMdg&s'
                alt=''
              />
              <img
                className='w-7 rounded-full  outline outline-1 outline-offset-1 '
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzM0U2muL8QpE6X-Mt9gYT05RBYiT6aiLlA&s'
                alt=''
              />
            </div>
            <br></br>
            <h1 className='font-bold'></h1>
            <br></br>
            <fieldset>
              <legend className='sr-only'></legend>

              {data?.bime?.status && (
                <div className='space-y-2'>
                  <label className='flex cursor-pointer items-start gap-4 rounded-lg border border-gray-100 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50'>
                    <div className='flex items-center'>
                      <input
                        id='Option1'
                        className='size-4 rounded border-gray-300'
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <strong className='font-medium text-gray-900'>
                        {data?.bime.detail.label}
                      </strong>
                      ِ
                      <p className='mt-1 text-pretty text-sm text-gray-700'>
                        <div className='flex justify-around'>
                          <p className='opacity-75'>{data?.bime.detail.price}</p>
                          <p className='text-fuchsia-950'>{data?.bime.detail.text}</p>
                        </div>
                      </p>
                    </div>
                  </label>
                </div>
              )}
            </fieldset>
            <br></br>

            <br></br>
            <div className=''>
              {data?.features.length > 0 && <Article features={data?.features} />}
            </div>
          </a>
        </div>

        <div className='w-1/4 bg-[#f7f7f4] text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md'>
          <div className='col-span-2 text-lg font-bold rounded-md'>
            {' '}
            <p>{data?.customer}</p>
            <div className='flex justify-start  '>
              <img className='w-4' src='https://www.svgrepo.com/show/290119/smile.svg' alt='' />
              <p className='p-2 font-light text-sm'>{data?.digi}</p>
            </div>
            <div className='flex justify-center gap-2 border-b-2 border-slate-300 p-2'>
              <p className='font-light text-sm text-emerald-800'>{data?.Percent}</p>

              <p className='font-light text-sm '>{data?.Satisfaction}</p>
            </div>
            <br></br>
            <div className='flex justify-end'>
              <p className='flex justify-end text-sm font-bold gap-1'>{data?.price}</p>
              <img
                className='w-4 h-4'
                src='https://cdn.iconscout.com/icon/premium/png-256-thumb/toman-8688012-7145210.png?f=webp&w=256'
                alt=''
              />
            </div>
            <div className='flex justify-start gap-1'>
              <img
                className='w-4 '
                src='https://dkstatics-public.digikala.com/digikala-static/b0d6bb54a0077253781cdce04f9e16a34edc5299_1716833794.svg'
                alt=''
              />
              <p className='font-bold text-sm text-teal-600'>{data?.cart}</p>
            </div>
            <br></br>
            <button
              type='button'
              className=' w-72 focus:outline-none text-white bg-rose-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            >
              {data?.buttontext}
            </button>
            <br></br>
            <br></br>
            <div className='flex justify-start gap-2   border-b-2 border-slate-3 00'>
              <br></br>
              <img
                className='w-4 h-4'
                src='https://static.thenounproject.com/png/2084849-200.png'
                alt=''
              />
              <p className='text-sm'> {data?.garanti}</p>
            </div>
            <br></br>
            <div className='flex justify-start  '>
              <img
                className='w-4'
                src='https://www.svgrepo.com/show/22694/delivery-truck.svg'
                alt=''
              />
              <p className='text-sm font-bold'>{data?.ersal.text}</p>
            </div>
            <div className='flex justify-start  border-b-2 '>
              <img className='w-4' src='https://www.svgrepo.com/show/130076/watch.svg' alt='' />
              <p className='text-sm font-bold'>{data?.ersal.label}</p>
              <br></br>
            </div>
            <br></br>
            <div className='flex justify-start gap-2'>
              <img
                className='w-5'
                src='https://www.digikala.com/statics/img/svg/club-point.svg'
                alt=''
              />
              <p className='text-sm font-bold'>{data?.digiclub} امتیاز دیجی‌کلاب</p>
            </div>
            <br></br>
            <div className='flex justify-between'>
              <p className='text-sm font-bold'>{data?.howtoprice}</p>
              <img
                className='w-6'
                src='https://www.reshot.com/preview-assets/icons/XY6MSRE5DN/chevron-arrow-left-circle-XY6MSRE5DN.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 m-3'>
        <Footer />
      </div>
    </div>
  );
};

export default ProductId;
