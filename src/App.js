import React, { useState } from 'react';

// import Toggle Class based compoent
// import Toggle from './Toggle';

// import Toggle function based component
import { Toggle } from './Toggle';

const App = () => {

  // const [ state , setState ] = useState(initialValue)
  const [ name , setName ] = useState('')

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <h3>{name}</h3>
      <Toggle />
    </div>
  );
};

export default App;
