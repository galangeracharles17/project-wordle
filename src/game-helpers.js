/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

//Format helper which returns integer if true and if false returns num with 2 decimal
function formatNumber(num) {
  if (Number.isInteger(num)) {
    return num; // Return integer
  } else {
    return num.toFixed(2); // Return number with two decimal places as a string
  }
}

// This function serves as label for the 3 categories in time
function timeLabel(fixedTime, currentTimer) {
  let timeResult = fixedTime - currentTimer;
  if (timeResult <= 59) {
    return `${timeResult} seconds`;
  }
  if (timeResult <= fixedTime) {
    if (formatNumber(timeResult / 60) === 1) {
      return `${formatNumber(timeResult / 60)} minute`;
    }

    return `${formatNumber(timeResult / 60)} minutes`;
  }
}

// It will handle the timer text in banner, whenever a player guesses the correct answer
const handleTimer = (timer) => {
  if (timer < 30) {
    return `${30 - timer} seconds`;
  } else if (timer <= 60) {
    return `${60 - timer} seconds`;
  } else if (timer <= 120) {
    return timeLabel(120, timer);
  } else if (timer <= 180) {
    return timeLabel(180, timer);
  }
};

export { checkGuess, handleTimer };
