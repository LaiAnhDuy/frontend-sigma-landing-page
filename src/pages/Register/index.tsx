import React, { ChangeEvent, FormEvent, useState } from 'react';
import './index.style.css';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { isEmailValid, isEmptyValue } from 'src/utils';
const initFormValue = {
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};
interface FormValues {
  [key: string]: string;
}

export default function Register() {
  const [formValue, setFormValue] = useState<FormValues>(initFormValue);
  const [formError, setFormError] = useState({});
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const validateForm = () => {
    const error: { [key: string]: string } = {};
    if (isEmptyValue(formValue.phone)) {
      error.phone = 'Phone is required';
    } else if (
      formValue.phone.length < 10 ||
      formValue.phone.length >= 11 ||
      formValue.phone.charAt(0) !== '0'
    ) {
      error.phone = 'Phone number is not correct';
    }
    if (isEmptyValue(formValue.email)) {
      error.email = 'Phone is required';
    } else {
      if (!isEmailValid(formValue.email)) {
        error.email = 'Email is invalid';
      }
    }
    if (isEmptyValue(formValue.password)) {
      error.password = 'Password is required';
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error.confirmPassword = 'Confirm password is required';
    } else if (formValue.confirmPassword !== formValue.password) {
      error.confirmPassword = 'Confirm password not match';
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form Value:', formValue);
    } else {
      console.log('Form invalid :))');
    }
  };
  console.log(formError);
  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1 className="title">Register</h1>
        <form className="form-parent" onSubmit={handleSubmit}>
          <div className="form-1">
            <img
              className="form-picture"
              src="../images/pic_register.svg"
              alt=""
            />
          </div>
          <div className="form-2">
            <div className="element">
              <label htmlFor="phone" className="form_input">
                Phone Number
              </label>
              <input
                type="number"
                className="form_control"
                id="phone"
                name="phone"
                value={formValue.phone}
                onChange={handleChange}
              />
            </div>
            <div className="element">
              <label htmlFor="email" className="form_input">
                Email
              </label>
              <input
                type="text"
                className="form_control"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="element">
              <label htmlFor="password" className="form_input">
                Password
              </label>
              <input
                type={`${active1 ? 'password' : 'text'}`} // điều kiện active hiện lên số, chữ
                // type='password'
                className="form_control"
                id="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
              {active1 ? (
                <EyeOutlined
                  className=" relative right-[10%]"
                  onClick={() => setActive1(!active1)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="icon"
                  onClick={() => setActive1(!active1)}
                />
              )}
              {/* <EyeInvisibleOutlined className="icon" />  */}
            </div>
            <div className="element">
              <label htmlFor="confirmPassword" className="form_input">
                Confirm Password
              </label>
              <input
                type={`${active2 ? 'password' : 'text'}`}
                className="form_control"
                id="confirmPassword"
                name="confirmPassword"
                value={formValue.confirmPassword}
                onChange={handleChange}
              />
              {active2 ? (
                <EyeOutlined
                  className="icon"
                  onClick={() => setActive2(!active2)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="icon"
                  onClick={() => setActive2(!active2)}
                />
              )}
              {/* <EyeInvisibleOutlined className="icon" /> */}
            </div>

            <input type="submit" className="submit-btn" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
