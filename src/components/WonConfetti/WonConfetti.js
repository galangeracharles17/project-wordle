import React from 'react';
import Confetti from 'react-confetti';
function WonConfetti({ showConfetti, setShowConfetti, gameStatus }) {
  const fixedWindowSize = {
    width: window.innerWidth,
    height: document.documentElement.scrollHeight || window.innerHeight,
  };

  React.useEffect(() => {
    let confettiDurationId;

    if (gameStatus === 'won' && showConfetti === true) {
      confettiDurationId = setTimeout(() => {
        setShowConfetti(false);
        return () => clearTimeout(confettiDurationId);
      }, 10000);
    }
  }, [gameStatus, showConfetti, setShowConfetti]);

  return showConfetti ? (
    <Confetti width={fixedWindowSize.width} height={fixedWindowSize.height} />
  ) : null;
}

export default WonConfetti;
