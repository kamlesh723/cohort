// create the linkedin notification

export function notificationComponent(){
  return (
    <div>
      <ToggleMessage />
    </div>
  )
}
const ToggleMessage = ()=>{
  const[notificationCount, setNotificationCount] = useState(0)

  console.log("re-render")
  function increament(){
    setNotificationCount(notificationCount+1);
  }

return <div>
  <button onClick={increament}>Increase Count</button>
    {notificationCount}
</div>
}