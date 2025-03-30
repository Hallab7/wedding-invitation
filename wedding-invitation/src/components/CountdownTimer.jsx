import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date("2025-05-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      isOver: distance <= 0
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isOver) {
    return <h2 className="text-2xl font-bold greeting">Congratulations!!! <br /> Happy Married</h2>;
  }

  return (
    <div className="countdown-container grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="time-box bg-gray-800 text-white p-6 rounded-xl text-center shadow-lg">
    <span className="number text-3xl font-bold block">{value < 10 ? `0${value}` : value}</span>
    <span className="label text-sm uppercase mt-2 block">{label}</span>
  </div>
);

export default Countdown;
