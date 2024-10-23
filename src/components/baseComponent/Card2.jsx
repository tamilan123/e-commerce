import React from 'react';
import { Image } from '@nextui-org/react';

const Card2 = ({ data }) => {

  return (
    <>
      <div className="card card2 relative w-full">
        <Image
          isZoomed
          isBlurred
          alt="bg-image"
          src={data?.image}
          className='w-full'
          classNames={{
            wrapper: "!max-w-full"
          }}
        />
        <div className="content absolute inset-0 flex flex-col gap-3 z-10 items-center justify-center">
          <h6 className='m-0 text-xl font-medium text-white'>{ data?.subtitle }</h6>
          <h2 className='m-0 text-3xl font-bold text-white'>{ data?.title }</h2>
          <button className='px-4 py-2 bg-white text-black text-base font-semibold rounded-lg'>Explore Now</button>
        </div>
      </div>
    </>
  )
}

export default Card2
