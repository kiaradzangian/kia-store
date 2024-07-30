import Supermarketheader from './Supermarketheader';
import Supermarketcards from './Supermarketcards';
export default function Supermarket() {
  return (
    <div>
      <Supermarketheader />
      <hr />
      <img
        className='w-full h-96'
        src='https://dkstatics-public.digikala.com/digikala-adservice-banners/b7f87400ffe4a1e650bf37f74ab52af03817404a_1721829928.jpg?x-oss-process=image/quality,q_95/format,webp'
        alt=''
      />
      <Supermarketcards />
      <div></div>
    </div>
  );
}
