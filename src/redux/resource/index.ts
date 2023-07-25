import { Reducer } from 'redux';
import { ResourceTypes } from 'src/types/Resource';
import { AddBlogProps, RemoveBlogProps, ResourceActionTypes } from './action';

export interface ResourceState {
  resources: ResourceTypes[];
}

const initialState: ResourceState = {
  resources: [],
};

const resourceReducer: Reducer<
  ResourceState,
  AddBlogProps | RemoveBlogProps
> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ResourceActionTypes.ADD_BLOG:
      return {
        ...state,
        resources: [...state.resources, action.payload],
      };
    case ResourceActionTypes.REMOVE_BLOG:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default resourceReducer;
