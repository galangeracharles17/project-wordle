import React from 'react';

function Timer({ timer, setTimer }) {
  console.log(timer, 'timer2');
  React.useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => {
        const nextTimer = timer - 1;
        setTimer(nextTimer);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [timer]);

  return <div className='timer'>{timer}</div>;
}

export default Timer;
