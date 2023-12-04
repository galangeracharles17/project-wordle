import React from 'react';
import Banner from '../Banner';
import { handleTimer } from '../../game-helpers';

function WonBanner({ answer, handleRestart, timer }) {
  return (
    <Banner status='happy' action={handleRestart} actionText='Restart Game'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{answer === 1 ? '1 guess' : `${answer} guesses`}</strong>{' '}
        {timer === '' ? null : (
          <>
            {'and in '}
            <strong>{handleTimer(timer)}</strong>.
          </>
        )}
      </p>
    </Banner>
  );
}

export default WonBanner;
