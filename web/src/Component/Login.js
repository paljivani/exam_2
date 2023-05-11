
import React, { useEffect, useState } from "react";
import './Apps.css';
import { useNavigate } from "react-router-dom";

function Login() {
  
  useEffect(() => {
    
  }, [])
  let nav= useNavigate()
  
  let [user,setuser]=useState('')
  let [email,setemail]=useState('')
  let [pass,setpass]=useState('')
  let fdata = []
  let set = {
    user : user,
    email : email,
    pass : pass,
  }
  let data = ()=>{
    fdata.push(set)
    JSON.parse(localStorage.getItem('data'))
    let data = localStorage.setItem('data',JSON.stringify(fdata));
    nav("/Home")
  }
  return (
    <div>
      <div className="container">
        <div className="signup-box">
          <div className="box">
            <h2>Sign up</h2>
            <input type="text" placeholder=" user name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="password" required/>
            <button onClick={()=>data()}>sign up</button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;