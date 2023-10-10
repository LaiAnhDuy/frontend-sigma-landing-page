/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Radio, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import apiCaller from 'src/api/apiCaller';
import { authApi } from 'src/api/auth-api';
import { IMAGE_PATH } from 'src/constants/images';
import { addListUser, modalState } from 'src/redux/auth/action';
import { RRError } from 'src/types/Api';

const FormUser = () => {
  const handleCancel = () => {
    dispatch(modalState(false));
  };
  const dispatch = useDispatch();
  const userRequest = async () => {
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
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
      console.log('Fail: ', error);
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
      dispatch(modalState(false));
    }
    console.log(data);
  };

  const open = useSelector(
    (state: any) => state.authReducer.userData.modalOpen,
  );
  return (
    <Modal footer={false} open={open} closable={false} onCancel={handleCancel}>
      <div className="flex justify-between">
        <div className="p-10">
          <div>
            <h1>Create User</h1>
            <div className="">
              <Form
                layout="vertical"
                className="font-bold"
                onFinish={createUser}
              >
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
                  ]}
                >
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
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
                  <Input placeholder="Password" type="password" />
                </Form.Item>
                <Form.Item
                  label="Confirm password"
                  name="confirm password"
                  rules={[
                    {
                      required: true,
                      message: 'Confirm password  is required!',
                    },
                  ]}
                >
                  <Input placeholder="Confirm password" type="password" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div
          className=" rounded-lg"
          style={{
            width: '40%',
            backgroundImage: `url(${IMAGE_PATH.LOGIN})`,
          }}
        ></div>
      </div>
    </Modal>
  );
};

export default FormUser;
