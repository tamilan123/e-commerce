import React, { useEffect, useState } from 'react';
import Breadcrumb from '../baseComponent/Breadcrumb'
import ProductImage from '../../images/new-collection-1.webp';
import { Image, RadioGroup } from '@nextui-org/react';
import { CustomRadio } from '../baseComponent/RadioButton';
import SizeGuideDialog from '../baseComponent/SizeGuideDialog';
import AskQuestions from '../baseComponent/AskQuestions';
import ShippingInfo from '../baseComponent/ShippingInfo';
import SharePopup from '../baseComponent/SharePopup';
import { useAuthContext } from '../contentApi/AuthContext';
import { getProductById } from '../../utils/commonapi';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailsSection = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const { openAuthPopup } = useAuthContext();

  const [value, setValue] = useState(0); // Initialize state
  const [questionPopupopen, setQuestionPopupOpen] = useState(false);
  const [shippingInfoPopupopen, setShippingInfoPopupOpen] = useState(false);
  const [sharePopupopen, setSharePopupOpen] = useState(false);


  const handleChange = (event) => {
    setValue(event.target.value); // Update state on change
  };

  useEffect(() => {
    const productData = async () => {
      try {
        const { data: { data } } = await getProductById(id);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/404');
      }
    }
    productData();
  }, [id, navigate]);

  console.log(data,"product");


  const handleBuyNow = () => {
    // Check if the user is logged in
    const isAuthenticated = false; // Replace with actual authentication logic

    if (!isAuthenticated) {
      openAuthPopup();
    } else {
      // Proceed with the purchase
    }
  };

  return (
    <section className='py-12'>
      <div className="px-4 container mx-auto">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="product-image">
                  <Image
                    isZoomed
                    alt="product-image"
                    src={data?.images?.thumbnail}
                    className='w-full'
                    classNames={{
                      wrapper: "!max-w-full"
                    }}
                  />
                </div>
                <div className="flex gap-6 mt-6 overflow-x-auto scrollbar scrollbar-none">
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                  <div className="min-w-24 cursor-pointer">
                    <div className="w-full !rounded-md !max-w-full"> {/* Apply wrapper styles here */}
                      <Image
                        alt="product-image"
                        src={ProductImage}
                        className="!rounded-md w-full" // Apply image-specific styles here
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className='m-0 font-normal text-2xl lg:text-3xl text-black'>{data?.name}</h4>
                <h2 className='m-0 font-bold text-xl lg:text-2xl text-black'>Rs.{data?.price}</h2>
                <ul className='product-current__details flex flex-col gap-4 my-4'>
                  <li className='flex items-center gap-1 leading-normal'>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <span className='text-base text-gray-800'>40 people are viewing right now </span>
                  </li>
                  <li className='flex items-center gap-1 leading-normal'>
                    <div className="icon animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f11e1e" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                      </svg>
                    </div>
                    <span className='text-base text-gray-800'>34 sold in last 19 hours</span>
                  </li>
                  <li className='flex items-center gap-1 leading-normal'>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#108043" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <span className='text-base text-green-700'>In stock</span>
                  </li>
                </ul>
                <p className='m-0 font-normal text-base text-gray-800 text-black'>
                  {
                    data?.description
                  }
                </p>
              </div>
              <RadioGroup label="Plans"
                classNames={{
                  wrapper: "flex-row"
                }}
              >
                <CustomRadio value="S">
                  S
                </CustomRadio>
                <CustomRadio value="M">
                  M
                </CustomRadio>
                <CustomRadio
                  value="L"
                >
                  L
                </CustomRadio>
                <CustomRadio
                  value="XL"
                >
                  XL
                </CustomRadio>
              </RadioGroup>
              <SizeGuideDialog />
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="py-2 px-3 inline-block bg-white border-2 border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      tabIndex="-1"
                    >
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                      type="number"
                      value={value}
                      onChange={handleChange} // Attach change handler
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      tabIndex="-1"
                    >
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <button className='px-4 py-2 bg-white border-2 border-black text-black text-base font-semibold rounded-lg flex-1 flex-grow flex-shrink basis-[200px]'>Add To Cart</button>
                <button className='px-4 py-2 bg-black border-2 border-black text-white text-base font-semibold rounded-lg flex-1 flex-grow flex-shrink basis-[200px]' onClick={handleBuyNow}>Buy Now</button>
              </div>
              <div className="flex gap-3 lg:gap-4">
                <button className='hidden lg:flex gap-1 items-normal'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <span className='text-base'>Compare</span>
                </button>
                <button className='flex gap-1 items-normal' onClick={() => setQuestionPopupOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                  <span className='text-base'>Question</span>
                </button>
                <button className='hidden sm:flex gap-1 items-normal' onClick={() => setShippingInfoPopupOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                  </svg>
                  <span className='text-base'>Shipping Info</span>
                </button>
                <button className='flex gap-1 items-normal' onClick={() => setSharePopupOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                  <span className='text-base'>Share</span>
                </button>
              </div>
              <AskQuestions open={questionPopupopen} setOpen={setQuestionPopupOpen} />
              <ShippingInfo open={shippingInfoPopupopen} setOpen={setShippingInfoPopupOpen} />
              <SharePopup open={sharePopupopen} setOpen={setSharePopupOpen} />

              <div className="flex gap-3">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div className="line border border-gray-200 w-px">
                </div>
                <p className='m-0 text-gray-600 text-base'>Order in the next 7 hours 1 minutes to get it between Saturday, Sep 14 and Wednesday, Sep 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsSection;
