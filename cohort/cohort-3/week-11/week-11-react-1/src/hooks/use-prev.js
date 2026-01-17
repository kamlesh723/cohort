import { useEffect,useRef } from "react";

export const userPrev = (value)=>{
    const ref = useRef();// it doesn't re-render hten 

    useEffect(()=>{
        ref.current = value;
    },[value])

    return ref.current;
}
//it returns first, then later the effect gets called 



import { useState } from 'react';
// import './App.css'
// import { userPrev } from './hooks/use-prev';

// function App() {
//   const [state, setState] = useState(0);
//   const prev = userPrev(state);
//   console.log(prev)

//   return (
//   <>
//     <p>{state}</p>
//     <button onClick={()=>setState(c=>c+1)}>click me</button>
//     <p>previous state was{prev}</p>
//   </>
//   )
// }

// export default App
