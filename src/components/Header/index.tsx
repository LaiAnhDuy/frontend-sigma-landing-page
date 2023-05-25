import React from 'react'
import './index.style.scss'
import DropDown from './Dropdown'
import { menuItems } from './menuItems'


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
        <div className="flex header-item">
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
