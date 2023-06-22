import React from "react";
import './index.style.scss';

export default function Comment() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="flex justify-center items-center ">
                    <div className="">
                        <div className="border-none bg-[#fff] ml-auto">
                            <div className="p-2 text-lg">
                                <h6>Comments</h6>
                            </div>
                            <div className="mt-2 flex items-center p-3 bg-[#fafafa]">
                                <img src="https://i.imgur.com/zQZSWrt.jpg" width="44" className="rounded-full mr-2" />
                                <input
                                    type="text"
                                    className="h-12 w-full rounded-3xl border-solid border focus:!bg-gray-50  focus:!outline-none focus:!border-solid focus:!border-gray-300 focus:border-2"
                                    placeholder="Enter your comment..."
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="font-bold text-sm h-8 w-20 rounded-full mr-8 border-none bg-white hover:bg-gray-200">Cancel</button>
                                <button type="button" className="font-bold text-sm h-8 w-24 rounded-full mr-8 border-none bg-white hover:bg-gray-200">Comment</button> 
                            </div>
                            <div className="mt-2">
                                <div className="flex flex-row p-3">
                                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="38" height="38" className="rounded-full mr-3" />
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-row items-center">
                                                <span className="mr-2">Brian selter</span>
                                                <small className="bg-[#35b69f] text-white h-5 w-[92px] text-xs rounded-[5px] text-center mt-2">Top Comment</small>
                                            </div>
                                            <small>12h ago</small>
                                        </div>
                                        <p className="text-justify text-sm mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                        </p>
                                        <div className="flex flex-row text-sm mt-3">
                                            <span className="text-[#35b69f]"><i className="fa fa-heartbeat mr-2"></i>24</span>
                                            <span className="ml-3"><i className="fa fa-comments-o mr-2"></i>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row p-3">
                                    <img src="https://i.imgur.com/3J8lTLm.jpg" width="38" height="38" className="rounded-full mr-3" />
                                    <div className="w-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-row items-center">
                                                <span className="mr-2">Seltos Majito</span>
                                                <small className="bg-[#35b69f] text-white h-5 w-[92px] text-xs rounded-[5px] text-center mt-2">Top Comment</small>
                                            </div>
                                            <small>2h ago</small>
                                        </div>
                                        <p className="text-justify text-sm mb-0">
                                            Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Aliquam faucibus purus in massa.
                                        </p>
                                        <div className="flex flex-row text-sm mt-3">
                                            <span className="text-[#35b69f]"><i className="fa fa-heartbeat mr-2"></i>14</span>
                                            <span className="ml-3"><i className="fa fa-comments-o mr-2"></i>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row p-3">
                                    <img src="https://i.imgur.com/agRGhBc.jpg" width="38" height="38" className="rounded-full mr-3" />
                                    <div className="w-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-row items-center">
                                                <span className="mr-2">Maria Santola</span>
                                                <small className="bg-[#35b69f] text-white h-5 w-[92px] text-xs rounded-[5px] text-center mt-2">Top Comment</small>
                                            </div>
                                            <small className="">12h ago</small>
                                        </div>
                                        <p className="text-justify text-sm mb-0">
                                            Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Urna condimentum mattis pellentesque id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                        </p>
                                        <div className="flex flex-row text-sm mt-3">
                                            <span className="text-[#35b69f]"><i className="fa fa-heartbeat mr-2"></i>54</span>
                                            <span className="ml-3"><i className="fa fa-comments-o mr-2"></i>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};



