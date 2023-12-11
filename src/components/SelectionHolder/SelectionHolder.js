import React from 'react';

function SelectionHolder({ children }) {
  return (
    <>
      <fieldset>
        <legend>Categories & Timer</legend>
        {children}
      </fieldset>
    </>
  );
}

export default SelectionHolder;
