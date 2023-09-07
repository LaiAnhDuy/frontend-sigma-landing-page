import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
import React, { ChangeEvent, useEffect, useState } from 'react';
import apiCaller from 'src/api/apiCaller';
import { resourceApi } from 'src/api/resource-api';
import { RRError } from 'src/types/Api';
import './index.style.scss';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ROUTE from 'src/constants/route';
import { removeUser, updateLoginState } from 'src/redux/auth/action';
import { IMAGE_PATH } from 'src/constants/images';
interface ImageUploaderProps {
  handleImageChange: (fileName: string) => void;
  imageThumbnail: string;
}
export default function ImageUploader({
  handleImageChange,
  imageThumbnail,
}: ImageUploaderProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setImage(imageThumbnail);
  }, [imageThumbnail]);
  const handleImagePreview = () => {
    setPreviewOpen(true);
  };
  const handleCancel = () => {
    setPreviewOpen(false);
  };
  const deleteImage = async () => {
    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
      if (error.ec === 419 || error.ec === 420) {
        navigate(ROUTE.HOME);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        dispatch(removeUser());
        dispatch(updateLoginState(false));
      }
    };
    const response = await apiCaller({
      request: resourceApi.deleteFile(image),
      errorHandler,
    });
    if (response) {
      handleImageChange('');
      setImage('');
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const errorHandler = (error: RRError) => {
      console.log('Fail: ', error);
    };
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const response = await apiCaller({
        request: resourceApi.upFile(formData),
        errorHandler,
      });
      if (response) {
        setImage(response.data.fileName);
        handleImageChange(response.data.fileName);
      }
    }
  };

  return (
    <div>
      {image ? (
        <div className=" !w-24 h-24 text-right rounded-md  border-1  border-solid border-gray-300  ">
          <CloseCircleFilled
            onClick={deleteImage}
            className="absolute text-red-500"
          />
          <img
            crossOrigin="anonymous"
            src={`http://123.30.235.196:5388/api/static/${
              imageThumbnail ? imageThumbnail : image
            }`}
            alt="#"
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
          src={`http://123.30.235.196:5388/api/static/${image}`}
          alt="#"
          className=" w-[70%] "
          onError={({ currentTarget }) => {
            currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
          }}
        />
      </Modal>
    </div>
  );
}
