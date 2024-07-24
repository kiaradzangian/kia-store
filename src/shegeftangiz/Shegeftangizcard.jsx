export default function Shegeftangizcard() {
  return (
    <div>
      <div className='flex justify-right gap-4'>
        <div className='w-1/3 h-60 flex flex-col justify-center gap-2 bg-white rounded-lg shadow p-2'>
          <div className='flex gap-2'>
            <img
              src='https://dkstatics-public.digikala.com/digikala-products/dfc0e25d60551cf78f9817c8c6490b1612a4256f_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
              alt=''
              className='bg-purple-200 w-38 h-32 shrink-0 rounded-lg'
            />
            <div className='flex flex-col text-black font-bold'>
              <button className=' font-bold text-black rounded p-4 w-22 flex justify-right'>
                ارسال رایگان
              </button>
              <p className='line-clamp-3 font-bold'>
                گوشی موبایل تکنو مدل Phantom V Flip ظرفیت 256 گیگابایت و رم 8 گیگابایت
              </p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex justify-around'>
              <p className='bg-violet-900 rounded-full w-4 h-4 p-1 '></p>
              <p className='font-bold p-1 '>بنفش</p>
            </div>

            <button className='flex justify-end text-black rounded p-2 font-bold'>3.6⭐</button>
          </div>

          <div className='flex justify-between'>
            <div className='bg-rose-500 rounded-xl w-18 h-6 '>
              <p className='font-bold p-1 gap-2    '>5%</p>
            </div>

            <p className='flex justify-end font-bold'>28/390/000</p>
          </div>
        </div>{' '}
        <div className='bg-white w-1/2 blur-sm rounded-2xl'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/002/590/547/small/box-carton-delivery-line-style-icon-free-vector.jpg'
            alt=''
          />{' '}
        </div>{' '}
        <div className=' p-20 gap-8 animate-bounce'>
          <img
            className='w-20'
            src='https://cdn.icon-icons.com/icons2/2070/PNG/512/lock_icon_125649.png'
            alt=''
          />
        </div>
      </div>{' '}
    </div>
  );
}
