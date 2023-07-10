import React from 'react';
import './index.style.css';
import { IMAGE_PATH } from 'src/constants/images';
import { Button, Checkbox, Form, Input } from 'antd';
export default function FreeTrial() {
  return (
    <div>
      <div className="m-auto text-center">
        <div className="container m-auto text-center">
          <h1 className="text-[50px] text-black">
            Keen to discuss your project?
          </h1>
          <p className="text-[21px] font-medium text-black -mt-3">
            Our team would love the opportunity to talk to you about your
            project and business case. We’ll then demonstrate how the solution
            could be of benefit to you.
          </p>
        </div>
        <div
          className="bg-repeat-round bg-cover w-full "
          style={{
            width: '100%',
            backgroundImage: `url(${IMAGE_PATH.FREETRIAL})`,
          }}
        >
          <div className="container m-auto grid grid-cols-5 gap-x-16 mt-24 mb-24">
            <div className="col-span-3 ">
              <Form
                name="basic"
                className="bg-white px-5 py-3 h-[927px] -mt-[20px] shadow"
                layout="vertical"
              >
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Work email"
                  name="workEmail"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone number"
                  name="phoneNumber"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Country/Region"
                  name="countryRegion"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Tell us about your project"
                  name="project"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <p className="text-left">
                  By submitting this form, I agree to the processing of my
                  personal data for the purpose of responding to my request, in
                  compliance with ThuDo Multimedia’s Privacy Notice.
                </p>
                <Form.Item
                  name="checkbox"
                  valuePropName="checked"
                  className="text-left"
                >
                  <Checkbox>
                    I would like to opt-in to receive updates from ThuDo
                    Multimedia about products, news, webinars, and events.
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="font-light text-xl text-white bg-main cursor-pointer "
                  >
                    Free trial
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="col-span-2 text-left">
              <p className="font-normal text-base text-white text-center border-solid w-[252px] py-3 rounded-[3px] border-main bg-main mt-[50px] cursor-pointer">
                Call us on (+84) 24 3668 7038
              </p>
              <div className="grid-cols-4 grid mt-16">
                <div className="col-span-1">
                  <h1 className="text-base font-bold text-[#000000]">
                    Post address
                  </h1>
                </div>
                <div className="col-span-3 w-[279px] -mt-1">
                  <p className="text-base font-normal text-[#000000]">
                    Floor 10, No. 48 Le Van Luong, N2 New Urban Area, Nhan Chinh
                    Ward, Thanh Xuan District, City. Hanoi
                  </p>
                </div>
              </div>
              <div className="grid-cols-4 grid mt-8">
                <div className="col-span-1">
                  <h1 className="text-base font-bold text-[#000000]">
                    Contact
                  </h1>
                </div>
                <div className="col-span-3 -mt-1">
                  <p className="text-base font-normal text-[#000000]">
                    24/7 Call center: 1900 585868 Sale team: (+84) 925111991
                    E-mail: thudojsc@gviet.vn
                  </p>
                </div>
              </div>
              <img
                className="mt-8 mb-8"
                alt=""
                src={IMAGE_PATH.FREETRIAL_ELEMENT}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
