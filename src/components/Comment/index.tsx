import React, { ChangeEvent, useState } from "react";
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
    const handlePost = () => {
        setValue('');
        setComment((prevComments) => [...prevComments, value]);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comment, setComment] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const handleOnchange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1 }/${current.getFullYear()}`;
    return (

        <div>
            <img src={IMAGE_PATH.COMMENT} onClick={showModal} className={"fixed bottom-28 right-4"}></img>
            <Modal open={isModalOpen} width={"300px"} footer={null} onOk={handleOk} onCancel={handleCancel}>
                <div className=" ">
                    <div className=" ">
                        <div className="flex items-center mb-2">
                            <UserOutlined />
                            <h4 className="m-0 ml-2">Hong Ha Le</h4>
                        </div>
                        <textarea onChange={handleOnchange} rows={value.split('\n').length} placeholder="Leave a comment..." className="w-full h-10 mb-2 border-solid border-gray-200 focus:border-solid focus:border-gray-400 focus:outline-none resize-none overflow-hidden">
                        </textarea>
                        <div className="flex justify-end">
                            <input type="submit" className="h-8 w-16 rounded-md border-white font-bold focus:bg-gray-300 focus:text-gray-50" value="Cancel" onClick={handleCancel}/>
                            <input type="submit" className="ml-2 h-8 w-16 rounded-md border-white font-bold hover:bg-gray-300 hover:text-gray-50" value="Post" onClick={handlePost}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="max-h-80 pr-1 custom-scroll">
                        {comment.map((val, index) => {
                            return (
                                <div
                                    key={index}
                                    className="border-gray-300 border-solid rounded-lg mb-3 p-2"
                                >
                                    <div className="flex items-center mb-2">
                                        <UserOutlined />
                                        <h4 className="m-0 ml-2">Hong Ha Le on {date}</h4>
                                    </div>
                                    <p className="m-0 ">{val}</p>
                                </div>  
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
