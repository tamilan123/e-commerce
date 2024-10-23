import React, { useState, useEffect, useCallback, useMemo } from 'react';

const OfferCounter = () => {
  // Memoize the target date so it's only calculated once (when the component mounts)
  const targetDate = useMemo(() => {
    const startDate = new Date("8 9 2024");
    const date = new Date(startDate);
    date.setDate(date.getDate() + 365);
    return date;
  }, []);

  // Calculate the remaining time
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? <span className='text-black text-xl font-semibold'>{timerComponents}</span> : <span className='text-black text-xl font-semibold'>Offer expired!</span>}
    </div>
  );
};

export default OfferCounter;
