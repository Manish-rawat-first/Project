import React, { useContext, useState } from 'react';
import UserContext from '../content/UserContext';

function Login(){
    const[username,setUserName] = useState('');
    const[password,setPassWord] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder='username' />
            {" "}
            <input type="password"
            value={password}
            onChange={(e)=>setPassWord(e.target.value)}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}
export default Login;