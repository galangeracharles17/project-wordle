import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, handleRestart, textStatus }) {
  return (
    <Banner status='sad' action={handleRestart} actionText='Restart Game'>
      <p>
        {textStatus} <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
