function App() {
  const [showTimer, setshowTimer] = useState(0)

  return <div style={{display:"flex",background:"grey"}}>
    <Card>
     hii mf's
    </Card>
    <Card>
  <div style={{color:'red'}}>
      What do you want to post <br /> <br />
      <input type="text" />
      </div>
</Card>
  </div>
}
  function Card({children}){
    return <div style={{background:"black", borderRadius:10,color:"white", padding:10,margin:10}}>
      {children}
    </div>
  }
export default App