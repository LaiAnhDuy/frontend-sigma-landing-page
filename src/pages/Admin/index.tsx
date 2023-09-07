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
import { addResource } from 'src/redux/resource/action';
import { IMAGE_PATH } from 'src/constants/images';
import { RRError } from 'src/types/Api';
import apiCaller from 'src/api/apiCaller';
import { categoryMappings } from 'src/constants';
import { removeUser, updateLoginState } from 'src/redux/auth/action';

export default function Admin() {
  const [remove, setRemove] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('new');
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
    resourcesRequest();
  }, [selectedMenuItem, remove]);

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
      if (error.ec === 419 || error.ec === 420) {
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
      setRemove(false);
    }
  };

  const resources = useSelector(
    (state: any) => state.resourceReducer.resources,
  );
  console.log(resources);

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
              <Button icon={<FormOutlined />}>Post</Button>
            </Link>
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
                          crossOrigin="anonymous"
                          onError={({ currentTarget }) => {
                            currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
                          }}
                          alt="#"
                          className="max-h-[120px]"
                          src={`http://123.30.235.196:5388/api/static/${val.thumbnail}`}
                        />
                      ) : (
                        <img
                          alt="#"
                          className="max-h-[120px]"
                          src={IMAGE_PATH.THUMBNAIL_ERROR}
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
                          setRemove(false);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div className="text-red-600 font-medium">Clear</div>
                      </Popconfirm>,
                      <div
                        key="edit"
                        onClick={() => {
                          navigate(ROUTE.EDIT.replace(':id', val.id));
                        }}
                        className="text-blue-600 font-medium"
                      >
                        Edit
                      </div>,
                    ]}
                  >
                    <div onClick={() => navigate(`/resources/blog/${val.id}`)}>
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
              <p>No user</p>
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
