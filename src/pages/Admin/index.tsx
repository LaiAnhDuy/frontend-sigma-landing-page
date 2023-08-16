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

export default function Admin() {
  const { Meta } = Card;
  const navigate = useNavigate();
  const [remove, setRemove] = useState(false);
  const dispatch = useDispatch();
  const { Content, Sider } = Layout;
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('new');
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
  ];

  const resourcesRequest = () => {
    const data = {
      category: (() => {
        switch (selectedMenuItem) {
          case 'new':
            return 'News';
          case 'blog':
            return 'Blog';
          case 'document':
            return 'Document';
          case 'video':
            return 'Video';
          case 'casestudy':
            return 'Casestudy';
          default:
            return 'Other';
        }
      })(),
      limitPerPage: 100,
    };
    const errorHandler = (error: any) => {
      console.log('Fail: ', error);
    };

    resourceApi
      .getResource(data, errorHandler)
      .then((res) => {
        dispatch(addResource(res.data));
      })
      .catch((error) => {
        console.log('Fail: ', error);
      });
  };
  const removeBlogRequest = (id: any) => {
    const errorHandler = (error: any) => {
      console.log('Fail: ', error);
    };

    resourceApi
      .removeBlog(id, errorHandler)
      .then((res) => {
        dispatch(addResource(res.data));
      })
      .catch((error) => {
        console.log('Fail: ', error);
      });
  };

  useEffect(() => {
    resourcesRequest();
    setRemove(false);
  }, [selectedMenuItem, remove]);
  const resources = useSelector(
    (state: any) => state.resourceReducer.resources,
  );
  console.log(resources, 'resources');

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
              {(() => {
                switch (selectedMenuItem) {
                  case 'new':
                    return 'News';
                  case 'blog':
                    return 'Blogs';
                  case 'casestudy':
                    return 'Case Study';
                  case 'document':
                    return 'Documents';
                  case 'video':
                    return 'Videos';
                  default:
                    return 'Admin';
                }
              })()}
            </h1>
            <Link to={ROUTE.POST}>
              <Button icon={<FormOutlined />}>Post</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {resources && resources.length > 0 ? (
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
                        // src={val.thumbnail}
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
                        message.success('Delete');
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
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
