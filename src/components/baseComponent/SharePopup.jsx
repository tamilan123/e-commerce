import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { GrFacebookOption } from "react-icons/gr";
import { MdWhatsapp } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";

const SharePopup = ({ open, setOpen }) => {

  const url = window.location.href;

  const isMoreButton = navigator.share;


  const handleShare = async () => {
    try {
      if (navigator.share) {
        navigator.share({
          title: 'Check this out!',
          text: 'Here is some interesting content.',
          url: url || window.location.href,
        })
        .then(() => console.log('Successfully shared'))
        .catch(error => {
          if (error.name === 'AbortError') {
            console.log('Share was canceled by the user');
          } else {
            console.error('Error sharing:', error);
          }
        });
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
      // Handle error gracefully
    }
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    .then(() => {
      console.log('Text copied to clipboard!');
    })
    .catch((error) => {
      console.error('Error copying text:', error);
    });
  };

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
              className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >

              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-4">
                <DialogTitle as="h3" className="text-xl font-medium text-black">
                  Copy Link
                </DialogTitle>
                <div className="flex">
                  <div className='input-wrapper flex-1'>
                    <input
                      id="copy_link"
                      name="copy_link"
                      type="text"
                      value={url || ""}
                      readOnly
                      className="block w-full rounded-none border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex justify-center rounded-none bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 w-auto"
                  >
                    Copy
                  </button>
                </div>
                <DialogTitle as="h3" className="text-xl font-medium text-black">
                  Share
                </DialogTitle>
                <div className="flex gap-4">
                  <FacebookShareButton url={url}>
                    <div className="icons w-12 h-12 flex items-center justify-center rounded-full border border-gray-800">
                      <GrFacebookOption className='w-6 h-6'/>
                    </div>
                  </FacebookShareButton>
                  <WhatsappShareButton url={url}>
                    <div className="icons w-12 h-12 flex items-center justify-center rounded-full border border-gray-800">
                      <MdWhatsapp className='w-6 h-6'/>
                    </div>
                  </WhatsappShareButton>
                  <TwitterShareButton url={url}>
                    <div className="icons w-12 h-12 flex items-center justify-center rounded-full border border-gray-800">
                      <RiTwitterXFill className='w-6 h-6'/>
                    </div>
                  </TwitterShareButton>
                  {
                    isMoreButton && <div className="icons cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-800" onClick={handleShare}>
                      <IoIosMore className='w-6 h-6'/>
                    </div>
                  }
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default SharePopup;
