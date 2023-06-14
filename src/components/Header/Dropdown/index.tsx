/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './index.style.scss';
import { useLocation } from 'react-router-dom';

interface DropDownProps {
  menuItems: MenuProps['items'];
  hoverText: JSX.Element | string;
  clickHeader: () => void;
  activeHeader: boolean;
  path: string;
  route: string | undefined;
}

function DropDown({
  activeHeader,
  menuItems,
  hoverText,
  clickHeader,
  path,
  route,
}: DropDownProps) {
  const [itemActive, setItemActive] = useState(true);
  const [active, setActive] = useState(false);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    setItemActive(true);
  };
  const location = useLocation();
  useEffect(() => {
    location.pathname.split('/')[1] === route
      ? setActive(true)
      : setActive(false);
  }, [location.pathname, route]);

  return (
    <div>
      <Dropdown
        menu={{
          items: menuItems,
          onClick,
          className: `${
            menuItems?.length === 0
              ? 'hidden'
              : menuItems?.length === 1
              ? 'custom-menu2'
              : 'custom-menu1'
          } `,
        }}
        className={`mx-6 font-medium ${
          activeHeader && path === '/'
            ? ' item-header '
            : active
            ? itemActive
              ? ' item-inactive1 '
              : ' item-active '
            : itemActive
            ? ' item-inactive '
            : ' item-active '
        }
           `}
        trigger={['click']}
        onOpenChange={() => {
          clickHeader();
          setItemActive(!itemActive);
        }}
      >
        <Space>
          {hoverText}
          <DownOutlined
            className={`${
              menuItems?.length === 0
                ? 'hidden'
                : activeHeader && path === '/'
                ? ' arrow-header '
                : active
                ? itemActive
                  ? ' arrow-inactive1 '
                  : ' arrow-active '
                : itemActive
                ? ' arrow-inactive '
                : ' arrow-active '
            }
               ml-1`}
          />
        </Space>
      </Dropdown>
    </div>
  );
}

export default DropDown;
