export default function Article() {
  return (
    <div>
      <div>
        <div className='flex justify-center gap-4 p-2'>
          <article className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'>
            <h1 className='text-sm'>فناوری صفحه نمایش</h1>
            <p className='text-sm w-full text-gray-400'>Foldable LTPO </p>
          </article>
          <article className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'>
            <h1 className='text-sm'> رزولوشن دوربین </h1>
            <p className='text-sm w-full text-gray-400'>64 مگاپیکسل </p>
          </article>
          <article className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'>
            <h1 className='text-sm'> نسخه سیستم عامل</h1>
            <p className='text-sm w-full text-gray-400'> Android 13 </p>
          </article>
        </div>
      </div>
    </div>
  );
}
