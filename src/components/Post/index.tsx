/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-computed-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form, Input, Select, Spin, Tabs, message } from 'antd';
import ImageUploader from './ImageUploader';
import { EditOutlined, Html5Outlined } from '@ant-design/icons';
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import { RRError } from 'src/types/Api';
import ROUTE from 'src/constants/route';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './index.style.scss';
import { REACT_APP_IMAGE_URL } from 'src/configs';
import { useSelector } from 'react-redux';

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
  handleData: (data: any, id?: any) => void;
}
export default function PostPage({ mode, handleData }: PostPageProps) {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');
  const [article, setArticle] = useState<Article>({
    title: '',
    author: 'Admin',
    content: '',
    category: 'News',
    thumbnail: '',
  });
  const [imagePreview, setImagePreview] = useState<File>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleImageChange = (fileName: File) => {
    if (fileName.name === '') {
      form.resetFields(['thumbnail']);
    }
    setImagePreview(fileName);
  };

  const response = useSelector((state: any) => state.resourceReducer.response);
  useEffect(() => {
    if (response === true) {
      message.success('Submitted!');
      form.resetFields(['title', 'content', 'thumbnail', 'category']);
      form.setFieldsValue({ ['author']: 'Admin' });
      setArticle((prevArticle) => ({ ...prevArticle, thumbnail: '' }));
      navigate(ROUTE.ADMIN);
      setActiveTab('1');
    }
  }, [response]);

  const handleImgPreview = (value: string) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      thumbnail: value,
    }));
  };
  const handleMarkDownChange = ({ text }: { text: string }) => {
    setArticle((prevArticle) => ({ ...prevArticle, content: text }));
  };

  useEffect(() => {
    if (mode === 'edit') {
      handleFillForm();
    }
  }, [mode]);

  const errorHandler = (error: RRError) => {
    console.log('Fail: ', error.msg);
  };
  const handleFillForm = async () => {
    const response = await apiCaller({
      request: resourceApi.getBlog(id),
      errorHandler,
    });
    if (response) {
      setImagePreview(response.data.thumbnail);
      setArticle((prevArticle) => ({
        ...prevArticle,
        ...response.data,
        thumbnail: REACT_APP_IMAGE_URL + response.data.thumbnail,
      }));
      form.setFieldsValue({
        ...response.data,
        thumbnail: response.data.thumbnail,
      });
    }
  };

  const handleTest = (value: any, allValues: any) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      author: allValues.author,
      title: allValues.title,
    }));
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (value) => {
        if (imagePreview) {
          const formData = new FormData();
          formData.append('file', imagePreview);
          const res = await apiCaller({
            request: resourceApi.upFile(formData),
            errorHandler,
          });
          if (res) {
            const data = {
              title: value.title,
              author: value.author,
              category: value.category,
              content: value.content,
              thumbnail: res.data.fileName,
            };
            handleData(data, id);
          }
        }
      })
      .catch(() => {
        setActiveTab('1');
      });
  };
  console.log(
    useSelector((state: any) => state.authReducer.loading),
    'tesstst',
  );
  const loading = useSelector((state: any) => state.authReducer.loading);
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
                  onValuesChange={handleTest}
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
                          handleImgPreview={handleImgPreview}
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
                    src={`${article.thumbnail}`}
                    alt="#"
                    className="w-full rounded-xl"
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

      {loading ? (
        <Spin></Spin>
      ) : (
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
          className="mt-8"
        >
          Submit
        </Button>
      )}
    </div>
  );
}
