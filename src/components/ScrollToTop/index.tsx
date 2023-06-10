import React, { useState } from 'react';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 30);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isVisible ? '' : 'hidden'}`}>
      <UpOutlined
        className={`cursor-pointer p-3 opacity-0 rounded-full text-white fixed bottom-5 right-5 transition-opacity bg-main ${
          isVisible ? 'opacity-100' : ''
        }`}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTopButton;
