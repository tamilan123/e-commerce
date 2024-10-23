import React from 'react';
import {Image} from "@nextui-org/react";

const Card1 = ({ image, product_name, price }) => {

  return (
    <div className="card card1 cursor-pointer">
      <div className="card-image">
        <Image
          isZoomed
          alt={product_name}
          src={image}
        />
      </div>
      <div className="card-content py-4 flex flex-col gap-2">
        <h6 className='m-0 text-black text-base font-semibold'>
          {product_name}
        </h6>
        <p className='m-0 text-zinc-700 text-sm font-medium'>Rs.{price}</p>
      </div>
    </div>
  )
}

export default Card1
