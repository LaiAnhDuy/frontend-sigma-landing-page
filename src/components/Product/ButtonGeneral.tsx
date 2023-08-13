import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';
interface ButtonGeneralProps {
  link: string;
  name: string;
  css: string
}
export default function ButtonGeneral({
  link,
  name,
  css
}: ButtonGeneralProps) {
  return (
    <Link to={link}>
      <button className={`${css} rounded border-main border-[1px] border-solid text-[21px] h-[50px] cursor-pointer mr-[50px]`}>
        {name}
      </button>
    </Link>
  );
}
