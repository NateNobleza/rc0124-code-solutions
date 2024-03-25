import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

function RotatingBanner() {

  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  const currentIndex = 0;

  return (
    <div className="rotating-banner">
      <Banner itemName={items[currentIndex]} />
      <NextButton />
      <PrevButton />
      <Indicators itemCount={items.length} currentIndex={currentIndex} />
    </div>
  );
}

export default RotatingBanner;
