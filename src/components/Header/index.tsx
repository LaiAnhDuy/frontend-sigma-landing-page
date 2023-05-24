import React from 'react'
import './index.style.scss'
import DropDown from './Dropdown'

const menuItems = [
  {
    name: 'Product',
    item: [
      {
        key: '1',
        label: (
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            1st menu item
          </span>
        ),
      },
      {
        key: '2',
        label: '2nd menu item (disabled)',
      },
      {
        key: '3',
        label: '3rd menu item',
      },
      {
        key: '4',
        label: 'a danger item',
      },
    ],
  },
  {
    name: 'Resource',
    item: [
      {
        key: '1',
        label: '1st menu item',
      },
      {
        key: '2',
        label: '2nd menu item (disabled)',
      },
    ],
  },
]

// const logo = process.env.PUBLIC_URL + '/images/Logo.svg';
export default function Header() {
  return (
    <div className={'flex header justify-center shadow-lg'}>
      <div className=" lg:container  items-center flex justify-around  ">
        <img
          alt="#"
          src="./images/logo-mau.svg"
          id="img"
          className="header-item"
        />
        <div className="flex header-item ">
          {menuItems.map((val, index) => (
            <DropDown hoverText={val.name} menuItems={val.item} key={index} />
          ))}
        </div>
        <div className="header-item">
          <button>d</button>
          <button>d</button>
          <button>d</button>
        </div>
      </div>
    </div>
  )
}
