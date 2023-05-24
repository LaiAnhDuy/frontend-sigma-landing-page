import React from 'react'
import './index.style.css'
import {useState} from 'react'
export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    return (
       <form>
          <label htmlFor='email'>email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='mhata20@gmail.com' id='email'/>
          <label id='passWord'>passWord</label>
          <input value={password} onChange={(e)=>setPassWord(e.target.value)} type='passWord' placeholder='******' id='passWord' />
          <button>Register</button>
       </form> 
    ) 
}