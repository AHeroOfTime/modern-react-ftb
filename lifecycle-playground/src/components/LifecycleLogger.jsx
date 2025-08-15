import { useState, useEffect } from 'react';

const LifeCycleLogger = () => {
  const [count, setCount] = useState(0);

  // similar to componentDidUpdate
  useEffect(() => {
    console.log('component mounted...');

    // cleanup function? similar to componentWillUnmount
    return () => {
      console.log('component unmount...');
    };
  }, []);

  // similar to componentDidUpdate - put what you're watching in the dependency array
  useEffect(() => {
    if (count > 0) {
      console.log('component updated...', count);
    }
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='logger-container'>
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} className='secondary-btn'>
        Update
      </button>
    </div>
  );
};

export default LifeCycleLogger;
