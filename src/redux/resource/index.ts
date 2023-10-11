/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { BlogTypes } from 'src/types/Resource';
import {
  AddBlogProps,
  AddResourceProps,
  AddResponseProps,
  RemoveBlogProps,
  ResourceActionTypes,
} from './action';

export interface ResourceState {
  data: BlogTypes[];
  blogs: string[];
  resources: string[];
  response: boolean;
}

const initialState: ResourceState = {
  resources: [],
  blogs: [],
  data: [],
  response: false,
};

const resourceReducer: Reducer<
  ResourceState,
  AddBlogProps | RemoveBlogProps | AddResourceProps | AddResponseProps
> = (state = initialState, action) => {
  switch (action.type) {
    case ResourceActionTypes.ADD_BLOG:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ResourceActionTypes.REMOVE_BLOG:
      return {
        ...state,
      };
    case ResourceActionTypes.ADD_RESOURCE:
      return {
        ...state,
        blogs: action.payload?.blogs,
        resources: action.payload?.resources,
      };
    case ResourceActionTypes.ADD_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default resourceReducer;
