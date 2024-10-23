import React from 'react';
import { Image } from '@nextui-org/react';

const Card3 = ({ image, title, items }) => {

  const updateItemsDisplay = (stock) => {
    return stock === 1 ? "item" : "items"
  }

  return (
    <div className='card card3'>
      <Image
        isZoomed
        isBlurred
        alt="bg-image"
        src={image}
        className='w-full  aspect-square'
        classNames={{
          wrapper: "!max-w-full !rounded-full overflow-hidden"
        }}
      />
      <div className="content absolute inset-0 flex flex-col gap-2.5 z-10 items-center justify-center">
        <h2 className='m-0 text-xl font-semibold text-white'>{ title }</h2>
        <h6 className='m-0 text-base font-medium text-white'>{ items } {updateItemsDisplay(items)}</h6>
      </div>
    </div>
  )
}

export default Card3
