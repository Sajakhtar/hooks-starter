import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
  const [ value , setValue ] = useState(initialValue)

  useEffect(() => {
    // set page title to name state
    document.title = value;
  });

  return [ value, setValue ];
}


export { useTitleInput };
