 
 function MainNav(){
    return (
        <header className= "header">
            <div className = "logo" ><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qYiWVkmi5I3nYu5ztnolXHXf08rVQfYQKw&s"
          alt="ALLEN Logo"style={{height: 70 , display: "block",margin: 0,padding: 0,boxSizing:"border-box"}}
        /></div>

            <nav className="nav">
                <a href = "#">ClassRoomCourses</a>
                <a href = "#">OnlineCourses</a>
                <a href = "#">TestSeries</a>
                <a href = "#">Results</a>
                 <a href = "#">Studymaterials</a>
                  <a href = "#">Scholarship</a>
                   <a href = "#">AllenE-Store</a>
                    <a href = "#">More</a>
            </nav>
            <button className="login-btn">Login</button>
        </header>
    )
    
}
export default MainNav