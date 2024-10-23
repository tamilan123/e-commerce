import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

// Notification Types
const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

// // Notification Styles
// const getNotificationStyle = (type) => {
//   switch (type) {
//     case NOTIFICATION_TYPES.SUCCESS:
//       return 'bg-white text-green-500 border border-green-500';
//     case NOTIFICATION_TYPES.ERROR:
//       return 'bg-red-500 text-white';
//     default:
//       return 'bg-gray-800 text-white';
//   }
// };

const getNotificationIcon = (type) => {
  switch (type) {
    case NOTIFICATION_TYPES.SUCCESS:

      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-green-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );

    case NOTIFICATION_TYPES.ERROR:

      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-red-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );

    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-green-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
  }
}
// Animation Styles
const getAnimationStyle = (isVisible) =>
  isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4';

const Toastr = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(), 300); // Delay for animation to finish
    }, 50000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={classNames(
        'fixed top-[7rem] right-4 sm:right-6 lg:right-8 w-80 p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out',
        // getNotificationStyle(type),
        'bg-white text-black border border-gray-200 rounded-xl shadow-lg',
        getAnimationStyle(isVisible)
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {getNotificationIcon(type)}
          <span className="text-sm font-medium">{message}</span>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
          }}
          className="ml-4 text-lg font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toastr;
