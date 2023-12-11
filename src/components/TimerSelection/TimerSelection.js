import React from 'react';

function TimerSelection({ setTimer, handleRestart }) {
  const [selectTimer, setSelectTimer] = React.useState('');

  const timerValue = [
    { value: 30, timer: '30 Seconds' },
    { value: 60, timer: '1 Minute' },
    { value: 120, timer: '2 Minutes' },
    { value: 180, timer: '3 Minutes' },
    { value: '', timer: 'Cancel' },
  ];

  // It prevents render loop
  // Ensuring correct timing
  React.useEffect(() => {
    setTimer(selectTimer);
  }, [setTimer, selectTimer]);

  return (
    <>
      <select
        id='timerSelection'
        name='timer'
        className='select-timer'
        value={selectTimer}
        onChange={(event) => {
          handleRestart();
          setSelectTimer(event.target.value);
        }}
      >
        <option disabled value=''>
          Select Timer
        </option>
        {timerValue.map(({ value, timer }, index) => (
          <option key={index} value={value}>
            {timer}
          </option>
        ))}
      </select>
    </>
  );
}

export default TimerSelection;
