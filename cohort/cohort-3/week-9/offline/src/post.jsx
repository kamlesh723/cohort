
const style = {width:200,backgroundColor:"white",borderRadius:10, borderColor:"grey",borderWidth:1,padding:8 ,margin:20}

export function PostComponent({name, time, image, subtitle,description}){
    return <div style={style}>
  <div style={{display:"flex"}}>
    <img src={image} style={{width:30,height:30,borderRadius:20}}/>
  <div style = {{fontSize:10,marginLeft:10}}>
  <b>
 {name}
  </b>
  <div>{subtitle}</div>
  {(time!== undefined) ? <div style={{display:'flex'}}>
  <div>{time}</div>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lSvcszFA1ThfJaEiR8Z5VxizVZlr2cpxCw&s"} style={{width:12,height:12}} />
  </div>:null}
  </div>
  </div >
    <div style = {{fontSize:12}}>
        {description}
    </div>
</div>
}
