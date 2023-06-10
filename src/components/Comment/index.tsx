import React, { ChangeEvent, useState } from "react";
import './index.style.scss';
import { UserOutlined } from "@ant-design/icons";

export default function Comment() {
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setValue('');
    };
    const handlePost = () => {
        setValue('');
        setComment((prevComments) => [...prevComments, value]);
    };
    const [comment, setComment] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const handleOnchange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (

        <div>
            <div className=" ">
                <div className=" ">
                    <div className="flex items-center mb-2">
                        <UserOutlined />
                        <h4 className="m-0 ml-2">Hong Ha Le</h4>
                    </div>
                    <textarea value={value} onChange={handleOnchange} rows={value.split('\n').length} placeholder="Leave a comment..." className="w-full h-10 mb-2 border-solid border-gray-200 focus:border-solid focus:border-gray-400 focus:outline-none resize-none overflow-hidden">
                    </textarea>
                    <div className="flex justify-end">
                        <input type="submit" className="h-8 w-16 rounded-md border-white font-bold active:bg-gray-300 active:text-gray-50 cursor-pointer" value="Cancel" onClick={handleCancel} />
                        <input type="submit" className={`ml-2 h-8 w-16 rounded-md border-white font-bold ${value === '' ? "cursor-no-drop" :"active:bg-gray-300 active:text-gray-50 cursor-pointer"}`} value="Post" disabled={value===''?true:false} onClick={handlePost} />
                    </div>
                </div>
                <hr />
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
        </div >
    );
}
