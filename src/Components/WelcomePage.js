import { Route } from "react-router-dom"


 const  WelcomePage =()=>{
    return(

        <>
           <h2>Welcome Page</h2>

           <Route path='/welcome/new-user'>
            <h2>New User</h2>
           </Route>
        
        </>
     
    )
}

export default WelcomePage
