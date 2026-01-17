import { createContext, useState,useContext } from 'react'
import './App.css'

const CountContext = createContext();

function CountContextProvider({children}) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value = {{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent(){
  return (
    <CountContextProvider >
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  )
}
function Increase(){
  const { setCount } = useContext(CountContext);
  return <button onClick={()=>setCount(c=>c+1)}>Increase</button>
}
function Decrease(){
   const { setCount } = useContext(CountContext);
return  <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
}
function Value() {
  const { count } = useContext(CountContext);
  return <div style={{ fontSize: '2rem', margin: '20px' }}>Count: {count}</div>;
}

const App = ()=>{
  return <div>
    <Parent />
  </div>
};

export default App
