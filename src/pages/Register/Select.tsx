import React from "react";
import './index.style.scss';
import { Select } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
export default function Selection() {
    const location = useLocation();
    const path = location.pathname;
    return (
        <Select
            suffixIcon={
                <DownOutlined
                    style={{ pointerEvents: 'none' }}
                    className={`right-9 ${path === '/' ? 'arrow1' : 'arrow2'}`}
                />
            }
            defaultValue="vn"
            className={`bg-transparent w-[60px] -mr-[60px]`}
            options={[
                {
                    value: 'Usa',
                    label: (
                        <div className=" flex items-center ">
                            +44
                        </div>
                    ),
                },
                {
                    value: 'vn',
                    label: (
                        <div className=" flex items-center ">
                            +84
                        </div>
                    ),
                },
                {
                    value: 'Japan',
                    label: (
                        <div className=" flex items-center ">
                            +81
                        </div>
                    ),
                },
                {
                    value: 'Korean',
                    label: (
                        <div className=" flex items-center ">
                            +82
                        </div>
                    ),
                },
                {
                    value: 'Trung Quốc',
                    label: (
                        <div className=" flex items-center ">
                            +86
                        </div>
                    ),
                },
                {
                    value: 'German',
                    label: (
                        <div className=" flex items-center ">
                            +49
                        </div>
                    ),
                },
                {
                    value: 'Đài Loan',
                    label: (
                        <div className=" flex items-center ">
                            +02
                        </div>
                    ),
                },
                {
                    value: 'Australia',
                    label: (
                        <div className=" flex items-center ">
                            +03
                        </div>
                    ),
                },
                {
                    value: 'Singapore',
                    label: (
                        <div className=" flex items-center ">
                            +04
                        </div>
                    ),
                }
            ]}
        />
    )
}
