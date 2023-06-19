/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.scss';
import { isEmailValid, isEmptyValue } from 'src/utils';
import { IMAGE_PATH } from 'src/constants/images';
const initFormValue = {
    email: ""
}
interface FormValues {
    [key: string]: string;
}
export default function ForgotPassword() {
    const [formValue, setFormValue] = useState<FormValues>(initFormValue);
    const [formError, setFormError] = useState<FormValues>({});

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
        <div className="text-center w-[320px] m-auto bg-green-300 px-9 mt-3 rounded-md">
            <div className="">
                {/* Picture */}
                <img className="w-24 h-24 rounded-full mt-16" src={IMAGE_PATH.IMAGE_BIRD} alt=""></img>
                <h3 className="text-[#ed8a3d] text-xl">It's okay. Reset your password</h3>
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
                        className={`w-[280px] h-10 border-solid border-white rounded-sm mt-2 focus:outline-none focus:border-white ${formError.email ? "border-red-600" : "border-none"}`}
                    />
                    <div className="-ml-44 font-semibold text-sm text-red-700 mt-2">{formError.email}</div>
                    <input type="submit" value="Continue" className="mt-10 mb-40 w-[280px] h-10 rounded-full border-solid border-white bg-white text-base text-green-700 font-bold hover:cursor-pointer focus:bg-slate-300 focus:border-none" />
                </form>
            </div>
        </div>
    )
}