import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss'
import { IMAGE_PATH } from 'src/constants/images';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { isEmailValid, isEmptyValue } from 'src/utils';
import Select from './Select'
const initFormValue = {
  email: "",
  password: "",
  phone: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  country: ""
}
interface FormValues {
  [key: string]: string;
}
interface RegisterProps {
  onClick: () => void
}
export default function Register({ onClick }: RegisterProps) {
  const [formValue, setFormValue] = useState<FormValues>(initFormValue);
  const [formError, setFormError] = useState<FormValues>({});
  const [activePassword, setActivePassword] = useState(true);
  const [activeConfirmPassword, setActiveConfirmPassword] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const error: { [key: string]: string } = {};
    if (isEmptyValue(formValue.firstName)) {
      error.firstName = "First name is required!"
    }
    if (isEmptyValue(formValue.lastName)) {
      error.lastName = "Last name is required!"
    }
    if (isEmptyValue(formValue.email)) {
      error.email = "Email is required!";
    } else {
      if (!isEmailValid(formValue.email)) {
        error.email = "Email is invalid!";
      }
    }
    if (isEmptyValue(formValue.phone)) {
      error.phone = "Phone is required!";
    } else if (formValue.phone.length < 9 || formValue.phone.length >= 10) {
      error.phone = "Phone number is invalid!"
    }
    if (isEmptyValue(formValue.password)) {
      error.password = "Password is required!";
    } else {
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error.confirmPassword = "Confirm password is required!";
    } else if (formValue.confirmPassword !== formValue.password) {
      error.confirmPassword = "Confirm password does not match!"
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form value : ", formValue);
    } else {
      console.log("Form invalid")
    }
  };
  return (
    <div className="">
      <div className="flex w-[600px] m-auto -mt-24">
        {/* register */}
        <div style={{ width: '60%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
          <h1 className=''>Sign Up</h1>
          {/*Đây là form Sign Up */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="text-base">
              FirstName
              <span className="text-red-600">*</span>
            </label>
            <div className="mb-4">
              <input
                type="text"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200 ${formError.firstName ? "border-red-400" : "border-blue-200"}`}
                id="firstName"
                name="firstName"
                value={formValue.firstName}
                onChange={handleChange}
                placeholder="Enter your firstName"
              />
            </div>
            <div className="-mt-3 h-3 mb-2 text-red-700 text-sm font-semibold">{formError.firstName}</div>
            <label htmlFor="lastName" className="text-base">
              LastName
              <span className="text-red-600">*</span>
            </label>
            <div className="mb-4">
              <input
                type="text"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200 ${formError.lastName ? "border-red-400" : "border-blue-200"}`}
                id="lastName"
                name="lastName"
                value={formValue.lastName}
                onChange={handleChange}
                placeholder="Enter your lastName"
              />
            </div>
            <div className="-mt-3 h-3 mb-2 text-red-700 text-sm font-semibold">{formError.lastName}</div>
            <label htmlFor="email" className="text-base">
              Email
              <span className="text-red-600">*</span>
            </label>
            <div className="mb-4">
              <input
                type="text"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200 ${formError.email ? "border-red-400" : "border-blue-200"}`}
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="-mt-3 h-3 mb-2 text-red-700 text-sm font-semibold">{formError.email}</div>

            <label htmlFor="sdt" className="text-base">
              Phone Number
              <span className="text-red-600">*</span>
            </label>
            <div className="mb-4">
              <Select />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValue.phone}
                onChange={handleChange}
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-[180px] focus:outline-none focus:border-blue-200 pl-[60px] ${formError.phone ? "border-red-400" : "border-blue-200"}`}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="-mt-3 mb-2 h-3 text-red-700 text-sm font-semibold">{formError.phone}</div>
            <label htmlFor="passWord" className="text-base">
              Password
              <span className="text-red-600">*</span>
            </label>
            <div className='mb-4'>
              <input
                type={`${activePassword ? "password" : "text"}`} // điều kiện active hiện lên số, chữ 
                id="password"
                name="password"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 pr-8 w-52 focus:outline-none focus:border-blue-200 ${formError.password ? "border-red-400" : "border-blue-200"}`}
                value={formValue.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {activePassword ? <EyeOutlined className="-ml-[30px]" onClick={() => setActivePassword(!activePassword)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActivePassword(!activePassword)} />}
            </div>
            <div className="-mt-3 mb-2 h-3 text-red-700 text-sm font-semibold">{formError.password}</div>
            <label htmlFor="confirmPassword" className="text-base">
              ConfirmPassword
              <span className="text-red-600">*</span>
            </label>
            <div className='mb-4'>
              <input
                type={`${activeConfirmPassword ? "password" : "text"}`} // điều kiện active hiện lên số, chữ 
                id="confirmPassword"
                name="confirmPassword"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 pr-8 w-52 focus:outline-none focus:border-blue-200 ${formError.confirmPassword ? "border-red-400" : "border-blue-200"}`}
                value={formValue.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {activeConfirmPassword ? <EyeOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} />}
            </div>
            <div className="-mt-3 mb-3 h-3 text-red-700 text-sm font-semibold">{formError.confirmPassword}</div>
            <div className='flex justify-center mb-2'>
              <input type="submit" className="w-28 h-9 border-solid border-pink-200 rounded-md bg-white font-bold text-pink-500 text-base hover:bg-pink-600 hover:text-white hover:cursor-pointer" value="Sign Up" />
            </div>
            <div className='flex justify-center mb-3 cursor-pointer text-blue-400' onClick={onClick}>
              I have an account
            </div>
          </form>
        </div>
        {/* Đây là ảnh */}
        <div className=" rounded-lg" style={{ width: '40%', backgroundImage: `url(${IMAGE_PATH.LOGIN})` }}>
        </div>
      </div>
    </div>
  );
}
