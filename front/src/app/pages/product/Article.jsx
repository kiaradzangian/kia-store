export default function Article(data) {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        {data?.features?.map((feacher, index) => {
          return (
            <article
              key={index}
              className='w-40 h-16 bg-zinc-100 shadow p-2 space-y-1 rounded-md hover:-translate-y-2 duration-300'
            >
              <h1 className='text-sm'>{feacher.label}</h1>
              <p className='text-sm w-full text-gray-400'>Foldable LTPO </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
