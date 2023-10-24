/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Layout, Menu, Popconfirm, message } from 'antd';
import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import './index.style.scss';
import { FormOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import ROUTE from 'src/constants/route';
import { resourceApi } from 'src/api/resource-api';
import { useDispatch, useSelector } from 'react-redux';
import { addResource, addResponse } from 'src/redux/resource/action';
import { IMAGE_PATH } from 'src/constants/images';
import apiCaller from 'src/api/apiCaller';
import { categoryMappings } from 'src/constants';
import { REACT_APP_IMAGE_URL } from 'src/configs/index';
import { resourcesRequest } from 'src/components/Resource';
import { ResourceProps } from 'src/types/Resource';
import Paginations from 'src/components/Pagination';
import { authApi } from 'src/api/auth-api';
import { addListUser } from 'src/redux/auth/action';

export default function Admin() {
  const [remove, setRemove] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('new');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState();
  const user: string | any[] = [];
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
    setCurrentPage(1);
  }, [selectedMenuItem]);

  useEffect(() => {
    if (selectedMenuItem !== '2') {
      resourcesRequests(currentPage);
    } else {
      userRequest();
    }
  }, [selectedMenuItem, remove, currentPage]);

  const userRequest = async () => {
    const errorHandler = (error: any) => {
      console.log(error);
    };
    const response = await apiCaller({
      request: authApi.getListUser(),
      errorHandler,
    });
    if (response) {
      dispatch(addListUser(response.data));
    }
  };
  const resourcesRequests = (page: number) => {
    resourcesRequest({
      page: page,
      value: selectedMenuItem,
      limitPerPage: 8,
      setTotalPages: (data) => {
        setTotalPages(data);
      },
      dispatchAddResource(data) {
        dispatch(addResource(data));
      },
    } as ResourceProps);
  };

  const removeBlogRequest = async (id: any) => {
    const errorHandler = (error: any) => {
      console.log(error);
    };
    const response = await apiCaller({
      request: resourceApi.removeBlog(id),
      errorHandler,
    });
    if (response) {
      dispatch(addResource(response.data));
      message.success('Delete');
      setRemove(false);
    }
  };

  const resources = useSelector(
    (state: any) => state.resourceReducer.resources,
  );
  const handleOnChange = (value: number) => {
    setCurrentPage(value);
    resourcesRequests(value);
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
            style={{ height: '101%' }}
            items={items}
            onClick={({ key }) => handleMenuClick(key as string)}
          />
        </Sider>
        <Content style={{ paddingLeft: '24px', minHeight: 280 }}>
          <div className="flex justify-between">
            <h1 className="mt-0">
              {categoryMappings[selectedMenuItem] || 'Admin'}
            </h1>
            <Link to={ROUTE.POST}>
              <Button
                icon={<FormOutlined />}
                onClick={() => dispatch(addResponse(false))}
              >
                Post
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {selectedMenuItem !== '2' ? (
              resources && resources.length > 0 ? (
                resources.map((val: any, index: number) => (
                  <Card
                    className="m-auto shadow-"
                    key={index}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      val.thumbnail ? (
                        <img
                          crossOrigin="anonymous"
                          onError={({ currentTarget }) => {
                            currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
                          }}
                          onClick={(e) => {
                            navigate(`/resources/blog/${val.id}`);
                            e.stopPropagation();
                          }}
                          alt="#"
                          className="h-[120px]"
                          src={`${REACT_APP_IMAGE_URL}${val.thumbnail}`}
                        />
                      ) : (
                        <img
                          alt="#"
                          className="h-[120px]"
                          src={IMAGE_PATH.THUMBNAIL_ERROR}
                        />
                      )
                    }
                    actions={[
                      <Popconfirm
                        key="clear"
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={(e) => {
                          removeBlogRequest(val.id);
                          setRemove(true);
                          e?.stopPropagation();
                        }}
                        onCancel={() => {
                          message.error('No delete');
                          setRemove(false);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div className="text-red-600 font-medium">Delete</div>
                      </Popconfirm>,
                      <div
                        key="edit"
                        onClick={(e) => {
                          dispatch(addResponse(false));
                          navigate(ROUTE.EDIT.replace(':id', val.id));
                          e.stopPropagation();
                        }}
                        className="text-blue-600 font-medium"
                      >
                        Edit
                      </div>,
                    ]}
                  >
                    <div
                      onClick={(e) => {
                        navigate(`/resources/blog/${val.id}`);
                        e.stopPropagation();
                      }}
                    >
                      <Meta
                        className="card min-h-[80px] max-h-[80px]"
                        title={val.title}
                      />
                    </div>
                  </Card>
                ))
              ) : (
                <p>No blog</p>
              )
            ) : (
              <button>Go to Page 1</button>
            )}
          </div>
          {selectedMenuItem !== '2' ? (
            resources && resources.length > 0 ? (
              <div className="flex justify-center">
                <Paginations
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onChange={handleOnChange}
                />
              </div>
            ) : null
          ) : user && user.length > 0 ? (
            <div className="flex justify-center">
              <Paginations
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={handleOnChange}
              />
            </div>
          ) : null}
        </Content>
      </Layout>
    </div>
  );
}
