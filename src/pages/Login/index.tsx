/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss'
import { IMAGE_PATH } from 'src/constants/images';
import { Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { EyeInvisibleOutlined, EyeOutlined, GoogleOutlined } from '@ant-design/icons';
import { isEmailValid, isEmptyValue } from 'src/utils';
import { Link } from 'react-router-dom';
const initFormValue = {
    email: "",
    password: ""
}
interface FormValues {
    [key: string]: string;
}
interface LoginProps {
    signIn: () => void,
    onClick: () => void
}
export default function Login({ signIn, onClick }: LoginProps) {
    const [formValue, setFormValue] = useState<FormValues>(initFormValue);
    const [formError, setFormError] = useState<FormValues>({});
    const [active1, setActive1] = useState(true);

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
        if (isEmptyValue(formValue.password)) {
            error.password = "Password is required!";
        } else { } // check password valid or invalid 
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
                {/* sign in */}
                <div style={{ width: '60%', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
                    <h1 className=''>Sign In</h1>
                    <div className="flex justify-center">
                        <GoogleOutlined className="google mx-2" />
                        <FontAwesomeIcon icon={faFacebookF} className="mx-2 rounded-[100%] border-solid p-1 px-2" />
                        <FontAwesomeIcon icon={faTwitter} className="mx-2 rounded-[100%] border-solid p-1" />
                        <FontAwesomeIcon icon={faInstagram} className="mx-2 rounded-[100%] border-solid p-1 px-1" />
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
                                className={`border-solid rounded-sm border-blue-200 border-2 h-7 w-60 focus:outline-none focus:border-blue-200 ${formError.email ? "border-red-400" : "border-blue-200"}`}
                                id="email"
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                            />
                            <div className="h-3 text-red-700 text-sm font-semibold">{formError.email}</div>
                        </div>
                        <label htmlFor="passWord" className="text-lg">
                            Password
                            <span className="text-red-600">*</span>
                        </label>
                        <div className=''>
                            <input
                                type={`${active1 ? "password" : "text"}`} // điều kiện active hiện lên số, chữ 
                                id="password"
                                name="password"
                                className={`border-solid rounded-sm border-blue-200 border-2 h-7 pr-8 w-52 focus:outline-none focus:border-blue-200 ${formError.email ? "border-red-400" : "border-blue-200"}`}
                                value={formValue.password}
                                onChange={handleChange}
                            />
                            {active1 ? <EyeOutlined className="-ml-[30px]" onClick={() => setActive1(!active1)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActive1(!active1)} />}
                        </div>
                        <div className="h-3 text-red-700 text-sm font-semibold mb-4">{formError.password}</div>
                        <Checkbox onChange={() => { }} className="flex justify-start text-sm mb-4">Remember password</Checkbox>
                        <div className='flex justify-center mb-2'>
                            <input type="submit" className="w-28 h-9 border-solid border-pink-200 rounded-md bg-white font-bold text-pink-500 text-base hover:bg-pink-600 hover:text-white hover:cursor-pointer" onClick={signIn} value="Sign In" />
                        </div>
                        <div className='flex justify-center cursor-pointer text-blue-400' onClick={onClick}>
                            I have not an account
                        </div>
                        <p className="flex justify-center font-bold text-gray-500 text-sm mt-2 cursor-pointer">Forgot your password?</p>
                    </form>
                </div>
                {/* Đây là ảnh */}
                <div className=" rounded-lg" style={{ width: '40%', backgroundImage: `url(${IMAGE_PATH.LOGIN})` }}>
                </div>
            </div>
        </div>
    );
}
