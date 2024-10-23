import React from 'react';
import banner1 from '../../images/banner-1.webp';
import banner2 from '../../images/banner-2.webp';
import banner3 from '../../images/banner-3.webp';
import Card2 from '../baseComponent/Card2';

const OffersProducts = () => {
  const data = [
    {
      image: banner1,
      subtitle: "New Year best Selling",
      title: "Spring Style",
    },
    {
      image: banner2,
      subtitle: "Free Shipping Over Order $150",
      title: "-25% Off Items",
    },
    {
      image: banner3,
      subtitle: "Winter Collection 24",
      title: "New Arrivals"
    },
  ];
  return (
    <section className='py-14'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6'>
          {
            Array.isArray(data) && data?.map((item, idx) => (
              <Card2 data={item} key={idx}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OffersProducts;
