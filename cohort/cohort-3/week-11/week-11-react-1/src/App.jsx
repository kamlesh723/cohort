import { useState,useRef } from 'react';
import './App.css'
function useDebounce(originalFn){
  const currentClock = useRef();
const fn =()=>{
  clearTimeout(currentClock.current);
  currentClock.current = setTimeout(originalFn,200);
}
return fn;
}
function App() {
  function sendDataToBackend(){
    fetch("api.amazon.in/search");
  }
  const debounceFn = useDebounce(sendDataToBackend);
  return <div>
    <input type="text" onChange={debounceFn} />
  </div>
}

export default App
