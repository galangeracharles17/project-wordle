import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
  // Create a use state that will handle the input
  const [guessItem, setGuessItem] = React.useState('');

  const handleEvent = (event) => {
    event.preventDefault();
    // Calling the handle guess to pass the value of input.
    handleAddGuess(guessItem);
    // console.log(guessItem);

    setGuessItem('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleEvent}>
      <label htmlFor='geuss-input'>Enter guess:</label>

      <input
        id='guessInput'
        type='text'
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title='5 letter word'
        value={guessItem}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuessItem(nextGuess);
        }}
      ></input>
    </form>
  );
}

export default React.memo(GuessInput);
