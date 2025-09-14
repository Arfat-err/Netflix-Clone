import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
const [signState , setSignstate] = useState("Sign In");
const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [loading , setLoading] = useState(false);

const user_Auth = async(e) =>{
  e.preventDefault();
  setLoading(true);
  if(signState === "Sign In"){
    await login(email,password);
  }else{
    await signup(name,email,password);

  }
  setLoading(false);
}

  return (
    loading ? <div className='login-spinner'><img src={netflix_spinner} alt="loading"/></div> :
    <div className='login'>
      <img src={Logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='your name' /> :<></>}
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={user_Auth} type='submit'>{signState}</button>
          <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remeber Me</label>
          </div>
          <p className='form-help'>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => setSignstate("Sign Up")}>Sign Up Now</span></p> : <p >New to Netflix? <span onClick={() => setSignstate("Sign In")}>Sign In Now</span></p>}
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Login
