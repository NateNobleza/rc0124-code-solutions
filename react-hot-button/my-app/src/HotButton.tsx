import { useState } from 'react';
import './HotButton.css';

export function HotButton() {
  const [count, setCount] = useState(0);
  function buttonIsClicked() {
    if (count < 3) {
      return 'Dark-purple';
    } else if (count < 6) {
      return 'light-purple';
    } else if (count < 9) {
      return 'blue';
    } else if (count < 12) {
      return 'other-blue';
    } else if (count < 15) {
      return 'dark-red';
    } else if (count < 18) {
      return 'red';
    } else {
      return 'pink';
    }
  }
  const colorClass = buttonIsClicked();
  return (
    <div>
      <button className={colorClass} onClick={() => setCount(count + 1)}>
        change color please
      </button>
    </div>
  );
}
