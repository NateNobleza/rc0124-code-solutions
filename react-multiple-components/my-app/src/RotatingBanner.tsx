import { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

type RotatingBannerProp = {
  items: string[];
};

function RotatingBanner({ items }: RotatingBannerProp) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Banner currentItem={items[currentIndex]} />
      <PrevButton onClick={handlePrevClick} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onIndicatorClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default RotatingBanner;
