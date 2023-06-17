import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss'
import { IMAGE_PATH } from 'src/constants/images';
import { Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { EyeInvisibleOutlined, EyeOutlined, GoogleOutlined } from '@ant-design/icons';
import { isEmailValid, isEmptyValue } from 'src/utils';
import Select from './Select'
const initFormValue = {
  email: "",
  password: "",
  phone: "",
  confirmPassword: ""
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
      error.confirmPassword = "Confirm password not match!"
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
  console.log(formError);
  return (
    <div className="login-page my-4">
      <div className="" style={{ display: 'flex', width: 600, margin: 'auto' }} >
        {/* register */}
        <div style={{ width: '60%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
          <h1 className=''>Sign Up</h1>
          <div className="flex justify-center -mt-2">
            <GoogleOutlined className="google mx-2" />
            <FontAwesomeIcon icon={faFacebookF} className="mx-2 rounded-[100%] border-solid p-1 px-2" />
            <FontAwesomeIcon icon={faTwitter} className="mx-2 rounded-[100%] border-solid p-1" />
            <FontAwesomeIcon icon={faInstagram} className="mx-2 rounded-[100%] border-solid p-1 px-1" />
          </div>
          {/*Đây là form Sign Up */}
          <form onSubmit={handleSubmit}>
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
              />
              {activeConfirmPassword ? <EyeOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} />}
            </div>
            <div className="-mt-3 mb-3 h-3 text-red-700 text-sm font-semibold">{formError.confirmPassword}</div>
            <Checkbox onChange={() => { }} className="flex justify-start text-sm mb-4">Remember password</Checkbox>
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
