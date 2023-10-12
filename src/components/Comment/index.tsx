import React, { ChangeEvent, useState } from 'react';
import './index.style.scss';
import { HeartFilled } from '@ant-design/icons';
interface FormValue {
  img: string;
  name: string;
  content: string;
  time: string;
  count: number;
}
export default function Comment() {
  // eslint-disable-next-line
  const [reply, setReply] = useState(false);
  const [value, setValue] = useState('');
  // const [listComment,setListComment]=useState([])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const initFormValue: FormValue = {
    img: 'https://i.imgur.com/3J8lTLm.jpg',
    name: 'Test',
    content: value,
    time: '',
    count: 0,
  };
  const initialState = [
    {
      img: 'https://i.imgur.com/zQZSWrt.jpg',
      name: 'San tột',
      content: '🤣🤣🤣🤣',
      time: '1 giờ trước',
      count: 12,
    },
    {
      img: 'https://i.imgur.com/3J8lTLm.jpg',
      name: ' Cà rốt',
      content: ' 🥕🥕🥕🥕',
      time: '2h',
      count: 2,
    },
    {
      img: 'https://i.imgur.com/agRGhBc.jpg',
      name: 'Mai Cồ',
      content: '🤣🤣🤣🤣',
      time: '3h',
      count: 3,
    },
  ];

  const [myArray, setMyArray] = useState<FormValue[]>(initialState);
  const handleCancel = () => {
    setValue('');
  };
  const handleComment = () => {
    setValue('');
    setMyArray((prevArray) => [...prevArray, initFormValue]);
  };
  const [countArray, setCountArray] = useState<number[]>(
    initialState.map(() => 0),
  );

  const handleCount = (index: number) => {
    setCountArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] += 1;
      return newArray;
    });
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className=" ">
          <div className="">
            <div className="border-none ml-auto">
              <div className="p-2 text-lg">
                <h4>Comments</h4>
              </div>
              <div className="mt-2 flex flex-col  p-3 bg-white">
                <div className="flex items-center ">
                  <img
                    alt=""
                    src="https://i.imgur.com/zQZSWrt.jpg"
                    width="44"
                    className="rounded-full mr-2"
                  />
                  <input
                    type="text"
                    className="px-5 h-12 w-full rounded-3xl border-solid border focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-300 focus:border-1"
                    placeholder="Enter your comment..."
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className=" mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="font-bold text-sm h-9 w-24 rounded-full mr-8 border-none bg-white hover:bg-gray-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleComment}
                    disabled={value.length === 0 ? true : false}
                    className="font-bold text-sm h-9 w-28 rounded-full mr-8 border-none bg-white hover:bg-gray-200 cursor-pointer"
                  >
                    Comment
                  </button>
                </div>
              </div>
              <div className="mt-2">
                {myArray.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-row p-3">
                        <img
                          alt=""
                          src={item.img}
                          width="38"
                          height="38"
                          className="rounded-full mr-3"
                        />
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <span className="mr-2">{item.name}</span>
                              <small className="bg-[#35b69f] text-white h-5 w-[92px] text-xs rounded-[5px] text-center mt-2">
                                Top Comment
                              </small>
                            </div>
                            <small>{item.time}</small>
                          </div>
                          <p className="text-justify text-sm mb-0">
                            {item.content}
                          </p>
                          <div className="flex items-center text-sm mt-3 text-center">
                            <p className="text-[#35b69f]">
                              {countArray[index]}
                            </p>
                            <HeartFilled
                              onClick={() => handleCount(index)}
                              className=" ml-3 text-red-600 hover:cursor-pointer "
                            />
                            <p
                              onClick={() => setReply(true)}
                              className="ml-8 hover:cursor-pointer h-7 w-16 rounded-full hover:bg-gray-200 flex justify-center items-center"
                            >
                              Reply
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* {reply ? (
                        <div className="mt-2 flex flex-col  p-3 bg-white">
                          <div className="flex items-center ">
                            <img
                              alt=""
                              src="https://i.imgur.com/zQZSWrt.jpg"
                              width="44"
                              className="rounded-full mr-2"
                            />
                            <input
                              type="text"
                              className="h-12 w-full rounded-3xl border-solid border focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-300 focus:border-2"
                              placeholder="Enter your comment..."
                            />
                          </div>
                          <div className=" mt-3 flex justify-end">
                            <button
                              type="button"
                              className="font-bold text-sm h-9 w-24 rounded-full mr-8 border-none bg-white hover:bg-gray-200 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="font-bold text-sm h-9 w-28 rounded-full mr-8 border-none bg-white hover:bg-gray-200 cursor-pointer"
                            >
                              Comment
                            </button>
                          </div>
                        </div>
                      ) : (
                        ''
                      )} */}
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
