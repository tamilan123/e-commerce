import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const ShippingInfo = ({ open, setOpen }) => {

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >

              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-6">
                <DialogTitle as="h3" className="text-xl font-medium text-black">
                  Shipping Info
                </DialogTitle>
                <ul className="flex flex-col gap-4">
                  <li className='text-base text-black leading-relaxed'>
                    Return Policy: <span className='text-base text-gray-600 leading-relaxed'>We will gladly accept returns for any reason within 30 days of receipt of delivery.</span>
                  </li>
                  <li className='text-base text-black leading-relaxed'>
                    Availability: <span className='text-base text-gray-600 leading-relaxed'>Ships anywhere in the United States.</span>
                  </li>
                  <li className='text-base text-black leading-relaxed'>
                    Processing Time: <span className='text-base text-gray-600 leading-relaxed'>Allow 3-4 business days processing time for your order to ship.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none sm:ml-3 sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  Got it, thanks!
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ShippingInfo;
