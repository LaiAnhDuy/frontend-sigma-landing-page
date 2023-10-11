/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useDispatch } from 'react-redux';
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import PostPage from 'src/components/Post';
import { addResponse } from 'src/redux/resource/action';
import { RRError } from 'src/types/Api';

export function PostEdit() {
  const dispatch = useDispatch();
  const errorHandler = (error: RRError) => {
    console.log('Fail: ', error.msg);
  };
  const hanldeData = async (data: any, id: any) => {
    const res = await apiCaller({
      request: resourceApi.updateBlog(id, data),
      errorHandler,
    });
    if (res) {
      dispatch(addResponse(true));
    } else {
      dispatch(addResponse(false));
    }
  };
  return (
    <div>
      <PostPage mode="edit" handleData={hanldeData} />
    </div>
  );
}

export function Post() {
  const dispatch = useDispatch();

  const errorHandler = (error: RRError) => {
    console.log('Fail: ', error.msg);
  };
  const handleData = async (data: any) => {
    const res = await apiCaller({
      request: resourceApi.createResource(data),
      errorHandler,
    });
    if (res) {
      dispatch(addResponse(true));
    } else {
      dispatch(addResponse(false));
    }
  };
  return (
    <div>
      <PostPage mode="post" handleData={handleData} />
    </div>
  );
}
