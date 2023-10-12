/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Layout, Menu, Popconfirm, message } from 'antd';
import React, { useEffect, useState } from 'react';
import type { MenuProps, PaginationProps } from 'antd';
import './index.style.scss';
import { FormOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import ROUTE from 'src/constants/route';
import { resourceApi } from 'src/api/resource-api';
import { useDispatch, useSelector } from 'react-redux';
import { addResource } from 'src/redux/resource/action';
import { IMAGE_PATH } from 'src/constants/images';
import { RRError } from 'src/types/Api';
import apiCaller from 'src/api/apiCaller';
import { categoryMappings } from 'src/constants';
import {
  addListUser,
  modalState,
  removeUser,
  updateLoginState,
} from 'src/redux/auth/action';
import { authApi } from 'src/api/auth-api';
import { Space, Table } from 'antd';
import FormUser from 'src/components/FormUser';

export default function Admin() {
  const [remove, setRemove] = useState(false);
  const [delUser, setDelUser] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('new');

  const [currentPage, setCurrentPage] = useState<number>(1)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Meta } = Card;
  const { Content, Sider } = Layout;

  const handleMenuClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Resource',

      children: [
        {
          key: 'new',
          label: `News`,
        },
        {
          key: 'blog',
          label: `Blogs`,
        },
        {
          key: 'casestudy',
          label: `Casestudy`,
        },
        {
          key: 'document',
          label: `Documents`,
        },
        {
          key: 'video',
          label: `Videos`,
        },
      ],
    },
    { key: '2', label: 'Users' },
  ];

  useEffect(() => {
    if (selectedMenuItem !== '2') {
      resourcesRequest();
    } else {
      userRequest();
    }
    setRemove(false);
    setDelUser(false);
  }, [selectedMenuItem, remove, delUser]);

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

  const deleteUser = async (id: number) => {
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: authApi.deleteUser(id),
      errorHandler,
    });
    if (response) {
      dispatch(addListUser(response.data));
    }
  };

  const user = useSelector((state: any) => state.authReducer.userData.listUser);

  const resourcesRequest = async () => {
    const data = {
      category: categoryMappings[selectedMenuItem],
      limitPerPage: 100,
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: resourceApi.getResource(data),
      errorHandler,
    });
    if (response) {
      dispatch(addResource(response.data));
    }
  };
  const removeBlogRequest = async (id: any) => {
    const errorHandler = (error: any) => {
      console.log('Fail: ', error);
      if (error.ec === 419) {
        navigate(ROUTE.HOME);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        dispatch(removeUser());
        dispatch(updateLoginState(false));
      }
    };
    const response = await apiCaller({
      request: resourceApi.removeBlog(id),
      errorHandler,
    });
    if (response) {
      dispatch(addResource(response.data));
      message.success('Delete');
    }
  };

  const resources = useSelector(
    (state: any) => state.resourceReducer.resources,
  );

  const { Column, ColumnGroup } = Table;

  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return currentPage === 1 ? null : (
        <a className="text-black hover:text-black !h-8 ">Prev</a>
      );
    }
    if (type === 'next') {
      return currentPage === Math.ceil(user.length/5) ? null : (
        <a className="text-black hover:text-black !h-8">Next</a>
      );
    }
    return originalElement;
  };
  return (
    <div className="container m-auto ">
      <Layout className="bg-white mt-5">
        <Sider className="bg-white" width={250}>
          <Menu
            className="menu-item"
            mode="inline"
            defaultSelectedKeys={['new']}
            defaultOpenKeys={['1']}
            style={{ height: '100%' }}
            items={items}
            onClick={({ key }) => handleMenuClick(key as string)}
          />
        </Sider>
        <Content style={{ paddingLeft: '24px', minHeight: 280 }}>
          <div className="flex justify-between">
            <h1 className="mt-0">
              {categoryMappings[selectedMenuItem] || 'Admin'}
            </h1>
            {selectedMenuItem !== '2' ? (
              <Link to={ROUTE.POST}>
                <Button icon={<FormOutlined />}>Post</Button>
              </Link>
            ) : (
              <Button
                icon={<FormOutlined />}
                onClick={() => dispatch(modalState(true))}
              >
                Create User
              </Button>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {selectedMenuItem !== '2' ? (
              resources && resources.length > 0 ? (
                resources.map((val: any, index: number) => (
                  <Card
                    className="m-auto"
                    key={index}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      val.thumbnail ? (
                        <img
                          alt="#"
                          className="max-h-[130px]"
                          src={IMAGE_PATH.ABOUT_US}
                        />
                      ) : (
                        <img
                          alt="#"
                          className="max-h-[130px]"
                          src={IMAGE_PATH.ABOUT_US}
                        />
                      )
                    }
                    actions={[
                      <Popconfirm
                        key="clear"
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => {
                          removeBlogRequest(val.id);
                          setRemove(true);
                        }}
                        onCancel={() => {
                          message.error('No delete');
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div className="text-red-600 font-medium">Clear</div>
                      </Popconfirm>,
                      <div
                        key="edit"
                        onClick={() => {
                          message.success('Edit');
                        }}
                        className="text-blue-600 font-medium"
                      >
                        Edit
                      </div>,
                    ]}
                  >
                    <div onClick={() => navigate(`/resources/blog/${val.id}`)}>
                      <Meta
                        className="card min-h-[80px]"
                        title={val.title}
                        description={val.description}
                      />
                    </div>
                  </Card>
                ))
              ) : (
                <p>No blog</p>
              )
            ) : (
              <div className="col-span-4">
                <FormUser />
                <Table
                  dataSource={user}
                  pagination={{
                    itemRender:itemRender,
                    onChange:(page)=>{
                      setCurrentPage(page);
                    },
                    pageSize: 5,
                    total: user.length,
                    position: ['bottomCenter'],
                  }}
                >
                  <ColumnGroup title="Name">
                    <Column
                      title="First Name"
                      dataIndex="firstName"
                      key="firstName"
                    />
                    <Column
                      title="Last Name"
                      dataIndex="lastName"
                      key="lastName"
                    />
                  </ColumnGroup>
                  <Column title="Phone" dataIndex="phone" key="phone" />
                  <Column title="Email" dataIndex="email" key="email" />
                  <Column title="Role" dataIndex="role" key="role" />
                  <Column
                    title="Action"
                    key="action"
                    render={(_, record: any) => (
                      <Space size="middle">
                        <button
                          className="bg-orange-400 text-white border-none rounded-xl w-max h-7 text-xs cursor-pointer active:bg-main/60"
                          onClick={() => {
                            deleteUser(record.id);
                            setDelUser(true);
                          }}
                        >
                          Delete
                        </button>
                      </Space>
                    )}
                  />
                </Table>
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
