import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}
