import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

// Importing the Login Componet
import Login from './Login'


function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(

            

            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>

            <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.map((result) => {
            return (
            
                <tr>
                    <td>{result.id}</td>
                    <td>{result.email}</td>
                    <td>{result.username}</td>
                </tr>
            
            )
            })}
 
  
            </tbody>
            </table>

        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;
