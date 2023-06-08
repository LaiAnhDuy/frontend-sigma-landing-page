import React, { useState } from "react";
import './index.style.scss';
import { Button, Modal } from "antd";
import { IMAGE_PATH } from "src/constants/images";
import { UserOutlined } from "@ant-design/icons";

export default function Comment() {
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <img src={IMAGE_PATH.COMMENT} onClick={showModal} className={"fixed bottom-28 right-4"}></img>
            <Modal open={isModalOpen} width={"300px"} footer={null} closable={false}>
                <div className=" ">
                    <div className=" ">
                        <div className="flex items-center mb-2">
                            <UserOutlined />
                            <h4 className="m-0 ml-2">Hong Ha Le</h4>
                        </div>
                        <textarea className="w-full h-10 mb-2 border-solid border-gray-200 hover:border-solid hover:border-gray-200">
                            Leave a comment...
                        </textarea>
                        <div className="flex justify-end">
                            <input type="submit" className="h-8 w-16 rounded-md border-white font-bold hover:bg-gray-300 hover:text-gray-50" value="Cancel" />
                            <input type="submit" className="ml-2 h-8 w-16 rounded-md border-white font-bold hover:bg-gray-300 hover:text-gray-50" value="Post" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
