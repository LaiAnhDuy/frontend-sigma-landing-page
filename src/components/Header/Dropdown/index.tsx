import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { MenuProps, message } from 'antd'
import { Dropdown, Space } from 'antd'
import './index.style.css'

interface DropDownProps {
  menuItems: MenuProps['items']
  hoverText: string
}

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`)
}
function DropDown(props: DropDownProps) {
  return (
    <div>
      <Dropdown
        menu={{ items: props.menuItems, onClick }}
        className={`mx-6  item`}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {props.hoverText}
            <DownOutlined className="arrow ml-1" />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default DropDown
