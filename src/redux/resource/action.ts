/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogTypes, ResourceTypes } from 'src/types/Resource';

export enum ResourceActionTypes {
  REMOVE_BLOG = 'REMOVE_BLOG',
  ADD_BLOG = 'ADD_BLOG',
  ADD_RESOURCE = 'ADD_RESOURCE',
  ADD_RESPONSE = 'ADD_RESPONSE',
  ADD_COMMENT = 'ADD_COMMENT',
}

export interface RemoveBlogProps {
  type: ResourceActionTypes.REMOVE_BLOG;
  payload: {
    id: string;
  };
}
export interface AddBlogProps {
  type: ResourceActionTypes.ADD_BLOG;
  payload: BlogTypes;
}
export interface AddResponseProps {
  type: ResourceActionTypes.ADD_RESPONSE;
  payload: any;
}

export interface AddResourceProps {
  type: ResourceActionTypes.ADD_RESOURCE;
  payload: ResourceTypes;
}
export interface AddCommentProps {
  type: ResourceActionTypes.ADD_COMMENT;
  payload: string[];
}

export const removeBlog = (id: string): RemoveBlogProps => ({
  type: ResourceActionTypes.REMOVE_BLOG,
  payload: {
    id,
  },
});

export const addBlog = (payload: BlogTypes): AddBlogProps => ({
  type: ResourceActionTypes.ADD_BLOG,
  payload,
});
export const addResource = (payload: ResourceTypes): AddResourceProps => ({
  type: ResourceActionTypes.ADD_RESOURCE,
  payload,
});
export const addResponse = (payload: boolean): AddResponseProps => ({
  type: ResourceActionTypes.ADD_RESPONSE,
  payload,
});
export const addComment = (payload: string[]): AddCommentProps => ({
  type: ResourceActionTypes.ADD_COMMENT,
  payload,
});
