import {
  AddResourceProps,
  ResourceActionTypes,
  RemoveResourceProps,
} from './action';

import { Reducer } from 'redux';

export interface ResourceState {
  resources: string[];
  blogs: string[];
}

const initialState: ResourceState = {
  resources: [],
  blogs: [],
};

const resourceReducer: Reducer<
  ResourceState,
  AddResourceProps | RemoveResourceProps
> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ResourceActionTypes.ADD_RESOURCE:
      return {
        ...state,
        blogs: action.payload.blogs,
        resources: action.payload.resources,
      };
    case ResourceActionTypes.REMOVE_RESOURCE:
      return {
        ...state,
        blogs: [],
        resources: [],
      };
    default:
      return state;
  }
};

export default resourceReducer;
