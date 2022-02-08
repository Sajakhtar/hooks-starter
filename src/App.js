import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';

// import Toggle Class based compoent
// import Toggle from './Toggle';

// import Toggle function based component
import { Toggle } from './Toggle';

// import custom hook
import { useTitleInput } from './hooks/useTitleInput';

import Counter from './Counter'

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


  const reverseWord = (word) => {
    console.log('function called')
    return word.split("").reverse().join("");
  }

  const title = "Level Up Dishes";
  // reverseWord no longer runs every time component re-renders, as long as the title in the array is not changing
  const TitleReveresed = useMemo(() => reverseWord(title), [title]);


  // fetch data from api with both useState and useEffect
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await res.json();
    setDishes(data)
  }

  // apply useEffect on mount
  useEffect( async () => {
    // fetchDishes();
  })


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
        {/* <h1>Level Up Dishes</h1> */}
        <h1>{TitleReveresed}</h1>

        <Toggle />
        <Counter />

        {/* <h3>{name}</h3> */}

        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="type something" />
          <button>Submit</button>
        </form>

        <button onClick={() => console.log(ref.current.className)}>Log Ref</button>

        <button onClick={() => ref.current.classList.add('new-fake-class')}>Ref: Add class</button>

        { dishes.map( (dish) => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              { dish.ingredients.map( (ingredient) => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ) )}



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
