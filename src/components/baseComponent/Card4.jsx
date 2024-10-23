import React from 'react'
import StartRating from './StartRating'

const Card4 = ({title,rating,description,user_name,role}) => {
  return (
    <div className='card card4 testimonial-card flex flex-col gap-4 border border-gray-200 rounded-lg p-4'>
      <h6 className='m-0 text-xl font-bold text-black'>{title}</h6>
      <StartRating rating={rating}/>
      <p className='m-0 text-lg text-black'>&#8220;{ description }&#8221;</p>
      <div className="name flex flex-col gap-1">
        <h6 className='text-md text-black m-0'>{user_name}</h6>
        <p className='text-sm text-[#111111cc] m-0'>{role}</p>
      </div>
    </div>
  )
}

export default Card4
