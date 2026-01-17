import { useState ,useEffect} from 'react'
import './App.css'
import { use } from 'react';

// function App(){
//   const[currentTab, setCurrentTab] = useState(1);
//   const[tabData, setTabdata] = useState({});
//   const[loading, setloading] = useState(true);
//   useEffect(function(){
//     setloading(true)
//     console.log("send request to get data for Tab "+ currentTab);
//     fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
//     .then(async res =>{
//       const json =await res.json();
//       setTabdata(json)
//       setloading(false)
//     })
//   },[currentTab])

//   return <div>
//     <button onClick={function(){ setCurrentTab(1) }}
//     style={{color:currentTab==1 ? "red":"black"}}>Todo #1</button>
//     <button onClick={function(){ setCurrentTab(2) }}
//     style={{color:currentTab==2 ? "red":"black"}}>Todo #2</button>
//     <button onClick={function(){ setCurrentTab(3) }}
//     style={{color:currentTab==3 ? "red":"black"}}>Todo #3</button>
//     <button onClick={function(){ setCurrentTab(4) }}
//     style={{color:currentTab==4 ? "red":"black"}}>Todo #4</button>
//   <br />
//     {loading ? "Loading..." :tabData.title}
//   </div>

// }






//conditonal rendering is used when i give codntion true then render and false then don't render
function App() {
const [count ,setCount] = useState(0);
const [count2 ,setCount2] = useState(0);

function increseCount(){
  setCount(count=>count+1)
}
function decreseCount(){
  setCount2(count=>count-1)
}

useEffect(function(){
  console.log("above setInterval")
 let clock  =  setInterval(increseCount,5000);
  setInterval(decreseCount,8000)
  return function(){
    clearInterval(clock)
  }
},[]);
useEffect(function(){
  console.log("the count has been updated to "+ count)
},[count,count2]);// to know 
  
  return <div>
    <h1 id='text'>{count} {count2}</h1>
  </div>
}

export default App