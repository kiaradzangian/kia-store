import Headers from '../../../headers/Headers';
import Shegeftangizcard from '../../../shegeftangiz/Shegeftangizcard';
const Product = () => {
  return (
    <div>
      <Headers />
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br>
      <div className='flex justify-center bg-red-500 h-16 '>
        <h1 className='p-4 font-sans hover:font-serif text-2xl text-center font-bold text-white'>
          پیشنهاد شگفت انگیز
        </h1>
      </div>
      <img
        className='w-full h-80'
        src='https://dkstatics-public.digikala.com/digikala-adservice-banners/9fb15c184b09d3e4ad3459a313ee9201bef99d19_1721807356.jpg?x-oss-process=image/quality,q_95/format,webp'
        alt=''
      />
      <div className=' bg-rose-500 h-80 p-3 m-5 rounded-3xl'>
        <div className=''></div>
        <h1 className='font-sans  text-lg text-center font-bold text-white text-right'>
          🎇شگفت انگیز روز
        </h1>
        <br></br>
        <Shegeftangizcard />
      </div>
    </div>
  );
};

export default Product;
