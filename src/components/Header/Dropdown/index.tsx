/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './index.style.scss';

interface DropDownProps {
  menuItems: MenuProps['items'];
  hoverText: JSX.Element | string;
  clickHeader: () => void;
  activeHeader: boolean;
  path: string;
}

function DropDown({
  activeHeader,
  menuItems,
  hoverText,
  clickHeader,
  path,
}: DropDownProps) {
  const [active, setActive] = useState(true);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    setActive(true);
  };

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
            ? ' item-inactive '
            : ' item-active '
        }
           `}
        trigger={['click']}
        onOpenChange={() => {
          clickHeader();
          setActive(!active);
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
