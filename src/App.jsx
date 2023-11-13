// src/App.jsx
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date("Nov 30, 2023 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-8">We're working hard to bring you something awesome. Stay tuned!</p>

      {/* Countdown Timer */}
      <div className="text-2xl mb-8">
        {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
      </div>

      <div className="flex justify-center">
        <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md focus:outline-none" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Notify Me</button>
      </div>
    </div>
  );
}

export default App;
