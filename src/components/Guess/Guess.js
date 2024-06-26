import React from 'react';

import { range } from '../../utils.js';
import { checkGuess } from '../../game-helpers.js';

function EachLetter({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  // console.log(result);
  return (
    <p className='guess'>
      {range(5).map((num, index) => (
        <EachLetter
          key={index}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
