import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Input, Select, message } from 'antd';
import ImageUploader from './ImageUploader';

const mdParser = new MarkdownIt();
type Article = {
  title: string;
  author: string;
  markdown: string;
  option: string;
  imageUrl: string;
  imageName: string;
};
const PostPage = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    author: '',
    markdown: '',
    option: 'new',
    imageUrl: '',
    imageName: '',
  });

  const handleEditorChange = ({ text }: { text: string }) => {
    setArticle((prevArticle) => ({ ...prevArticle, markdown: text }));
  };
  const handleImageChange = (imageUrl: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, imageUrl: imageUrl }));
  };
  const handleImage = (imageName: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, imageName: imageName }));
  };
  const handleSubmit = () => {
    message.success('Submitted!');
    setArticle((prevArticle) => ({
      ...prevArticle,
      title: '',
      author: '',
      markdown: '',
      imageUrl: '',
      imageName: '',
    }));
    console.log(article);
  };
  const handleChange = (value: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, option: value }));
  };
  return (
    <div className="container mx-auto text-center">
      <div className="grid grid-cols-2 gap-x-9 text-left">
        <div className="col-span-1">
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
          <ImageUploader
            handleImage={handleImage}
            imageName={article.imageName}
            onImageChange={handleImageChange}
          />
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
        <div className="col-span-1">
          <h2 className="underline">Preview</h2>
          <h1>{article.title}</h1>
          {article.author && (
            <h2>
              By <span className="text-main">{article.author}</span>
            </h2>
          )}
          <img src={article.imageUrl} alt="" className="w-full rounded-xl" />
          <div
            dangerouslySetInnerHTML={{
              __html: mdParser.render(article.markdown),
            }}
          />
        </div>
      </div>
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
    </div>
  );
};

export default PostPage;
