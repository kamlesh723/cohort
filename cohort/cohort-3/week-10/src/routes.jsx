// import { useState } from 'react'
// import { BrowserRouter, Routes,Route,Link ,useNavigate, Outlet} from 'react-router-dom'
// function App() {
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element= {<LayOut/>}>
//         <Route path='/neet/online-coaching-class-11' element = {<Class11Program />} />
//         <Route path='/neet/online-coaching-class-12' element = {<Class12Program />} />
//         <Route path='/' element = {<Landing />} />
//         <Route path='*' element = {<NoPage />} />
//        </Route>
//     </Routes>
//     footer | Contact US
//     </BrowserRouter>
//   </div>
// }

// function LayOut(){
//   return <div style={{height:"100vh"}}>
//      <Link to= "/">Allen</Link>
//     <Link to= "/neet/online-coaching-class-11">Class</Link>
//     <Link to= "/neet/online-coaching-class-12">Online</Link>
//   <div  style={{height:"90vh", background:"red"}}>
//     <Outlet />
//   </div>
//   </div>
// }
// function Class11Program(){
//   return <div>
//     class 11th neet preparation 
//   </div>
// }
// function Class12Program(){
//   const navigate = useNavigate();
//   function redirectuser(){
//     navigate("/")
//   }
//   return <div>
//     class 12th neet preparation
//     <br />
//     <button onClick={redirectuser}>redirect to landing Page</button>
//   </div>
// }
// function Landing(){
//   return <div>
//     welcome to allen
//   </div>
// }
// function NoPage(){
//   return <div>
//     Sorry Page not Found
//   </div>
// }

// export default App
