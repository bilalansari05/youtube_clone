import React, { useEffect, useState } from 'react';

const SpinnerLoader = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Declare loader outside of setInterval to make it accessible for clearing
    const loader = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        let newProgress = prevProgress + Math.random() * 40;
        if (newProgress >= 100) {
          clearInterval(loader); // Stop the interval when progress hits 100
          return 100; // Ensure progress stays at 100
        }
        return newProgress;
      });
    }, 800);

    // Cleanup interval on component unmount
    return () => clearInterval(loader);
  }, []);

  return (
    <div
      className="h-1 bg-red-500 transition-all duration-200 absolute z-40 top-0"
      style={{ width: `${currentProgress}%` }}
    ></div>
  );
};

export default SpinnerLoader;