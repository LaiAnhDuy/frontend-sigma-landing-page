/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-computed-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form, Input, Select, Tabs, message } from 'antd';
import ImageUploader from './ImageUploader';
import { EditOutlined, Html5Outlined } from '@ant-design/icons';
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import { RRError } from 'src/types/Api';
import { IMAGE_PATH } from 'src/constants/images';
import ROUTE from 'src/constants/route';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, updateLoginState } from 'src/redux/auth/action';
import './index.style.scss';
import { REACT_APP_IMAGE_URL } from 'src/configs';

const mdParser = new MarkdownIt({
  html: true,
});
interface Article {
  title: string;
  author: string;
  content: string;
  category: string;
  thumbnail: string;
}
interface PostPageProps {
  mode: 'edit' | 'post';
}
export default function PostPage({ mode }: PostPageProps) {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');
  const [edit, setEdit] = useState(false);
  const [article, setArticle] = useState<Article>({
    title: '',
    author: 'Admin',
    content: '',
    category: 'News',
    thumbnail: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageChange = (fileName: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, thumbnail: fileName }));
    if (fileName === '') {
      form.resetFields(['thumbnail']);
    }
  };
  const handleMarkDownChange = ({ text }: { text: string }) => {
    setArticle((prevArticle) => ({ ...prevArticle, content: text }));
  };

  useEffect(() => {
    if (mode === 'edit') {
      handleFillForm();
      setEdit(true);
    } else if (mode === 'post') {
      setEdit(false);
    }
  }, [mode]);

  const errorHandler = (error: RRError) => {
    console.log('Fail: ', error.msg);
    if (error.ec === 419 || error.ec === 420) {
      navigate(ROUTE.HOME);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      dispatch(removeUser());
      dispatch(updateLoginState(false));
    }
  };
  const handleFillForm = async () => {
    const response = await apiCaller({
      request: resourceApi.getBlog(id),
      errorHandler,
    });
    if (response) {
      setArticle((prevArticle) => ({
        ...prevArticle,
        ...response.data,
      }));
      form.setFieldsValue({
        ...response.data,
      });
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (value) => {
        const data = {
          title: value.title,
          author: value.author,
          category: value.category,
          content: value.content,
          thumbnail: article.thumbnail,
        };

        const response = edit
          ? await apiCaller({
              request: resourceApi.updateBlog(id, data),
              errorHandler,
            })
          : await apiCaller({
              request: resourceApi.createResource(data),
              errorHandler,
            });
        if (response) {
          message.success('Submitted!');
          form.resetFields(['title', 'content', 'thumbnail', 'category']);
          form.setFieldsValue({ ['author']: 'Admin' });
          setArticle((prevArticle) => ({ ...prevArticle, thumbnail: '' }));
          navigate(ROUTE.ADMIN);
          setActiveTab('1');
        }
      })
      .catch(() => {
        setActiveTab('1');
      });
  };

  return (
    <div className="container mx-auto text-center">
      <Tabs
        activeKey={activeTab}
        onTabClick={(key) => setActiveTab(key)}
        defaultActiveKey="1"
        items={[
          {
            label: (
              <span>
                <EditOutlined />
                Edit
              </span>
            ),
            key: '1',
            children: (
              <div className="text-left">
                <Form
                  form={form}
                  name="basic"
                  layout="vertical"
                  className="grid grid-cols-3 gap-x-8"
                >
                  <div className="col-span-1">
                    <Form.Item
                      className="label text-left "
                      label={<h2 className="text-xl">Title</h2>}
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your title!',
                        },
                      ]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                      className="label text-left "
                      label={<h2 className="text-xl">Author</h2>}
                      name="author"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your author!',
                        },
                      ]}
                      initialValue={'Admin'}
                    >
                      <Input placeholder="Author" />
                    </Form.Item>
                    <Form.Item
                      className="label text-left "
                      label={<h2 className="text-xl">Category</h2>}
                      name="category"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your category!',
                        },
                      ]}
                      initialValue={'News'}
                    >
                      <Select
                        placeholder="Category"
                        style={{ width: 120, fontSize: '1.5rem' }}
                        options={[
                          { value: 'News', label: 'News' },
                          { value: 'Blog', label: 'Blogs' },
                          { value: 'Casestudy', label: 'Casestudy' },
                          { value: 'Document', label: 'Documents' },
                          { value: 'Video', label: 'Video' },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item
                      className="label text-left "
                      label={<h2 className="text-xl">Thumbnail</h2>}
                      name="thumbnail"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your thumbnail!',
                        },
                      ]}
                    >
                      <div className="flex items-center w-24 h-24 justify-center">
                        <ImageUploader
                          handleImageChange={handleImageChange}
                          imageThumbnail={article.thumbnail}
                        />
                      </div>
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item
                      className="label text-left "
                      label={<h2 className="text-xl">Content</h2>}
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your content!',
                        },
                      ]}
                    >
                      <div>
                        <MdEditor
                          view={{
                            menu: true,
                            md: true,
                            html: false,
                          }}
                          className="markdown"
                          style={{ height: '500px' }}
                          value={article.content}
                          onChange={handleMarkDownChange}
                          renderHTML={(text) => mdParser.render(text)}
                        />
                      </div>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            ),
          },
          {
            label: (
              <span>
                <Html5Outlined />
                Preview
              </span>
            ),
            key: '2',
            children: (
              <div className="text-left">
                <h1>{article.title}</h1>
                {article.author && (
                  <h2>
                    By <span className="text-main">{article.author}</span>
                  </h2>
                )}
                {article.thumbnail && (
                  <img
                    crossOrigin="anonymous"
                    src={`${REACT_APP_IMAGE_URL}/${article.thumbnail}`}
                    alt="#"
                    className="w-full rounded-xl"
                    onError={({ currentTarget }) => {
                      currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
                    }}
                  />
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdParser.render(article.content),
                  }}
                />
              </div>
            ),
          },
        ]}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleSubmit}
        className="mt-8"
      >
        Submit
      </Button>
    </div>
  );
}
