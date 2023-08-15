import React, { useRef } from 'react';

interface ImageUploaderProps {
  onImageChange: (imageUrl: string) => void;
  handleImage: (imageName: string) => void;
  imageName: string;
}
const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageChange,
  handleImage,
  imageName,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange(imageUrl);
      handleImage(file.name);
    }
  };

  return (
    <div className="flex my-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleButtonClick}>Chọn ảnh</button>
      <div className="ml-4">{imageName}</div>
    </div>
  );
};

export default ImageUploader;
