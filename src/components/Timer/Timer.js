import React from 'react';
import { countdown } from '../../game-helpers';

function Timer({ timer, setTimer, gameStatus }) {
  React.useEffect(() => {
    let timerId;

    if (timer > 0 && gameStatus !== 'lost' && gameStatus !== 'won') {
      timerId = setTimeout(() => {
        const nextTimer = timer - 1;
        setTimer(nextTimer);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      return () => clearTimeout(timerId);
    }
  }, [setTimer, timer, gameStatus]);

  return (
    <div
      className='timer'
      style={{
        textAlign: 'center',
      }}
    >
      <span
        style={{
          backgroundColor: 'hsl(0deg 70% 45%)',
          borderRadius: '4px',
          padding: '8px',
          color: 'white',
        }}
      >
        {countdown(timer)}
      </span>
    </div>
  );
}

export default Timer;
