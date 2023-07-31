'use client';

import React from 'react';
import {isPrimeNumber} from 'prime-lib';

export function DemoComponent() {
  const [isPrime, setIsPrime] = React.useState(false);
  const [number, setNumber] = React.useState(0);

  return <>
    <p>Demo Component</p>
    <input type="number" onChange={(event) => {
      const number = parseInt(event.target.value);
      setIsPrime(isPrimeNumber(number));
      setNumber(number);
    }}></input>
    <p>{number} is {isPrime ? 'prime' : 'not prime'}</p>
  </>;
}
