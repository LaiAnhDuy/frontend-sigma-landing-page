import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Input } from 'antd';
import ImageUploader from './ImageUploader';

const mdParser = new MarkdownIt();
type Article = {
  title: string;
  author: string;
  markdown: string;
  option: string;
  image: string;
};
const Admin = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    author: '',
    markdown: '',
    option: '',
    image: '',
  });

  const handleEditorChange = ({ text }: { text: string }) => {
    setArticle((prevArticle) => ({ ...prevArticle, markdown: text }));
  };
  const handleImageChange = (imageUrl: string) => {
    setArticle((prevArticle) => ({ ...prevArticle, image: imageUrl }));
  };
  const handleSubmit = () => {
    console.log(article);
  };
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl">
        Title<span className="text-red-600">*</span>
      </h1>
      <Input
        placeholder="Title"
        className="text-3xl mb-4"
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
        className="text-xl"
        onChange={(e) =>
          setArticle((prevArticle) => ({
            ...prevArticle,
            author: e.target.value,
          }))
        }
      />
      <ImageUploader onImageChange={handleImageChange} />
      <MdEditor
        value={article.markdown}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <div>
        <h2>Preview</h2>
        <h1>{article.title}</h1>
        <h2>
          By <span className="text-main">{article.author}</span>
        </h2>
        <img src={article.image} alt="" className="w-full rounded-xl" />
        <div
          dangerouslySetInnerHTML={{
            __html: mdParser.render(article.markdown),
          }}
        />
      </div>
      <Button onClick={handleSubmit}> Submit </Button>
    </div>
  );
};

export default Admin;
