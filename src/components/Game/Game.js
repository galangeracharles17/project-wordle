import React from 'react';

import { sample } from '../../utils';
import { WORDS, COMPUTERS, ANIMALS, PLACES, FOODS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

import SelectionHolder from '../SelectionHolder';
import TimerSelection from '../TimerSelection';
import CategorySelection from '../CategorySelection';

import Timer from '../Timer';
import WonConfetti from '../WonConfetti';

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });

  const [answerCategory, setAnswerCategory] = React.useState('WORDS');

  const handleAnswerCategory = (category) => {
    switch (category) {
      case 'WORDS':
        setAnswer(sample(WORDS));
        break;
      case 'COMPUTERS':
        setAnswer(sample(COMPUTERS));
        break;
      case 'ANIMALS':
        setAnswer(sample(ANIMALS));
        break;
      case 'PLACES':
        setAnswer(sample(PLACES));
        break;
      case 'FOODS':
        setAnswer(sample(FOODS));
        break;
      default:
        setAnswer(sample(WORDS));
        break;
    }
  };
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

  const handleRestart = () => {
    handleAnswerCategory(answerCategory);
    // setAnswer(sample(WORDS));
    setGuess([]);
    setGameStatus('running');
    setTimer('');
    setShowConfetti(true);
  };
  //Lift the state time from TimerSelection
  const [timer, setTimer] = React.useState('');

  //Confetti State
  const [showConfetti, setShowConfetti] = React.useState(true);

  return (
    <>
      <SelectionHolder>
        <CategorySelection
          handleAnswerCategory={handleAnswerCategory}
          setAnswerCategory={setAnswerCategory}
          handleRestart={handleRestart}
        />
        <TimerSelection
          timer={timer}
          setTimer={setTimer}
          handleRestart={handleRestart}
        />
      </SelectionHolder>
      <GuessResults guess={guess} answer={answer} />
      {timer ? (
        <Timer timer={timer} setTimer={setTimer} gameStatus={gameStatus} />
      ) : null}
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <WonBanner answer={guess.length} handleRestart={handleRestart} />
      )}

      {gameStatus === 'won' && (
        <WonConfetti
          showConfetti={showConfetti}
          setShowConfetti={setShowConfetti}
          gameStatus={gameStatus}
        />
      )}

      {gameStatus === 'lost' && (
        <LostBanner
          answer={answer}
          handleRestart={handleRestart}
          textStatus='Sorry, the correct answer is'
        />
      )}
      {timer !== 0 ? null : (
        <LostBanner
          answer={answer}
          handleRestart={handleRestart}
          textStatus={
            <>
              {'Sorry,'}
              <strong> time's up!</strong> {'The correct answer is'}
            </>
          }
        />
      )}
    </>
  );
}

export default Game;
