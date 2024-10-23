import React from 'react';
import newCollection1 from '../../images/new-collection-1.webp';
import newCollection2 from '../../images/new-collection-2.webp';
import { Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

const ShopBestCollection = () => {
  return (
    <section className='py-14'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center items-center">
          <div className="section-title flex flex-col gap-2 text-center">
            <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>Our Best Collection</h1>
            <p className='m-0 text-md text-[#111111cc]'>Follow the most popular trends and get exclusive items from Foesta shop.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mt-16">
          <div className='w-full lg:w-1/2'>
            <div className="card">
              <div className="card-image relative">
                <Image
                  alt="bg-image"
                  src={newCollection1}
                  className='w-full'
                  classNames={{
                    wrapper: "!max-w-full"
                  }}
                />
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[29.5%] left-[57%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[41%] left-[25%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[53%] left-[30%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>

              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className="card">
              <div className="card-image relative">
                <Image
                  alt="bg-image"
                  src={newCollection2}
                  className='w-full'
                  classNames={{
                    wrapper: "!max-w-full"
                  }}
                />
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[5%] left-[58%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[30%] left-[68%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <div className="icon absolute cursor-pointer top-[60%] left-[38%] z-20 bg-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className='m-0 text-lg font-semibold text-black'>Cargo Shorts for Active Boys</p>
                      <span className="block text-gray-500 line-through text-base">Rs. 1999</span>
                      <span className="block text-tiny text-base">Rs. 999</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopBestCollection;
