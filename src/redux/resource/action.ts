import { ResourceTypes } from 'src/types/Resource';

export enum ResourceActionTypes {
  REMOVE_BLOG = 'REMOVE_BLOG',
  ADD_BLOG = 'ADD_BLOG',
}

export interface RemoveBlogProps {
    type: ResourceActionTypes.REMOVE_BLOG;
    payload: {
      id: string; 
    };
  }
export interface AddBlogProps {
  type: ResourceActionTypes.ADD_BLOG;
  payload: ResourceTypes;
}

export const removeBlog = (id: string): RemoveBlogProps => ({
    type: ResourceActionTypes.REMOVE_BLOG,
    payload: {
      id,
    },
  });

export const addBlog = (payload: ResourceTypes): AddBlogProps => ({
  type: ResourceActionTypes.ADD_BLOG,
  payload,
});
