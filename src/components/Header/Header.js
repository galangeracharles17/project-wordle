import React from 'react';
import { GoQuestion } from 'react-icons/go';
// import Modal from '../Modal';
// import { range } from '../../utils';
// import Guess from '../Guess/Guess';
// import styles from './Header.module.css';

function Header() {
  // const DATA = ['breaks', 'trials', 'heart'];
  // const RULES = [
  //   {
  //     guess: 'hobby',
  //     message: "The letter 'H' is in the word and in the correct spot",
  //   },
  //   {
  //     guess: 'brown',
  //     message: "The letter 'R' is in the word but in the wrong place",
  //   },
  //   {
  //     guess: 'clown',
  //     message: 'The letter with gray color is not in the actual word',
  //   },
  // ];

  return (
    <header>
      <h1>
        <span className='wordle-header'>W</span>
        <span className='wordle-header'>o</span>
        <span className='wordle-header'>r</span>
        <span className='wordle-header'>d</span>{' '}
        <span className='wordle-header'>G</span>
        <span className='wordle-header'>a</span>
        <span className='wordle-header'>m</span>
        <span className='wordle-header'>e</span>
      </h1>
      <GoQuestion />
      {/* <Modal>
        <div className={styles.contentWrapper}>
          <div className={styles.guessModal}>
            {range(6).map((num, index) => (
              // Capture the guess array element
              <Guess key={index} value={DATA[num]} answer={'HEART'} />
            ))}
          </div>
          <div className={styles.instructionContainer}>
            <h2>How to play?</h2>
            <h3>Guess the wordle in 6 tries</h3>
            <ul>
              <li>Each guess must be a valid 5 letter words</li>
              <li>
                After each guess, the color will change to show how close your
                guess to the actual word
              </li>
            </ul>
            <div className={styles.rulesContent}>
              {RULES.map(({ guess, message }, index) => (
                <React.Fragment key={index}>
                  <Guess value={guess} answer={'HEART'} />
                  <p>{message}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Modal> */}
    </header>
  );
}

export default Header;
