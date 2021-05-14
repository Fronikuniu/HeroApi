import { useState } from 'react';
import './Counter.css';

function Counter({ label, size }) {
  // let btnClass = `btn btn--${size}`;
  const [counter, setCounter] = useState(0);
  let btnClass = 'btn';
  let btnClassSecondary = `btn btn--secondary`;

  const changeCounterValue = (type) => {
    if (type === 'increment') {
      setCounter(counter + 1);
    } else if (type === 'decrement') {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          changeCounterValue('increment');
        }}
        className={btnClass}
      >
        +
      </button>

      <span>{counter}</span>

      <button
        onClick={() => {
          changeCounterValue('decrement');
        }}
        className={btnClassSecondary}
      >
        -
      </button>
    </>
  );
}

export default Counter;
