import React from 'react';
import Banner from '../Banner';
import { handleData } from '../../api-data';

function LostBanner({ answer, handleRestart, textStatus }) {
  //Handle the value of promises
  const [definition, setDefinition] = React.useState('');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    handleData(answer, setDefinition, setError);
  }, [answer, setDefinition, setError]);

  return (
    <Banner status='sad' action={handleRestart} actionText='Restart Game'>
      <p>
        {textStatus} <strong>{answer}</strong>.
        <strong style={{ display: 'block', marginTop: '8px' }}>Meaning</strong>
        {error ? error : definition}
      </p>
    </Banner>
  );
}

export default LostBanner;
