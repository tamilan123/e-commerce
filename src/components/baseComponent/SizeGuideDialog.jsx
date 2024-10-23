import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import measuringTape from '../../images/icons/measuring-tape.png';
import { Image } from '@nextui-org/react';

function SizeGuideDialog() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="size-guide-container flex items-center gap-2 cursor-pointer" onClick={openModal}>
        <div className="icon w-7 h-7">
          <Image
            alt="product-image"
            src={measuringTape}
            className='w-full h-full'
            classNames={{
              wrapper: "!max-w-full",
              img: "object-contain"
            }}
          />
        </div>
        <p className='m-0 text-base text-gray-600 underline decoration-dashed'>Size Guide</p>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-[60rem] p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Size Guide
                  </DialogTitle>
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <p className='m-0 text-base text-gray-500 mt-4'>
                    If you need assistance when choosing your size, don't hesitate to - contact us. All sizes shown in the Size Charts are approximate. Please shop carefully and refer to our Size Chart to ensure the best fit.
                  </p>
                  <div className="mt-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Size
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Chest (in)
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Waist (in)
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Hips (in)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">Small</td>
                            <td className="px-6 py-4 whitespace-nowrap">34-36</td>
                            <td className="px-6 py-4 whitespace-nowrap">28-30</td>
                            <td className="px-6 py-4 whitespace-nowrap">34-36</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">Medium</td>
                            <td className="px-6 py-4 whitespace-nowrap">38-40</td>
                            <td className="px-6 py-4 whitespace-nowrap">32-34</td>
                            <td className="px-6 py-4 whitespace-nowrap">38-40</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">Large</td>
                            <td className="px-6 py-4 whitespace-nowrap">42-44</td>
                            <td className="px-6 py-4 whitespace-nowrap">36-38</td>
                            <td className="px-6 py-4 whitespace-nowrap">42-44</td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">X-Large</td>
                            <td className="px-6 py-4 whitespace-nowrap">46-48</td>
                            <td className="px-6 py-4 whitespace-nowrap">40-42</td>
                            <td className="px-6 py-4 whitespace-nowrap">46-48</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className='m-0 text-sm text-gray-400 mt-4'>* All measurements are in centimeters (cm).</p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SizeGuideDialog;
