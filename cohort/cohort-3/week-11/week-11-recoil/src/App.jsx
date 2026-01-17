import { useEffect, useState,memo } from 'react';

const App = () => {
  return (
        <Counter />
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[])

  return (
    <div>
      <Increase  />
      <Decrease  />
      <CurrentCount/>
    </div>
  );
}
function Increase() {
    
  return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
}

function Decrease() {
  
  return <button onClick={() => setCount(c => c - 1)}>Decrease</button>;
}

function CurrentCount() {
  return <div >1</div>;
}


export default App;