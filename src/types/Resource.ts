/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResourceTypes {
  resources: string[];
  blogs: string[];
}
export interface BlogTypes {
  id: number;
  title: string;
  author: string;
  markdown: string;
  option: string;
  imageUrl: string;
}

export interface ResourceProps {
  page: number;
  value: string;
  limitPerPage: number;
  setTotalPages: (data: any) => void;
  dispatchAddResource: (data: any) => void;
}
