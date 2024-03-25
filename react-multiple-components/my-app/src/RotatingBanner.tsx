import { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

type RotatingBannerProps= {
  items: string[];
}

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner currentItem={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} currentIndex={currentIndex} />
      <NextButton />
    </div>
  );
}
