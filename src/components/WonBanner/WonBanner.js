import React from 'react';
import Banner from '../Banner';

function WonBanner({ answer, handleRestart, timer }) {
  function formatNumber(num) {
    if (Number.isInteger(num)) {
      return num.toString(); // Return integer as a string
    } else {
      return num.toFixed(2); // Return number with two decimal places as a string
    }
  }

  const handleTimer = () => {
    if (timer < 30) {
      return `${30 - timer} seconds`;
    } else if (timer <= 60) {
      return `${60 - timer} seconds`;
    } else if (timer <= 180) {
      let ifTime = 180 - timer;

      if (ifTime <= 59) {
        return `${ifTime} seconds`;
      }

      if (ifTime <= 180) {
        if (formatNumber(ifTime / 60) === 1) {
          return `${formatNumber(ifTime / 60)} minute`;
        }

        return `${formatNumber(ifTime / 60)} minutes`;
      }
    }
  };

  return (
    <Banner status='happy' action={handleRestart} actionText='Restart Game'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{answer === 1 ? '1 guess' : `${answer} guesses`}</strong>{' '}
        {timer === '' ? null : (
          <>
            {'and in '}
            <strong>{handleTimer()}</strong>.
          </>
        )}
      </p>
    </Banner>
  );
}

export default WonBanner;
