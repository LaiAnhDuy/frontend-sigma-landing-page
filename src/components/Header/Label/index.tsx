import React from 'react';
import { Link } from 'react-router-dom';

interface LabelProps {
  url: string;
  title: string;
  content: string;
}
export default function Label({ url, title, content }: LabelProps) {
  return (
    <Link to={url}>
      <div className="w-50">
        <p className="m-0 text-base font-medium mb-2 text-main">{title}</p>
        <p className="font-medium m-0 content">{content}</p>
      </div>
    </Link>
  );
}
