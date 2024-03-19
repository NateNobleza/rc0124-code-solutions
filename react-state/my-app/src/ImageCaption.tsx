import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    if (currentIndex >= imageCap.length - 1) {
      console.log(currentIndex);
      setCurrentIndex(0);
      console.log(currentIndex);
    }
    {
      console.log(currentIndex);
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[currentIndex]}</h3>
    </div>
  );
}
