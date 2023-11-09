/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Radio, message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCaller from 'src/api/apiCaller';
import { authApi } from 'src/api/auth-api';
import { addListUser, hideModal } from 'src/redux/auth/action';
import { RRError } from 'src/types/Api';

const FormUser = () => {
  const handleCancel = () => {
    dispatch(hideModal());
  };
  const [form1] = Form.useForm();

  const dispatch = useDispatch();
  const userRequest = async () => {
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error.ec);
    };
    const response = await apiCaller({
      request: authApi.getListUser(),
      errorHandler,
    });
    if (response) {
      dispatch(addListUser(response.data));
    }
  };
  const createUser = async (value: any) => {
    const data = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phoneNumber,
      role: value.role,
      password: value.password,
      country: 'Việt Nam',
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error.ec);
      message.error(error.msg);
    };
    const response = await apiCaller({
      request: authApi.createUser(data),
      errorHandler,
    });
    if (response) {
      message.success(
        'Create Successfully! Please check your email to activate your account',
      );
      userRequest();
      form1.resetFields();
      dispatch(hideModal());
    }
  };
  useEffect(() => {
    if (open) {
      form1.resetFields();
    }
  });

  const open = useSelector(
    (state: any) => state.authReducer.userData.modalOpen,
  );
  return (
    <Modal footer={false} open={open} closable={false} onCancel={handleCancel}>
      <div className="p-10">
        <div>
          <h1 className="mt-0">Create User</h1>
          <Form
            layout="vertical"
            className="font-bold"
            onFinish={createUser}
            form={form1}
          >
            <div className="flex gap-x-10">
              <div>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'First name is required!',
                    },
                  ]}
                >
                  <Input placeholder="Enter first name" />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Last name is required!',
                    },
                  ]}
                >
                  <Input placeholder="Enter last name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid Email!',
                    },
                    {
                      required: true,
                      message: 'Email  is required!',
                    },
                  ]}
                >
                  <Input placeholder="Enter email" />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Phone number  is required!',
                    },
                    {
                      pattern: /^(0[1-9][0-9]{8,9})$/,
                      message: 'Invalid phone number!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
              </div>
              <div>
                <Form.Item name="role" label="Role" initialValue={'user'}>
                  <Radio.Group>
                    <Radio value={'admin'}>Admin</Radio>
                    <Radio value={'user'}>User</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Password  is required!',
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                  label="Confirm password"
                  name="confirm password"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Confirm password  is required!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('Do not match password!'),
                        );
                      },
                    }),
                  ]}
                  className="test"
                >
                  <Input.Password placeholder="Confirm password" />
                </Form.Item>
              </div>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default FormUser;
