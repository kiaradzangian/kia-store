const ProductId = () => {
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
      <div className='flex justify-start'>
        <div className='flex justify-start w-96 p-4'>
          <img
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
          </a>
        </div>
      </div>
      <div className='flex justify-start gap-8 '>
        <img
          className='w-16 border border-slate-500 rounded-xl  '
          src='https://dkstatics-public.digikala.com/digikala-products/1e453d99f81c757909ec4a12f989f71a5b1f0770_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
          alt=''
        />
        <img
          className='w-16 border border-slate-500 rounded-xl '
          src='https://dkstatics-public.digikala.com/digikala-products/625dcc180bd7c3f4dd484268e661c1626f4073e0_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
          alt=''
        />
        <img
          className='w-16 border border-slate-500 rounded-xl '
          src='https://dkstatics-public.digikala.com/digikala-products/9102d58c25f484397b59392decaf2bbfd2659e4a_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
          alt=''
        />
        <img
          className='w-16 border border-slate-500 rounded-xl '
          src='https://dkstatics-public.digikala.com/digikala-products/cb47df208de99e13ebe7e5bbddfa05c5dd8dc243_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
          alt=''
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ProductId;
