import { data as loopimages } from '../contants/_loopimage.json';
export default function image() {
  return (
    <div>
      <div className=' flex justify-around  p-6  pb-4  pt-5 gap-1 '>
        {' '}
        {loopimages.map((Loopimage) => {
          return (
            <a href='' key={Loopimage.id}>
              <img className='w-18  h-16 rounded-lg  gap-2' src={Loopimage.img} />
              <div className='text-center flex items-center'>
                <h6 className=' font-bold flex text-xs text-center'>{Loopimage.text}</h6>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
