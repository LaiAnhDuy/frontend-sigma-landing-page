import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
import React, { ChangeEvent, useEffect, useState } from 'react';
import './index.style.scss';
import { Modal } from 'antd';
interface ImageUploaderProps {
  handleImageChange: (fileName: File) => void;
  handleImgPreview: (value: string) => void;
  imageThumbnail?: string;
}
export default function ImageUploader({
  handleImageChange,
  handleImgPreview,
  imageThumbnail,
}: ImageUploaderProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [image, setImage] = useState('');
  useEffect(() => {
    if (imageThumbnail) {
      setImage(imageThumbnail);
    }
  }, [imageThumbnail]);
  const handleImagePreview = () => {
    setPreviewOpen(true);
  };
  const handleCancel = () => {
    setPreviewOpen(false);
  };
  const deleteImage = () => {
    setImage('');
    handleImageChange({} as File);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImage(objectURL);
      handleImageChange(file);
      handleImgPreview(objectURL);
    }
  };

  return (
    <div>
      {image ? (
        <div className=" text-left !w-24 h-24 rounded-md  border-1  border-solid border-gray-300  ">
          <CloseCircleFilled
            onClick={deleteImage}
            className="absolute text-red-500"
          />
          <img
            crossOrigin="anonymous"
            src={`${imageThumbnail ? imageThumbnail : image}`}
            alt="test"
            onClick={handleImagePreview}
            className=" w-full h-full cursor-pointer rounded-md "
          />
        </div>
      ) : (
        <label
          htmlFor="fileInput"
          className="rounded-md upload cursor-pointer w-24 h-24 border-1 border-dashed border-gray-300 hover:border-blue-500 flex justify-center items-center !flex-col"
        >
          <PlusOutlined />
          Upload
        </label>
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        className="hidden"
      />
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={handleCancel}
        title="Preview Thumbnail"
        className="thumbnail-preview"
      >
        <img
          crossOrigin="anonymous"
          src={`${image}`}
          alt="#"
          className=" w-[70%] "
        />
      </Modal>
    </div>
  );
}
