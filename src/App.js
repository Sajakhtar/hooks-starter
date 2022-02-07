import React, { useState, useEffect, useRef, createContext } from 'react';

// import Toggle Class based compoent
// import Toggle from './Toggle';

// import Toggle function based component
import { Toggle } from './Toggle';

// import custom hook
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();


const App = () => {

  // const [ state , setState ] = useState(initialValue)
  // const [ name , setName ] = useState('')

  // use Custom Hook
  const [ name , setName ] = useTitleInput('')


  // useEffect(() => {
  //   // set page title to name state
  //   document.title = name;
  // })

  // useRef hook for DOM elements
  const ref = useRef();
  // console.log('ref', ref.current);

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

    <UserContext.Provider value={{ user: true }}>

      <div className="main-wrapper" ref={ref}>
        <h1>Level Up Dishes</h1>
        <Toggle />
        {/* <h3>{name}</h3> */}
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="type something" />
          <button>Submit</button>
        </form>
        <button onClick={() => console.log(ref.current.className)}>Log Ref</button>
        <button onClick={() => ref.current.classList.add('new-fake-class')}>Ref: Add class</button>
      </div>

    </UserContext.Provider>
  );
};


// could be pulled in from another file
// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}`)
//   setValue('')
// }

// Custom Hook
// function useTitleInput(initialValue) {
//   const [ value , setValue ] = useState(initialValue)

//   useEffect(() => {
//     // set page title to name state
//     document.title = value;
//   });

//   return [ value, setValue ];
// }


export default App;
