import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Make an useState array to loop on GuessResults Component
  const [guess, setGuess] = React.useState([]);
  // It will handle the guess items on GuessInput Component and will create a brand new array
  const [gameStatus, setGameStatus] = React.useState('running');

  const handleAddGuess = (guessParams) => {
    const newGuess = guessParams;
    const nextGuess = [...guess, newGuess];

    if (guessParams === answer) {
      setGameStatus('won');
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    setGuess(nextGuess);
  };

  return (
    <>
      <GuessResults guess={guess} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />

      {gameStatus === 'won' && <WonBanner answer={guess.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
