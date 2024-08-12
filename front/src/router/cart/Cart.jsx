import { useEffect, useState } from 'react';
import Headers from '../../headers/Headers';
import { useStore } from '../../store';
export default function Cart() {
  const product = useStore((state) => state.product);
  const [totalprice, setTotalprice] = useState(0);
  useEffect(() => {
    let total = 0;
    product?.map((prd) => {
      total = Number(prd?.price) + total;
    });
    setTotalprice(total);
  }, [product]);
  return (
    <div>
      <Headers />

      <div className='flex justify-start gap-3 px-8 w-1/2 '>
        <div className='flex justify-start gap-1 border-b-4 w-18 border-red-700 rounded-md p-2 mt-48 '>
          <b>
            {' '}
            <a href=''>
              {' '}
              <h1 className=' font-bold text-base text-[#be123c]   '>سبد خرید</h1>
            </a>
          </b>
          <div className='bg-[#be123c] w-5 h-5 rounded-md'>
            <p className='text-xs px-1.5 p-0.5 text-white font-bold '>1</p>
          </div>
        </div>

        <br></br>
        <a href=''>
          <p className='font-bold text-base text-[#94a3b8] p-2'>خرید بعدی</p>
        </a>
      </div>

      <hr className='max-w-full t h-0.5 bg-gray-200 border-0 rounded  dark:bg-gray-700'></hr>
      <br></br>

      <div className='flex justify-between'>
        <div className='border border-neutral-300 rounded-2xl w-4/6'>
          <div className='flex justify-start gap-3 p-6  '>
            {' '}
            <img
              className='w-7'
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/green-bucket-7893293-6424097.png?f=webp&w=256'
              alt=''
            />
            <p className='text-lg font-bold '>خرید سوپر مارکتی اینحاست !</p>
          </div>
          <div className='flex justify-end'>
            <img
              className='w-14 h-14'
              src='https://dkstatics-public.digikala.com/digikala-products/dfc0e25d60551cf78f9817c8c6490b1612a4256f_1707908038.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
              alt=''
            />
            <button className=' p-4 m-4 bg-transparent hover:bg-green-700 text-green-700 font-bold text-xs hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
              سبد سوپر مارکتی
            </button>
          </div>
        </div>
        <div className='m-8'>
          <div className='border border-neutral-300 rounded-2xl  p-4 m-8'>
            <div className='flex justify-between gap-24'>
              <p className='font-bold text-xs '>قیمت کالاها(1)</p>
              <div className='flex justify-between'>
                <p className='font-bold text-xs'>{Number(totalprice).toLocaleString('en')}</p>
                <img
                  className='w-4 h-4 gap-1'
                  src='https://cdn.iconscout.com/icon/premium/png-512-thumb/toman-8688012-7145210.png?f=webp&w=256'
                  alt=''
                />
              </div>
            </div>
            <p>ddf</p>
          </div>
        </div>
      </div>
      <br></br>

      <div className='border border-pink-400 rounded-2xl bg-[url("https://www.digikala.com/statics/img/svg/digiplus/digiplus-purple-pattern.svg")] bg-no-repeat w-1/4 '>
        <img
          className='w-28 m-4'
          src='https://www.digikala.com/statics/img/svg/digiplus/digiplus-purple.svg'
          alt=''
        />
        <b>
          {' '}
          <p className='font-extrabold m-4 '>خدمات ویژه با اشتراک دیجی پلاس</p>
        </b>
        <button className=' text-xs m-4 w-48 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded'>
          افزودن دیجی پلاس به سبد خرید
        </button>
      </div>
    </div>
  );
}
