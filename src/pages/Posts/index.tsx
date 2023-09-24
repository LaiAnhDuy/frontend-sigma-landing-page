import React from 'react';
import PostPage from 'src/components/Post';

export function PostEdit() {
  return (
    <div>
      <PostPage mode="edit" />
    </div>
  );
}

export function Post() {
  return (
    <div>
      <PostPage mode="post" />
    </div>
  );
}
