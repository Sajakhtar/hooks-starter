// CLASS BASED COMPONET TO REFACTOR

// import React, { Component } from "react";

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }


// ********************************************

// FUNCTION BASED COMPONENT

import React, { useState } from 'react';

export const Toggle = () => {

  const [ isToggled , setIsToggled ] = useState(false)

  return (
    <div>
        <button onClick={() => setIsToggled(!isToggled) }>Toggle</button>
        { isToggled && <h2>Hello!</h2> }
    </div>
  )
}