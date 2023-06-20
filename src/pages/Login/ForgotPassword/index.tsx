/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss';
import { isEmailValid, isEmptyValue } from 'src/utils';
import { IMAGE_PATH } from 'src/constants/images';
const initFormValue = {
    email: "",
    code: "",
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
            error.email = "Code is required!";
        } else {
            if (!isEmailValid(formValue.email)) {
                error.email = "Code is invalid!";
            }
        }
        if (isEmptyValue(formValue.code)) {
            error.code = "Code is required!"
        }
        if (isEmptyValue(formValue.newPassword)) {
            error.newPassword = "New password is required!"
        }
        if (isEmptyValue(formValue.confirmPassword)) {
            error.confirmPassword = "Confirm password is required!"
        } else if (formValue.newPassword !== formValue.confirmPassword) {
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
    const handleContinue = () => {
        setSelect(3)
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
                                    <form onSubmit={handleSubmit} className="text-center">
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
                                        <input type="submit" value="Continue" onClick={handleContinue} className="mt-10 mb-40 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
                                    </form>
                                </div>
                            )

                        case 2:
                            return (
                                <div>
                                    <h3 className="text-white text-xl">Reset your password</h3>
                                    <p className="text-white text-base">We have sent a four digit code on your email</p>
                                    <form onSubmit={handleSubmit} className="text-center">
                                        {/* <label htmlFor="email" className="">Four digit code</label> */}
                                        <input
                                            type="text"
                                            id="code"
                                            name="code"
                                            value={formValue.code}
                                            onChange={handleChange}
                                            placeholder="Four digit code"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.code ? "border-red-400" : "border-white"}`}
                                        />
                                        <div className="h-5 -ml-44 font-semibold text-sm text-red-700 mt-2">{formError.code}</div>
                                    </form>
                                    <form onSubmit={handleSubmit} className="text-center">
                                        {/* <label htmlFor="email" className="">New password</label> */}
                                        <input
                                            type="text"
                                            id="newPassword"
                                            name="newPassword"
                                            value={formValue.newPassword}
                                            onChange={handleChange}
                                            placeholder="New password"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.newPassword ? "border-red-400" : "border-white"}`}
                                        />
                                        <div className="h-5 -ml-28 font-semibold text-sm text-red-700 mt-2">{formError.newPassword}</div>
                                    </form>
                                    <form onSubmit={handleSubmit} className="text-center">
                                        {/* <label htmlFor="email" className="">Confirm password</label> */}
                                        <input
                                            type="text"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formValue.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm password"
                                            className={`w-[280px] h-10 border-solid rounded-sm mt-2 focus:outline-none focus:border-white ${formError.confirmPassword ? "border-red-400" : "border-white"}`}
                                        />
                                        <div className="h-5 -ml-24 font-semibold text-sm text-red-700 mt-2">{formError.confirmPassword}</div>
                                        <input type="submit" value="Reset password" onClick={handleContinue} className="mt-10 mb-20 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
                                    </form>
                                </div>
                            )
                        case 3:
                            return (
                                <div>
                                    <p className="text-white text-xl">Whoo Whoo!</p>
                                    <p className="text-white text-base">Your password has been reset successfully! Now login with your new password</p>
                                    <input type="submit" value="Sign in" onClick={handleContinue} className="mt-10 mb-20 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold cursor-pointer active:bg-slate-300 active:border-none" />
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