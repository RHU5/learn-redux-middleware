import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'modules/posts';

import PostList from 'components/PostList';

function PostListContainer() {
  const { loading, data, error } = useSelector((state) => {
    return state.posts.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
