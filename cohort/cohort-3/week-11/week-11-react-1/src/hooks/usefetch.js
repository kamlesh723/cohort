import { use, useEffect, useState } from 'react'
//custom hook
// export default function usePostTitle(){
//      const [post, setPost] = useState({});

//   async function  getPost(){
//    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//    const json = await response.json();
//    setPost(json);
//   }
//   useEffect(()=>{
//     getPost();// directky didn't used fetch here becausein useeffect can't define async, so..
//   })

//   return post.title;
  
// }
export default function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true)

    async function getDetials(){
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
        setLoading(false)
    }
    useEffect(()=>{
        getDetials();
    },[url])
    useEffect(()=>{
        setInterval(getDetials, 10*1000)
    })
    return {
        finalData,
        loading
    }
}



// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/"+ currentPost);
//   return <div>
//     <button onClick={()=>setCurrentPost(1)}>1</button>
//     <button onClick={()=>setCurrentPost(2)}>2</button>
//     <button onClick={()=>setCurrentPost(3)}>3</button>
    
//       {JSON.stringify(finalData)}
//       </div>
    
// }