import React from 'react';
import { countdown } from '../../game-helpers';

function Timer({ timer, setTimer, gameStatus }) {
  React.useEffect(() => {
    let timerId;

    if (timer > 0 && gameStatus !== 'lost' && gameStatus !== 'won') {
      timerId = setInterval(() => {
        const nextTimer = timer - 1;
        setTimer(nextTimer);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      return () => clearInterval(timerId);
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
          border: '2px solid hsl(0deg 70% 45%)',
          borderRadius: '4px',
          padding: '8px',
          color: 'hsl(0deg 70% 45%)',
        }}
      >
        {countdown(timer)}
      </span>
    </div>
  );
}

export default Timer;
