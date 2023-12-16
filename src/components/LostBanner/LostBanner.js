import React from 'react';
import Banner from '../Banner';
import { handleData } from '../../api-data';

function LostBanner({ answer, handleRestart, textStatus }) {
  //Handle the value of promises
  const [definition, setDefinition] = React.useState('');
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState('idle');
  // console.log(status);

  React.useEffect(() => {
    handleData(answer, setDefinition, setError, setStatus);
  }, [answer, setDefinition, setError, setStatus]);

  return (
    <Banner status='sad' action={handleRestart} actionText='Restart Game'>
      <p>
        {textStatus} <strong>{answer}</strong>.
        <strong style={{ display: 'block', marginTop: '8px' }}>Meaning</strong>
        {status === 'loading' ? <p>Loading...</p> : ''}
        {status === 'error' ? error : ''}
        {status === 'success' ? definition : ''}
        {status === 'undefined' ? (
          <p>Sorry, cannot find the meaning {`:<`}</p>
        ) : (
          ''
        )}
      </p>
    </Banner>
  );
}

export default LostBanner;
