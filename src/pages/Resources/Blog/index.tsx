/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import './index.style.scss';
import ScrollToTopButton from 'src/components/ScrollToTop';
import Comment from 'src/components/Comment';
import { useLocation, useNavigate } from 'react-router-dom';
import { resourceApi } from 'src/api/resource-api';
import { addResource } from 'src/redux/resource/action';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RRError } from 'src/types/Api';
import apiCaller from 'src/api/apiCaller';
import MarkdownIt from 'markdown-it';
import { IMAGE_PATH } from 'src/constants/images';
import { REACT_APP_IMAGE_URL } from 'src/configs';

const mdParser = new MarkdownIt({ html: true });

export default function Blog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((state: any) => state.resourceReducer.blogs);
  const resources = useSelector(
    (state: any) => state.resourceReducer.resources,
  );

  const location = useLocation();
  const pathname = location.pathname.split('/');
  const id = pathname[pathname.length - 1];
  const [recentBlogs, setRecentBlog] = useState([]);
  const [hotNews, setHotNews] = useState([]);
  const logIn = useSelector((state: any) => state.authReducer.logIn);
  const blogRequest = async () => {
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };

    const requests = [
      resourceApi.getResource({ category: 'Blog', limitPerPage: 7, page: 1 }),
      resourceApi.getBlog(id),
      resourceApi.getResource({ category: 'News', limitPerPage: 7, page: 1 }),
    ];

    const [recentBlogsResponse, blogsResponse, hotNewsResponse] =
      await Promise.all(
        requests.map((request) => apiCaller({ request, errorHandler })),
      );
    if (blogsResponse && recentBlogsResponse && hotNewsResponse) {
      dispatch(
        addResource({ blogs: blogsResponse.data, resources: resources }),
      );
      setRecentBlog(recentBlogsResponse.data.resources);
      setHotNews(hotNewsResponse.data.resources);
    }
  };

  useEffect(() => {
    blogRequest();
  }, [id]);

  return (
    <div className="lg:container m-auto">
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 ">
          <div className="pr-16">
            <div className="flex text-center items-end">
              <p className="font-bold text-white text-3xl news w-40 py-4 rounded-xl">
                {blogs?.category}
              </p>
              <p className="font-bold text-3xl ml-9">
                {blogs?.createdAt
                  ? format(new Date(blogs?.createdAt), 'MMMM d, yyyy')
                  : null}
              </p>
            </div>
            <p className="font-bold text-[55px] my-0 break-words">
              {blogs?.title}
            </p>
            {blogs?.author ? (
              <p className="font-normal text-2xl">
                By <span className="text-main">{blogs?.author}</span>
              </p>
            ) : null}
            {blogs?.thumbnail && (
              <div className="text-center mb-9">
                <img
                  crossOrigin="anonymous"
                  alt="# "
                  onError={({ currentTarget }) => {
                    currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
                  }}
                  className="max-w-[800px] mt-6 rounded-xl max-h-[600px]"
                  src={`${REACT_APP_IMAGE_URL}${blogs?.thumbnail}`}
                />
              </div>
            )}
            <p className="font-normal text-lg">
              {' '}
              <div
                dangerouslySetInnerHTML={renderMarkdown(blogs?.content)}
                className="img-content"
              />
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#F9F9F9] mt-8 px-5 py-10 rounded-xl">
            <div>
              <p className="font-bold mb-0 text-3xl">
                RECENT <span className="font-light text-3xl">BLOGS</span>
              </p>
              <hr className="border-4 border-main" />
              <div className="max-h-[500px] overflow-auto mb-4">
                {recentBlogs && recentBlogs.length > 0
                  ? recentBlogs?.map((item: any, index: number) => (
                      <div
                        className="cursor-pointer"
                        key={index}
                        onClick={() => navigate(`/resources/blog/${item.id}`)}
                      >
                        <p className="font-medium text-lg text-gray-500 mb-0">
                          {item.title}
                        </p>
                        <hr />
                      </div>
                    ))
                  : 'No data'}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate(`/resources/blog`)}
                  className="h-7 w-24 rounded-md border-solid bg-transparent cursor-pointer active:bg-transparent/5"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="bg-main mt-12 px-5 py-10 rounded-xl h-80">
            <p className="font-bold text-3xl mt-0 text-white">
              Information resource{' '}
            </p>
            <p className="font-bold text-3xl text-white">@thudomultimedia </p>
            <p className="font-normal text-white">
              Let's see the detailed content of the article at
            </p>
            <a
              href="https://vtc.vn/thi-truong-ott-se-tang-gap-3-lan-gia-tri-den-nam-2028-ar678691.html"
              className="text-white"
            >
              https://vtc.vn/thi-truong-ott-se-tang-gap-3-lan-gia-tri-den-nam-2028-ar678691.html
            </a>
          </div>
          <div className="bg-[#F9F9F9] mt-12 px-5 py-10 rounded-xl">
            <div>
              <p className="font-bold mb-0 text-3xl">
                Hot <span className="font-light text-3xl">news</span>
              </p>
              <hr className="border-4 border-main" />
              <div className="max-h-[500px] overflow-auto mb-4">
                {hotNews && hotNews.length > 0
                  ? hotNews?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => navigate(`/resources/new/${item.id}`)}
                      >
                        <p className="font-medium break-words hot-new text-lg text-gray-500 mb-0">
                          {item.title}
                        </p>
                        <hr />
                      </div>
                    ))
                  : 'No data'}
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate(`/resources/new`)}
                  className="h-7 w-24 rounded-md border-solid bg-transparent cursor-pointer active:bg-transparent/5"
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <div className="p-2 text-lg">
        <h4>Comments</h4>
      </div>
      {logIn ? <Comment resourceId={id} /> : 'Hãy đăng nhập để bình luận !'}
    </div>
  );
}

function renderMarkdown(content: string) {
  try {
    const renderedContent = mdParser.render(content || ''); // Handle empty content gracefully
    return { __html: renderedContent };
  } catch (error) {
    console.error('Markdown rendering error:', error);
    return { __html: '<p>Error rendering markdown content</p>' }; // Display an error message
  }
}
