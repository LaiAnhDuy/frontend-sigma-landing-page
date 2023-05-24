import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { MenuProps, message } from 'antd'
import { Dropdown, Space } from 'antd'
import './index.style.scss'

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
        <Space>
          {props.hoverText}
          <DownOutlined className="arrow ml-1" />
        </Space>
      </Dropdown>
    </div>
  )
}

export default DropDown
