import Article from './Article';

const ProductId = () => {
  function handelAddToCart() {
    async function getData() {
      const url = 'http://localhost:3000';
      try {
        const response = await fetch(url);
        console.log(response);

        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='flex justify-between'>
        <div className='flex justify-start'>
          <div className='flex justify-end'>
            <div className='flex justify-end'>
              <p className=' p-3 opacity-50 font-light text-sm'>دیجیکالا</p>
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
            <p className='opacity-50 font-light text-sky-800'>تکنو/ گوشی موبایل تکنو</p>
            <h1 className='text-2xl '>گوشی موبایل تکنو مدل vflip ظرفیت 256 و رم 8</h1>
            <h6 className='opacity-50 text-sm font-light text-sky-800 m-3'>
              {' '}
              Tecno Phantom V Flip 256GB And 8GB RAM Mobile Phone
            </h6>
            <div className='flex justify-start gap-2'>
              <img className='w-3' src='https://www.svgrepo.com/show/13695/star.svg' alt='' />

              <p className='text-sm'>3.7</p>
              <p className='text-sm'>(امتیاز ۹ خریدار)</p>
              <br></br>
              <p className='text-sm text-sky-800'>28 دیدگاه .</p>
              <br></br>
              <p className='text-sm text-sky-800'>26 پرسش.</p>
            </div>
            <br></br>
            <h1 className='font-bold'>رنگ:مشکی</h1>
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
            <h1 className='font-bold'>بیمه</h1>
            <br></br>
            <fieldset>
              <legend className='sr-only'></legend>

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
                      بیمه تجهیزات دیجیتال - بیمه پارسیان و رساندن خدمات
                    </strong>
                    ِ
                    <p className='mt-1 text-pretty text-sm text-gray-700'>
                      <div className='flex justify-around'>
                        <p className='opacity-75'>تومان467/000</p>
                        <p className='text-fuchsia-950'>جزییات</p>
                      </div>
                    </p>
                  </div>
                </label>
              </div>
            </fieldset>
            <br></br>

            <br></br>
            <div className='flex justify-start gap-4'>
              <article className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'>
                <h1 className='text-sm'>فناوری صفحه نمایش</h1>
                <p className='text-sm w-full text-gray-400'>Foldable LTPO </p>
              </article>
              <article className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'>
                <h1 className='text-sm'> اندازه</h1>
                <p className='text-sm w-full text-gray-400'> 6.9 </p>
              </article>
            </div>
          </a>

          {/* منطقه نوشتن کارت */}
        </div>

        <div class='w-1/4 bg-[#f7f7f4] text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md'>
          <div class='col-span-2 text-lg font-bold rounded-md'>
            {' '}
            <p>فروشنده</p>
            <div className='flex justify-start  '>
              <img className='w-4' src='https://www.svgrepo.com/show/290119/smile.svg' alt='' />
              <p className='p-2 font-light text-sm'>دیجی کالا</p>
            </div>
            <div className='flex justify-center gap-2 border-b-2 border-slate-300 p-2'>
              <p className='font-light text-sm text-emerald-800'>93.4</p>

              <p className='font-light text-sm '>رضایت از کالا|عمرکرد عالی</p>
            </div>
            <br></br>
            <div className='flex justify-end'>
              <p className='flex justify-end text-sm font-bold gap-1'>29,799,000</p>
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
              <p className='font-bold text-sm text-teal-600'>در سبد خرید 500 نفر</p>
            </div>
            <br></br>
            <button
              onClick={handelAddToCart}
              type='button'
              class=' w-72 focus:outline-none text-white bg-rose-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            >
              افزودن به سبد
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
              <p className='text-sm'>گارانتی ۱۸ ماهه مدیا پردازش</p>
            </div>
            <br></br>
            <div className='flex justify-start  '>
              <img
                className='w-4'
                src='https://www.svgrepo.com/show/22694/delivery-truck.svg'
                alt=''
              />
              <p className='text-sm font-bold'>ارسال دیجی کالا</p>
            </div>
            <div className='flex justify-start  border-b-2 '>
              <img className='w-4' src='https://www.svgrepo.com/show/130076/watch.svg' alt='' />
              <p className='text-sm font-bold'>ارسال امروز (فعلا در شهر تهران و کرج)</p>
              <br></br>
            </div>
            <br></br>
            <div className='flex justify-start gap-2'>
              <img
                className='w-5'
                src='https://www.digikala.com/statics/img/svg/club-point.svg'
                alt=''
              />
              <p className='text-sm font-bold'>۱۵۰ امتیاز دیجی‌کلاب</p>
            </div>
            <br></br>
            <div className='flex justify-between'>
              <p className='text-sm font-bold'>فرایند قیمت گذاری و نظارت بر قیمت</p>
            </div>
          </div>
        </div>
      </div>
      <Article />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ProductId;
