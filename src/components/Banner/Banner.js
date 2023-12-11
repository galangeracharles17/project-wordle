import React from 'react';

function Banner({ status, children, action, actionText }) {
  const StatusButton = () => {
    const className =
      status === 'happy' ? 'btn-restart-happy' : 'btn-restart-sad';

    return (
      <button className={className} onClick={action}>
        {actionText}
      </button>
    );
  };

  return (
    <div className={`${status} banner`}>
      {children}
      <StatusButton />
    </div>
  );
}

export default Banner;
