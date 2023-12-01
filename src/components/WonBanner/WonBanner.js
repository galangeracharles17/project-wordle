import React from 'react';
import Banner from '../Banner';

function WonBanner({ answer }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{answer === 1 ? '1 guess' : `${answer} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
