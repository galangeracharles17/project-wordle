import React from 'react';

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <StatusButton status={status} action={action} actionText={actionText} />
    </div>
  );
}

// Status for button component
const StatusButton = ({ status, action, actionText }) => {
  const className =
    status === 'happy' ? 'btn-restart-happy' : 'btn-restart-sad';

  return (
    <button className={className} onClick={action}>
      {actionText}
    </button>
  );
};

export default Banner;
