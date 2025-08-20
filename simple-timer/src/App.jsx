import { useState, useRef, useEffect } from 'react';
import Timer from './components/Timer';

const App = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    // check if there is a time in LS
    return Number(localStorage.getItem('time') || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // start timer
      // when creating a ref, stored as object with current as the key. here we are setting the id that is returned from the interval to that ref
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time');
  };

  return (
    <>
      {/* <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
        <h2 className='text-4xl font-semibold mt-4'>⌛ Timer: {time}</h2>

        <button
          onClick={toggleTimer}
          className={`mt-3  text-white px-4 py-2 rounded mr-3 ${
            isRunning
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className='mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
        >
          Reset
        </button>
      </div> */}
      <Timer
        timerRef={timerRef}
        time={time}
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </>
  );
};

export default App;
