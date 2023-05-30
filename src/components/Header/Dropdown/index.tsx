/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './index.style.scss';

interface DropDownProps {
  menuItems: MenuProps['items'];
  hoverText: string;
  clickHeader: () => void;
  activeHeader: boolean;
}

function DropDown(props: DropDownProps) {

  const [active, SetActive] = useState(true);
  const onClick: MenuProps['onClick'] = ({ key }) => {
    SetActive(true);
  };
  console.log(props.menuItems?.length);

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
              : 'customMenu'
          } `,
        }}
        className={`mx-6 font-medium ${
          props.activeHeader
            ? ' item_header '
            : active
            ? ' item_menu '
            : ' item_active '
        }
           `}
        trigger={props.menuItems?.length === 0 ? ['hover'] : ['click']}
        onOpenChange={() => {
          props.clickHeader();
          SetActive(!active);
        }}
      >
        <Space>
          {props.hoverText}
          <DownOutlined
            className={`${
              props.menuItems?.length === 0
                ? 'hidden'
                : props.activeHeader
                ? ' arrow_header '
                : active
                ? ' arrow_menu '
                : ' arrow_active '
            }
               ml-1`}
          />
        </Space>
      </Dropdown>
    </div>
  );
}

export default DropDown;
