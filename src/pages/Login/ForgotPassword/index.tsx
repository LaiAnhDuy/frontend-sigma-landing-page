/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss';
import { isEmailValid, isEmptyValue } from 'src/utils';
import { IMAGE_PATH } from 'src/constants/images';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
const initFormValue = {
    email: "",
    newPassword: "",
    confirmPassword: ""
}
interface FormValues {
    [key: string]: string;
}
export default function ForgotPassword() {
    const [formValue, setFormValue] = useState<FormValues>(initFormValue);
    const [formError, setFormError] = useState<FormValues>({});
    const [selection, setSelect] = useState(1);
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
        if (selection === 1) {
            if (isEmptyValue(formValue.email)) {
                error.email = "Email is required!";
            } else {
                if (!isEmailValid(formValue.email)) {
                    error.email = "Email is invalid!";
                }
            }
        } else if (selection === 2) {
            if (isEmptyValue(formValue.newPassword)) {
                error.newPassword = "New password is required!"
            }
            if (isEmptyValue(formValue.confirmPassword)) {
                error.confirmPassword = "Confirm password is required!"
            } else if (formValue.newPassword !== formValue.confirmPassword) {
                error.confirmPassword = "Confirm password does not match!"
            }
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    };
    const handleSubmitContinue = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form value : ", formValue);
            setSelect(2);
        } else {
            console.log("Form invalid")
        }
    };
    const handleSubmitPassword = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form value : ", formValue);
            setSelect(3);
        } else {
            console.log("Form invalid")
        }
    };
    return (
        <div className="parent text-center w-[320px] m-auto px-9 mt-3 rounded-md">
            <div className="">
                {/* Picture */}
                <img className="w-24 h-24 rounded-full mt-14" src={IMAGE_PATH.IMAGE_BIRD} alt=""></img>
                {(() => {
                    switch (selection) {
                        case 1:
                            return (
                                <div>
                                    <h3 className="text-white text-xl">It's okay. Reset your password</h3>
                                    {/* Form enter email */}
                                    <form onSubmit={handleSubmitContinue} className="text-center">
                                        {/* <label htmlFor="email" className="">Email</label> */}
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={formValue.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.email ? "border-red-400" : "border-white"}`}
                                        />
                                        <div className="h-5 -ml-44 font-semibold text-sm text-red-700 mt-2">{formError.email}</div>
                                        <input type="submit" value="Continue" className="mt-10 mb-40 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
                                    </form>
                                </div>
                            )

                        case 2:
                            return (
                                <div>
                                    <h3 className="text-white text-xl">Reset your password</h3>
                                    <form onSubmit={handleSubmitPassword} className="text-center">
                                        <input
                                            type={`${activePassword ? "password" : "text"}`}
                                            id="newPassword"
                                            name="newPassword"
                                            value={formValue.newPassword}
                                            onChange={handleChange}
                                            placeholder="New password"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.newPassword ? "border-red-400" : "border-white"}`}
                                        />
                                        {activePassword ? <EyeOutlined className="-ml-[30px]" onClick={() => setActivePassword(!activePassword)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActivePassword(!activePassword)} />}
                                        <div className="h-5 -ml-28 font-semibold text-sm text-red-700 mt-2">{formError.newPassword}</div>
                                        <input
                                            type={`${activeConfirmPassword ? "password" : "text"}`}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formValue.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm password"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.confirmPassword ? "border-red-400" : "border-white"}`}
                                        />
                                        {activeConfirmPassword ? <EyeOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} /> : <EyeInvisibleOutlined className="-ml-[30px]" onClick={() => setActiveConfirmPassword(!activeConfirmPassword)} />}
                                        <div className="h-5 -ml-24 font-semibold text-sm text-red-700 mt-2">{formError.confirmPassword}</div>
                                        <input type="submit" value="Reset password" className="mt-10 mb-20 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
                                    </form>
                                </div>
                            )
                        case 3:
                            return (
                                <div>
                                    <p className="text-white text-xl">Whoo Whoo!</p>
                                    <p className="text-white text-base">Your password has been reset successfully! Now login with your new password</p>
                                    <input type="submit" value="Sign in" className="mt-10 mb-20 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
                                </div>
                            )
                        default:
                            return null;
                    }
                })()}
            </div>
        </div>
    )
}