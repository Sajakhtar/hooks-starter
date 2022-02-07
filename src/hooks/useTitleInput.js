import { useState, useEffect, useDebugValue } from 'react';

function useTitleInput(initialValue) {
  const [ value , setValue ] = useState(initialValue)

  useEffect(() => {
    // set page title to name state
    document.title = value;
  });

  // A customized way to test something and see the result in the React Dev Tools
  useDebugValue(value.length > 0 ? 'full' : 'empty');

  return [ value, setValue ];
}


export { useTitleInput };
