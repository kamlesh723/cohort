// import { useState,useRef } from 'react';
// // state mangmnet , how to do it .....Rolling up the state

// function App() {
//   return <div>
//    <LightBulb />
//   </div>
  
// }
// //  bulbOn is prop to the bulb state component
// // bulbOn , setBulOn are props to the toggle bulbState componet, it mean , in this i pass these both , then it will both will be the props of that component
// function LightBulb(){
//   const [bulbOn, setBulbOn] = useState(true)
//   return <div>
//     <BulbState bulbOn={bulbOn}/>
//     <TogglebulbState setBulbOn = {setBulbOn}/>
//   </div>
// }
// function BulbState({bulbOn}){
  
//   return <div>
//     {bulbOn ? "bulb On":"Bulb Off"}

//   </div>
// }
// function TogglebulbState({setBulbOn}){

//   function toggle(){
//     setBulbOn(currentState => !currentState)
//   }


//   return <div>
//     <button onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }
// export default App
