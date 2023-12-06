import React from 'react';

function TimerSelection({ timer, setTimer, handleRestart }) {
  const timerValue = [
    { value: 30, timer: '30 Seconds' },
    { value: 60, timer: '1 Minute' },
    { value: 120, timer: '2 Minutes' },
    { value: 180, timer: '3 Minutes' },
    { value: '', timer: 'Cancel' },
  ];

  return (
    <div>
      <fieldset
        style={{
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <legend>Timer Selection</legend>
        <select
          id='timerSelection'
          name='timer'
          value={timer}
          onChange={(event) => {
            handleRestart();
            return setTimer(event.target.value);
          }}
        >
          <option value=''>{`--Select Timer--`}</option>
          <optgroup label='Timer'>
            {timerValue.map(({ value, timer }, index) => (
              <option key={index} value={value}>
                {timer}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>
    </div>
  );
}

export default TimerSelection;
