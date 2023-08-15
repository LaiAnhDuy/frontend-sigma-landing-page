import React from "react";
import './index.style.scss';
import { Select } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import ROUTE from "src/constants/route";
import { DIAL_CODES } from "src/constants/dialCode";
export default function Selection() {
    const location = useLocation();
    const path = location.pathname;
    const { Option } = Select;
    return (
        <Select
            suffixIcon={
                <DownOutlined
                    style={{ pointerEvents: 'none' }}
                    className={`right-9 ${path === `${ROUTE.HOME}` ? 'arrow1' : 'arrow2'}`}
                />
            }
            defaultValue={"+84"}
            className={`bg-transparent w-[66px] -mr-[66px]`}
        >{DIAL_CODES.map((val, index) => {
            return (
                <Option key={index} value={val.name}>
                    {
                        <div className=" flex items-center ">
                            {val.dial_code}
                        </div>
                    }
                </Option>
            );
        })}</Select>
    )
}
