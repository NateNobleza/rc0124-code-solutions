import { useState } from 'react';
type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleClick() {
    if (currentIndex >= imageDescrip.length - 1) {
      console.log(currentIndex);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[currentIndex]}</p>
    </div>
  );
}
