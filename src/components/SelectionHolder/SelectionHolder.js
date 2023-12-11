import React from 'react';

function SelectionHolder({ children }) {
  return (
    <>
      <fieldset>
        <legend>Timer & Categories</legend>
        {children}
      </fieldset>
    </>
  );
}

export default SelectionHolder;
