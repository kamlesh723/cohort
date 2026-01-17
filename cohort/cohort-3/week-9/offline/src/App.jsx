import { useState } from 'react'
import { PostComponent } from './post'

// assignment create linkedIn top bar 
function App() {
  const [posts,  setPost] = useState([]);

   const postComponent = posts.map(post => <PostComponent
     name = {post.name}
          subtitle = {post.subtitle}
          time = {post.time}
          image={post.image}
          description={post.description}/>
  )


  function addPost(){
    setPost([...posts,{
    name:"Kamlesh",
    subtitle:"10,000 followers",
    time:"4m ago",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YIGV8GTRHiW_KACLMhhi9fEq2T5BDQcEyA&s",
    description:"Want to know how to win big? Check Out how these folks won 6000$ Bounty"
    }])
  } 

  return (
    <div style={{background:"#dfe6e9", height:"100vh",}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{
        display:"flex", justifyContent:"center"
      }}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )
}
export default App
