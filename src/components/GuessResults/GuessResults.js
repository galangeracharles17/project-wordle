import React from 'react';

import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'; //value = 6

import Guess from '../Guess/Guess.js';

function GuessResults({ guess, answer }) {
  // Each element in array will create a new row (with guess value)

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // Capture the guess array element
        <Guess key={crypto.randomUUID()} value={guess[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;