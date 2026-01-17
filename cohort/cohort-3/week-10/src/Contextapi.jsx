// import { useState, createContext, useContext} from 'react';

// const BulbContext = createContext();// create context
// function BulbProvider({children}){
//   const [bulbOn, setBulbOn] = useState(true);
//   return <BulbContext.Provider  value = {{bulbOn:bulbOn ,setBulbOn:setBulbOn}}>
//     {children}
//   </BulbContext.Provider>
// }
// function App() {
  
//   return <div>
//     {/* wrap the content inside provider */}
//     <BulbProvider>
//      <Light />
//     </BulbProvider>
//   </div>
// }

// function Light(){
//   return <div>
//     <LightBulb />
//     <LightSwitch/>
//   </div>
// }

// function LightBulb(){
//   const {bulbOn} = useContext(BulbContext);// use the context 
//   return <div>
//     {bulbOn ? "bulb On":"Bulb Off"}
//   </div>
// }
// function LightSwitch(){
//   const {bulbOn,setBulbOn} = useContext(BulbContext);
//   function toggle(){
//     setBulbOn(currentState => !currentState)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the Bulb</button>
//   </div>
// }
// export default App
