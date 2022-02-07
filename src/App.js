import React, { useState, useEffect } from 'react';

// import Toggle Class based compoent
// import Toggle from './Toggle';

// import Toggle function based component
import { Toggle } from './Toggle';

const App = () => {

  // const [ state , setState ] = useState(initialValue)
  // const [ name , setName ] = useState('')

  // use Custom Hook
  const [ name , setName ] = useTitleInput('')

  // useEffect(() => {
  //   // set page title to name state
  //   document.title = name;
  // })

  return (
    // <div className="main-wrapper">
    //   <h1>Level Up Dishes</h1>
    //   <Toggle />
    //   {/* <h3>{name}</h3> */}
    //   <form onSubmit={(e) => {
    //     e.preventDefault();
    //     formSubmit(name, setName);
    //   }}>
    //     <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="email" />
    //     <button>Submit</button>
    //   </form>
    // </div>

    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      {/* <h3>{name}</h3> */}
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="type something" />
        <button>Submit</button>
      </form>
    </div>
  );
};


// could be pulled in from another file
// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}`)
//   setValue('')
// }

// Custom Hook
function useTitleInput(initialValue) {
  const [ value , setValue ] = useState(initialValue)

  useEffect(() => {
    // set page title to name state
    document.title = value;
  });

  return [ value, setValue ];
}


export default App;
