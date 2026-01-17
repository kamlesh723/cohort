import { useState } from 'react'
import './App.css'

function App() {
//useref
  const [todos, setTodos] = useState([
    {
    title:"go to gym",
    description: "Hit the gym regularly",
    done:false
  },
])
function addTodo(){
  // setTodos = [...newArray,{
    // title:
    // description
    // done:
  // }]//will iterate using for loop to todos push in array, and then the new thing you want to push in that array ,title, descr, done

  let newArray = []
  for(let i=0;i<todos.length;++i){
    newArray.push(todos[i])
  }
  newArray.push({
    title:"eat food",
    description:"Food Eat Properly",
    done:false
  })
  setTodos(newArray)
}
  return (
    <div>
      <input id='title' type="text" placeholder='title'/>
      <input type="text" id='description' placeholder='description' />
      <br />
       <button onClick={addTodo} >Add Todo</button>
       <br />
      { todos.map(todo=><Todo  key ={1} title={todo.title} description={ todo.description} done = {todo.done}/>)}
    </div>
  )
}
function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
       <h1>{props.description}</h1>
      <h1>{props.done}</h1>

    </div>
  )
}
export default App
