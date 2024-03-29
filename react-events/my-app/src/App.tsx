import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';

const completeData = [
  {
    id: 1,
    imageUrl: '/starry-sky.jpeg',
    caption: 'A Beautiful Image of Space',
    description: 'This is a wonderful sky full of stars!',
  },
  {
    id: 2,
    imageUrl: '/cool-kitty.jpg',
    caption: 'A Cool Cat',
    description: 'This is a picture of a very cool cat!',
  },
  {
    id: 3,
    imageUrl: '/cool-car.jpg',
    caption: 'A Cool Car',
    description: 'This is a picture of a very cool car!',
  },
];

const buttonText = 'Click for Next Image';

export function App() {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  function nextButtonClick() {
    if (currentDataIndex >= completeData.length - 1) {
      setCurrentDataIndex(0);
    } else {
      setCurrentDataIndex(currentDataIndex + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={completeData[currentDataIndex].imageUrl} />
      <ImageCaption imageCap={completeData[currentDataIndex].caption} />
      <ImageDescription
        imageDescrip={completeData[currentDataIndex].description}
      />
      <ButtonContainer
        buttonText={buttonText}
        onNextButtonClick={nextButtonClick}
      />
    </>
  );
}
