/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { Checkbox, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  GoogleOutlined,
} from '@ant-design/icons';
import { isEmailValid, isEmptyValue, isPasswordValid } from 'src/utils';
import { authApi } from 'src/api/auth-api';
import ROUTE from 'src/constants/route';
import { Link } from 'react-router-dom';
import { addUser } from 'src/redux/auth/action';
import { useDispatch } from 'react-redux';
import apiCaller from 'src/api/apiCaller';
import { RRError } from 'src/types/Api';

const initFormValue = {
  email: '',
  password: '',
};
interface FormValues {
  [key: string]: string;
}
interface LoginProps {
  signIn: () => void;
  onClick: () => void;
  handleForgot: () => void;
}
export default function Login({ signIn, onClick, handleForgot }: LoginProps) {
  const [formValue, setFormValue] = useState<FormValues>(initFormValue);
  const dispatch = useDispatch();
  const [formError, setFormError] = useState<FormValues>({});
  const [active1, setActive1] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const loginRequest = async () => {
    const data = {
      email: formValue.email,
      password: formValue.password,
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: authApi.login(data),
      errorHandler,
    });
    if (response) {
      console.log('response ', response);
      signIn();
      message.success('Login successfully');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('role', response.data.user.role);
      dispatch(addUser(response.data));
    }
  };
  const validateForm = () => {
    const error: { [key: string]: string } = {};
    if (isEmptyValue(formValue.email)) {
      error.email = 'Email is required!';
    } else {
      if (!isEmailValid(formValue.email)) {
        error.email = 'Email is invalid!';
      }
    }
    if (isEmptyValue(formValue.password)) {
      error.password = 'Password is required!';
    } else if (!isPasswordValid(formValue.password)) {
      error.password = 'Password is not correct!';
    } else {
    } // check password valid or invalid
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
    } else {
    }
  };
  return (
    <div className="login-page my-4">
      <div className="flex w-[600px] m-auto">
        <div
          style={{
            width: '60%',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <h1 className="">Sign In</h1>
          <div className="flex justify-center">
            <GoogleOutlined className="google mx-2" />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="mx-2 rounded-[100%] border-solid p-1 px-2"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-2 rounded-[100%] border-solid p-1"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-2 rounded-[100%] border-solid p-1 px-1"
            />
          </div>
          <p className="text-sm">or sign in with:</p>
          {/*Đây là form  */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-lg ">
              Email
              <span className="text-red-600">*</span>
            </label>
            <div className="mb-4">
              <input
                type="text"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200 ${
                  formError.email ? 'border-red-400' : 'border-blue-200'
                }`}
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <div className="h-3 text-red-700 text-sm font-semibold">
                {formError.email}
              </div>
            </div>
            <label htmlFor="passWord" className="text-lg">
              Password
              <span className="text-red-600">*</span>
            </label>
            <div className="">
              <input
                type={`${active1 ? 'password' : 'text'}`} // điều kiện active hiện lên số, chữ
                id="password"
                name="password"
                className={`border-solid rounded-sm border-blue-200 border-2 h-7 pr-8 w-52 focus:outline-none focus:border-blue-200 ${
                  formError.password ? 'border-red-400' : 'border-blue-200'
                }`}
                value={formValue.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {active1 ? (
                <EyeOutlined
                  className="-ml-[30px]"
                  onClick={() => setActive1(!active1)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="-ml-[30px]"
                  onClick={() => setActive1(!active1)}
                />
              )}
            </div>
            <div className="h-3 text-red-700 text-sm font-semibold mb-4">
              {formError.password}
            </div>
            <Checkbox
              onChange={() => {}}
              className="flex justify-start text-sm mb-4"
            >
              Remember password
            </Checkbox>
            <div className="flex justify-center mb-2">
              <input
                type="submit"
                className="w-28 h-9 border-solid border-pink-200 rounded-md bg-white font-bold text-pink-500 text-base hover:bg-pink-600 hover:text-white hover:cursor-pointer"
                onClick={loginRequest}
                value="Sign In"
              />
            </div>
            <div
              className="flex justify-center cursor-pointer text-blue-400"
              onClick={onClick}
            >
              I have not an account
            </div>
            <Link to={ROUTE.FORGOT_PASSWORD} onClick={handleForgot}>
              <p className="flex justify-center font-bold text-gray-500 text-sm mt-2 cursor-pointer">
                Forgot your password?
              </p>
            </Link>
          </form>
        </div>
        {/* Đây là ảnh */}
        <div
          className=" rounded-lg"
          style={{ width: '40%', backgroundImage: `url(${IMAGE_PATH.LOGIN})` }}
        ></div>
      </div>
    </div>
  );
}
