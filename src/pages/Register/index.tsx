import React from 'react'
import './index.style.css'
import Input from 'antd/es/input/Input'
export default function Register(){
   return <div className='register-page'>
      <div className='register-form-container'>
         <h1 className='title'>Register</h1>
         <form>
            <div className ='element'>
               <label htmlFor='phone' className='form_input'>Phone Number</label>
               <input type='text' className='form_control' id='phone' name='phone'/>
            </div>
            <div className ='element'>
               <label htmlFor='email' className='form_input'>Email</label>
               <input type='text' className='form_control' id='email' name='email'/>
            </div>
            <div className ='element'>
               <label htmlFor='password' className='form_input'>PassWord</label>
               <input type='text' className='form_control' id='password' name='password'/>
            </div>
            <div className ='element'>
               <label htmlFor='confirm_password' className='form_input'>Confirm PassWord</label>
               <input type='text' className='form_control' id='confirm_password' name='confirmPassword'/>
            </div>

            <input type='submit' className ='submit-btn' value='Register'/>
         </form> 
      </div>
   </div>
}