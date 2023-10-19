/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect, useState } from 'react';
import './index.style.scss';
import { HeartFilled } from '@ant-design/icons';
import randomColor from 'randomcolor';
import { useDispatch, useSelector } from 'react-redux';
import { AuthTypes } from 'src/types/Auth';
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import { RRError } from 'src/types/Api';
import { addComment } from 'src/redux/resource/action';
import { format } from 'date-fns';
import { Collapse, message } from 'antd';

interface CommentProps {
  resourceId: string;
}
export default function Comment({ resourceId }: CommentProps) {
  const [replyChildren, setReplyChildren] = useState<number>(-1);
  const [reply, setReply] = useState<number>(-1);
  const [Id, setId] = useState();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const auth: any = useSelector(
    (state: { authReducer: AuthTypes }) => state.authReducer.user,
  );
  const avatar = auth.firstName?.charAt(0).toUpperCase();
  const bgColor = randomColor({ luminosity: 'light' });

  const commentRequest = async () => {
    const data = {
      resourceId: resourceId,
      limitPerPage: 1000,
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: resourceApi.getComment(data),
      errorHandler,
    });
    if (response) {
      dispatch(addComment(response.data.comments));
    }
  };
  const comments = useSelector((state: any) => state.resourceReducer.comments);
  useEffect(() => {
    commentRequest();
  }, []);
  console.log(comments);

  const handleCancel = () => {
    setValue('');
  };
  const handleComment = async () => {
    const data = {
      resourceId: resourceId,
      content: value,
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: resourceApi.createComment(data),
      errorHandler,
    });
    if (response) {
      setValue('');
      message.success('Comment successfully!');
      commentRequest();
      setReply(-1);
    }
  };
  const handleCommentReply = async (parentId: any, receiver: string) => {
    const data = {
      resourceId: resourceId,
      content: value,
      parentId: parentId,
      receiver: receiver,
    };
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    const response = await apiCaller({
      request: resourceApi.createComment(data),
      errorHandler,
    });
    if (response) {
      setValue('');
      message.success('Comment successfully!');
      commentRequest();
      setReplyChildren(-1);
    }
  };
  const { Panel } = Collapse;
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className=" ">
          <div className="">
            <div className="border-none ml-auto">
              <div className="mt-2 flex flex-col  p-3 bg-white">
                <div className="flex items-center ">
                  <div
                    className={`border-solid rounded-full  border-[1px]   text-center bg-transparent text-white mr-2`}
                    style={{ backgroundColor: bgColor }}
                  >
                    <p className="p-[10px] w-8 h-8 text-xl m-0">{avatar}</p>
                  </div>
                  <input
                    type="text"
                    className="px-5 h-12 w-full rounded-3xl border-solid border-gray-200 focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-500 focus:border-1"
                    placeholder="Enter your comment..."
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className=" mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      handleCancel();
                    }}
                    className="bg-slate-100 font-bold text-sm h-9 w-24 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleComment}
                    disabled={value.length === 0 ? true : false}
                    className="bg-slate-100 font-bold text-sm h-9 w-28 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                  >
                    Comment
                  </button>
                </div>
              </div>
              <div className="mt-2">
                {comments.map((item: any, index: any) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-row p-3">
                        <div
                          className={`h-fit border-solid rounded-full  border-[1px]   text-center bg-transparent text-white mr-2`}
                          style={{ backgroundColor: bgColor }}
                        >
                          <p className="p-[10px] w-8 h-8 text-xl m-0">
                            {item.sender.firstName.charAt(0).toUpperCase()}
                          </p>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <span className="mr-2 text-lg font-bold">
                                {item.sender.firstName}
                              </span>
                              <small className="bg-[#35b69f] text-white h-5 w-[92px] text-xs rounded-[5px] text-center">
                                Top Comment
                              </small>
                            </div>
                            <small>
                              {format(new Date(item.createdAt), 'dd-MM-yyyy')}
                            </small>
                          </div>
                          <p className="text-justify text-sm mb-0 mt-1 break-words">
                            {item.content}
                          </p>
                          <div className="">
                            {/* <p className="text-[#35b69f]"></p> */}
                            {/* <HeartFilled className=" ml-3 text-red-600 hover:cursor-pointer " /> */}
                            <p
                              onClick={() => setReply(index)}
                              className=" hover:cursor-pointer bg-slate-100 h-7 w-16 rounded-full hover:bg-gray-200 flex justify-center items-center"
                            >
                              Reply
                            </p>
                            {reply === index ? (
                              <div className=" flex flex-col  p-3 bg-white">
                                <div className="flex items-center ">
                                  <div
                                    className={`border-solid rounded-full  border-[1px]   text-center bg-transparent text-white mr-2`}
                                    style={{ backgroundColor: bgColor }}
                                  >
                                    <p className="p-2 w-7 h-7 text-xl m-0">
                                      {avatar}
                                    </p>
                                  </div>
                                  <input
                                    type="text"
                                    className="px-5 h-10 w-full rounded-3xl border-solid border-gray-200 !outline-none focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-500 focus:border-1"
                                    placeholder="Enter your comment..."
                                    value={value}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className=" mt-3 flex justify-end">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleCancel();
                                      setReply(-1);
                                    }}
                                    className="bg-slate-100 font-bold text-sm h-9 w-24 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleCommentReply(
                                        item.id,
                                        item.sender.id,
                                      );
                                      setReply(-1);
                                    }}
                                    disabled={value.length === 0 ? true : false}
                                    className="bg-slate-100 font-bold text-sm h-9 w-28 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                                  >
                                    Comment
                                  </button>
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                            <Collapse
                              bordered={false}
                              className="!bg-transparent"
                            >
                              {item.answers && item.answers.length > 0 ? (
                                <Panel
                                  header={item.answers.length + ' replies'}
                                  key={0}
                                  className="headerReply"
                                >
                                  {item.answers &&
                                    item.answers.map((val: any, id: any) => {
                                      return (
                                        <div key={id}>
                                          <div className="flex flex-row p-3">
                                            <div
                                              className={`h-fit border-solid rounded-full  border-[1px]   text-center bg-transparent text-white mr-2`}
                                              style={{
                                                backgroundColor: bgColor,
                                              }}
                                            >
                                              <p className="p-2 w-7 h-7 text-lg m-0">
                                                {val.sender.firstName
                                                  .charAt(0)
                                                  .toUpperCase()}
                                              </p>
                                            </div>
                                            <div className="w-full">
                                              <div className="flex justify-between items-center">
                                                <div className="flex flex-row items-center">
                                                  <span className="mr-2 text-lg font-bold">
                                                    {val.sender.firstName}
                                                  </span>
                                                </div>
                                                <small>
                                                  {format(
                                                    new Date(val.createdAt),
                                                    'dd-MM-yyyy',
                                                  )}
                                                </small>
                                              </div>
                                              <p className="text-justify text-sm mb-0 mt-1 break-words">
                                                {val.sender.id ===
                                                val.receiver.id ? (
                                                  ''
                                                ) : (
                                                  <span className="font-bold">
                                                    @{val.receiver.firstName}
                                                  </span>
                                                )}  
                                                {" " +val.content}
                                              </p>
                                              <div className="">
                                                <p
                                                  onClick={() => {
                                                    setReplyChildren(id);
                                                    setId(item.id);
                                                  }}
                                                  className=" text-sm hover:cursor-pointer bg-slate-100 h-6 w-14 rounded-full hover:bg-gray-200 flex justify-center items-center"
                                                >
                                                  Reply
                                                </p>
                                                {val.parentId === Id &&
                                                replyChildren === id ? (
                                                  <div className=" flex flex-col  p-3 bg-white">
                                                    <div className="flex items-center ">
                                                      <div
                                                        className={`border-solid rounded-full  border-[1px]   text-center bg-transparent text-white mr-2`}
                                                        style={{
                                                          backgroundColor:
                                                            bgColor,
                                                        }}
                                                      >
                                                        <p className="p-2 w-6 h-6 m-0">
                                                          {avatar}
                                                        </p>
                                                      </div>
                                                      <input
                                                        type="text"
                                                        className="px-5 h-8 w-full rounded-3xl border-solid border-gray-200 focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-500 focus:border-1"
                                                        placeholder="Enter your comment..."
                                                        value={value}
                                                        onChange={handleChange}
                                                      />
                                                    </div>
                                                    <div className=" mt-3 flex justify-end">
                                                      <button
                                                        type="button"
                                                        onClick={() => {
                                                          handleCancel();
                                                          setReplyChildren(-1);
                                                        }}
                                                        className="bg-slate-100 font-bold  h-7 w-16 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                                                      >
                                                        Cancel
                                                      </button>
                                                      <button
                                                        type="button"
                                                        onClick={() =>
                                                          handleCommentReply(
                                                            item.id,
                                                            item.sender.id,
                                                          )
                                                        }
                                                        disabled={
                                                          value.length === 0
                                                            ? true
                                                            : false
                                                        }
                                                        className="bg-slate-100 font-bold  h-7 w-17 rounded-full mr-8 border-none hover:bg-gray-200 cursor-pointer"
                                                      >
                                                        Comment
                                                      </button>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  ''
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                </Panel>
                              ) : null}
                            </Collapse>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
