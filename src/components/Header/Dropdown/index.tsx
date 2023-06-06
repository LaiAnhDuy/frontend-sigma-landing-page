/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './index.style.scss';

interface DropDownProps {
  menuItems: MenuProps['items'];
  hoverText: JSX.Element|string;
  clickHeader: () => void;
  activeHeader: boolean;
  path:string
}

function DropDown(props: DropDownProps) {

  const [active, setActive] = useState(true);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    setActive(true);
  };

  return (
    <div>
      <Dropdown
        menu={{
          items: props.menuItems,
          onClick,
          className: `${
            props.menuItems?.length === 0
              ? 'hidden'
              : props.menuItems?.length === 1
              ? 'custom'
              : 'custom-menu'
          } `,
        }}
        className={`mx-6 font-medium ${
          props.activeHeader && props.path==="/"
            ? ' item-header '
            : active
            ? ' item-menu '
            : ' item-active '
        }
           `}
        trigger={['hover']}
        onOpenChange={() => {
          props.clickHeader();
          setActive(!active);
        }}
      >
        <Space>
          {props.hoverText}
          <DownOutlined
            className={`${
              props.menuItems?.length === 0
                ? 'hidden'
                : props.activeHeader && props.path==="/"
                ? ' arrow-header '
                : active
                ? ' arrow-menu '
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
