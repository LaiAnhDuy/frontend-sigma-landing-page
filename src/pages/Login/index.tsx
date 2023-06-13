import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { Checkbox } from 'antd';
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
import { isEmailValid, isEmptyValue } from 'src/utils';
const initFormValue = {
  email: '',
  password: '',
};
interface FormValues {
  [key: string]: string;
}

interface LoginProps {
  SignUp: () => void;
  SignIn: () => void;
}
export default function Login(props: LoginProps) {
  const [formValue, setFormValue] = useState<FormValues>(initFormValue);
  const [formError, setFormError] = useState({});
  const [active1, setActive1] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  const validateForm = () => {
    // const error = {};
    const error: { [key: string]: string } = {};
    if (isEmptyValue(formValue.email)) {
      // error["email"] = "Email is required!";
      error.email = 'Email is required!';
    } else {
      if (!isEmailValid(formValue.email)) {
        error.email = 'Email is invalid';
      }
    }
    if (isEmptyValue(formValue.password)) {
      error.password = 'Password is required';
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form value : ', formValue);
    } else {
      console.log('Form invalid');
    }
  };
  console.log(formError);
  return (
    <div className="login-page my-4">
      <div className="" style={{ display: 'flex', width: 600, margin: 'auto' }}>
        {/* login */}
        <div
          style={{
            width: '60%',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <h1 className="">Login</h1>
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
            </label>
            <div className="mb-4">
              <input
                type="text"
                className="border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="passWord" className="text-lg">
              Password
            </label>
            <div className="mb-4">
              <input
                type={`${active1 ? 'password' : 'text'}`}
                id="password"
                name="password"
                className="border-solid rounded-sm border-blue-200 border-2 h-7 pr-8 w-52 focus:outline-none focus:border-blue-200"
                value={formValue.password}
                onChange={handleChange}
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
            <Checkbox
              onChange={() => {}}
              className="flex justify-start text-sm mb-4"
            >
              Remember password
            </Checkbox>
            <div className="flex justify-center ">
              <input
              onClick={props.SignIn}
                type="submit"
                className="w-24 h-9 border-solid cursor-pointer border-pink-200 rounded-md bg-white font-bold text-pink-500 text-base hover:bg-pink-600 hover:text-white"
                value="Sign In"
              />
              <input
                type="submit"
                onClick={props.SignUp}
                className="w-24 ml-4 h-9 border-solid cursor-pointer border-pink-200 rounded-md bg-white font-bold text-pink-500 text-base hover:bg-pink-600 hover:text-white"
                value="Sign Up"
              />
            </div>
            <p className="flex justify-center text-pink-500 text-sm mb-6 ">
              Forgot Password
            </p>
          </form>
        </div>
        {/* Đây là ảnh */}
        <div
          className="rounded-e-lg"
          style={{ width: '40%', backgroundImage: `url(${IMAGE_PATH.LOGIN})` }}
        ></div>
      </div>
    </div>
  );
}
