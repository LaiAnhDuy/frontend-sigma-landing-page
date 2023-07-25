import { Button, Card, Layout, Menu, message } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { resource } from './listResource';
import './index.style.scss';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';

export default function Admin() {
  const { Meta } = Card;
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
            {resource
              .filter((item) => item.category === selectedMenuItem)
              .map((val, index) => (
                <Card
                  className="m-auto"
                  key={index}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={val.thumbnail} />}
                  actions={[
                    <div
                      key="clear"
                      onClick={() => {
                        message.success('Clear');
                      }}
                      className="text-red-600 font-medium"
                    >
                      Clear
                    </div>,
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
                  <Link to={ROUTE.BLOG.replace(':id', val.id)}>
                    <Meta title={val.title} description={val.description} />
                  </Link>
                </Card>
              ))}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
