import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function StopWatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activeInterval, setActiveInterval] = useState<
    NodeJS.Timeout | undefined
  >();

  const startTimer = () => {
    if (!activeInterval) {
      const id = setInterval(() => {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
      setActiveInterval(id);
    }
  };

  const stopTimer = () => {
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopTimer();
    } else {
      startTimer();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const resetTime = () => {
    stopTimer();
    setElapsedSeconds(0);
    setIsPlaying(false);
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch-face" onClick={resetTime}>
        {elapsedSeconds}s
      </div>
      <div className="play-pause-icon" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
}
