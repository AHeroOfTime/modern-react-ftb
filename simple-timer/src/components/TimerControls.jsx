import { useEffect, useRef } from 'react';

const TimerControls = ({ toggleTimer, isRunning, resetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startButtonRef}
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
    </>
  );
};

export default TimerControls;
