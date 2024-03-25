import RotatingBanner from './RotatingBanner';
import './App.css';

type prop = {
  items: string[];
}

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return (
    <>
      <RotatingBanner items={items} />
    </>
  );
}

export default App;
