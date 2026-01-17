
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />

  </RecoilRoot>
}
function UpdaterComponent(){
    const updateTodo = useResetRecoilState(todosAtomFamily(2));

    useEffect(()=>{
      setTimeout(()=>{
        updateTodo({
          id:"2",
          title:"new Todo",
          decscription:"new todo"
        })
      },5000)
    },[])
    return <div></div>
   }

function Todo({id}) {
   const currentTodo = useRecoilValue(todosAtomFamily(2));
  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  )
}

export default App
