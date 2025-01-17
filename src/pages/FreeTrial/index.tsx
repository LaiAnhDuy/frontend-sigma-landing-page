/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { DIAL_CODES } from 'src/constants/dialCode';
import { freeTrialApi } from 'src/api/freeTrial';

const { TextArea } = Input;

const { Option } = Select;
export default function FreeTrial() {
  const [form] = Form.useForm();
  const freeTrialRequest = (value: any) => {
    console.log();

    const data = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.workEmail,
      phone: value.phone,
      country: value.countryRegion,
    };
    freeTrialApi
      .freeTrial(data)
      .then((res) => {
        console.log('Success', res);
      })
      .catch((error) => {
        console.log('Fail: ', error);
      });
  };
  const [selectedPrefix, setSelectedPrefix] = useState('+84');
  return (
    <div>
      <div className="m-auto text-center">
        <div className="container m-auto text-center">
          <h1 className="text-[50px] text-black">
            Keen to discuss your project?
          </h1>
          <p className="text-[21px] font-medium text-black -mt-3">
            Our team would love the opportunity to talk to you about your
            project and business
            <br />
            case. We’ll then demonstrate how the solution could be of benefit to
            you.
          </p>
        </div>
        <div
          className="bg-repeat-round bg-cover w-full "
          style={{
            width: '100%',
            backgroundImage: `url(${IMAGE_PATH.FREE_TRIAL})`,
          }}
        >
          <div className="container m-auto grid grid-cols-5 gap-x-16 mt-24 mb-24">
            <div className="col-span-3 ">
              <Form
                form={form}
                onFinish={freeTrialRequest}
                name="basic"
                className="bg-white px-5 py-3 h-[927px] -mt-[20px] box-shadow"
                layout="vertical"
              >
                <Form.Item
                  className="label text-left "
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
                <Form.Item
                  className="label text-left"
                  label="Last name"
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
                <Form.Item
                  className="label text-left"
                  label="Work email"
                  name="workEmail"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your work email!',
                    },
                    {
                      type: 'email',
                      message: 'Email is invalid!',
                    },
                  ]}
                >
                  <Input className="input" />
                </Form.Item>
                <Form.Item
                  className="label text-center"
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <div className="flex text-center">
                    <Select
                      className="!w-64 h-10 mr-8 name-country"
                      optionFilterProp="children"
                      defaultValue={
                        DIAL_CODES.find(
                          (val) => val.dial_code === selectedPrefix,
                        )?.name
                      }
                      onChange={(value) => setSelectedPrefix(value)}
                    >
                      {DIAL_CODES.map((val, index) => {
                        return (
                          <Option key={index} value={val.dial_code}>
                            {val.name}
                          </Option>
                        );
                      })}
                    </Select>
                    <Input
                      className="h-10 text-lg"
                      value={selectedPrefix}
                      onChange={(e) => setSelectedPrefix(e.target.value)}
                    />
                  </div>
                </Form.Item>
                <Form.Item
                  className="label text-left"
                  label="Country/Region"
                  name="countryRegion"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Country/Region!',
                    },
                  ]}
                >
                  <Select
                    placeholder="Please select"
                    className="text-left name-country"
                  >
                    {DIAL_CODES.map((val, index) => (
                      <Option key={index} value={val.code}>
                        {val.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="label text-left"
                  label="About your project"
                  name="project"
                  rules={[
                    { required: true, message: 'Please input your project!' },
                  ]}
                >
                  <TextArea
                    rows={3}
                    className="h-40"
                    placeholder="Tell us about your project "
                  />
                </Form.Item>
                <p className="text-left font-normal text-[17px]">
                  By submitting this form, I agree to the processing of my
                  personal data for the purpose of responding to my request, in
                  compliance with ThuDo Multimedia’s{' '}
                  <span className="text-[#47B5FF]">Privacy Notice.</span>
                </p>
                <Form.Item
                  name="checkbox"
                  valuePropName="checked"
                  className="text-left checkbox !p-0"
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
                    className="font-light text-xl text-white bg-main cursor-pointer button"
                  >
                    Free trial
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="col-span-2 text-left">
              <p className="font-normal text-[17px] text-white text-center border-solid w-[252px] py-3 rounded-[3px] border-main bg-main mt-[50px] cursor-pointer">
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
                src={IMAGE_PATH.FREE_TRIAL_ELEMENT}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
