import React from 'react';
import { useNavigate } from 'react-router-dom';
// import {Image} from "@nextui-org/react";

const TrendingCard = (data) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className="card card1 cursor-pointer" onClick={()=>handleClick(data?._id)}>
      <div className="card-image border border-gray-200 rounded-xl p-6 h-[20rem] overflow-hidden">
        <img
          alt={data?.name}
          src={data?.images?.thumbnail}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="card-content py-4 flex flex-col gap-2">
        <h6 className='m-0 text-black text-base font-semibold'>
          {data?.name}
        </h6>
        <p className='m-0 text-zinc-700 text-sm font-medium'>Rs.{data?.price}</p>
      </div>
    </div>
  )
}

export default TrendingCard;
