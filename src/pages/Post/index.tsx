/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Input, Select, Tabs, message } from 'antd';
import ImageUploader from './ImageUploader';
import { EditOutlined, Html5Outlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from 'src/redux/resource/action';

const mdParser = new MarkdownIt();
interface Article {
  title: string;
  author: string;
  markdown: string;
  option: string;
  imageUrl: string;
  imageName: string;
}
const PostPage = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [article, setArticle] = useState<Article>({
    title: '',
    author: '',
    markdown: '',
    option: 'new',
    imageUrl: '',
    imageName: '',
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const resource = useSelector((state: any) => state.resourceReducer);
  const handleEditorChange = ({ text }: { text: string }) => {
    setArticle((prevArticle) => ({ ...prevArticle, markdown: text }));
  };
  const handleImageChange = (imageUrl: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, imageUrl: imageUrl }));
  };
  const handleImage = (imageName: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, imageName: imageName }));
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    message.success('Submitted!');
    setArticles((prevArticles) => [...prevArticles, article]);
    const newArticle = {
      id: articles.length,
      ...article,
    };
    dispatch(addBlog(newArticle));
    setArticle((prevArticle) => ({
      ...prevArticle,
      title: '',
      author: '',
      markdown: '',
      imageUrl: '',
      imageName: '',
    }));
    setActiveTab('1');
  };
  const handleChange = (value: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, option: value }));
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
                <h2 className="text-xl">
                  Title<span className="text-red-600">*</span>
                </h2>
                <Input
                  placeholder="Title"
                  value={article.title}
                  onChange={(e) =>
                    setArticle((prevArticle) => ({
                      ...prevArticle,
                      title: e.target.value,
                    }))
                  }
                />
                <h2 className="text-xl">Author</h2>
                <Input
                  placeholder="Author"
                  value={article.author}
                  onChange={(e) =>
                    setArticle((prevArticle) => ({
                      ...prevArticle,
                      author: e.target.value,
                    }))
                  }
                />
                <h2 className="text-xl">
                  Category<span className="text-red-600">*</span>
                </h2>
                <Select
                  placeholder="Category"
                  style={{ width: 120, fontSize: '1.5rem' }}
                  onChange={handleChange}
                  defaultValue={'new'}
                  options={[
                    { value: 'new', label: 'News' },
                    { value: 'blog', label: 'Blogs' },
                    { value: 'casestudy', label: 'Casestudy' },
                    { value: 'document', label: 'Documents' },
                    { value: 'video', label: 'Video' },
                  ]}
                />
                <h2>
                  Chọn thumbnail<span className="text-red-600">*</span>
                </h2>
                <ImageUploader
                  handleImage={handleImage}
                  imageName={article.imageName}
                  onImageChange={handleImageChange}
                />
                <h2>
                  Content<span className="text-red-600">*</span>
                </h2>
                <MdEditor
                  view={{
                    menu: true,
                    md: true,
                    html: false,
                  }}
                  value={article.markdown}
                  style={{ height: '500px' }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={handleEditorChange}
                />
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
                <img
                  src={article.imageUrl}
                  alt=""
                  className="w-full rounded-xl"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdParser.render(article.markdown),
                  }}
                />
              </div>
            ),
          },
        ]}
      />
      <Button
        className="mt-8"
        disabled={
          !article.title ||
          !article.imageUrl ||
          !article.markdown ||
          !article.option
        }
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <button
        onClick={() => {
          console.log(resource);
        }}
      >
        testst
      </button>
    </div>
  );
};

export default PostPage;
