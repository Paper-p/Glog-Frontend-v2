import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import feed from 'network/request/feed';
import { useMutation, useQueryClient } from 'react-query';
import tokenService from 'utils/tokenService';

interface PostLikeProps {
  children: React.ReactNode;
  isLiked: boolean;
  id: string;
}

function PostLike(props: PostLikeProps) {
  const mountRef = useRef(1);
  const queryClient = useQueryClient();
  const [liked, setLiked] = useState<boolean>(props.isLiked);

  const onPostLike = async () => {
    return await feed.postLike(props.id);
  };

  const { mutate: postLike } = useMutation(onPostLike, {
    onMutate: async (newPostData) => {
      await queryClient.cancelQueries('post');

      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', newPostData);

      return {
        snapshotOfPreviousData,
      };
    },

    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },

    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onPostLikeCancle = async () => {
    return await feed.postLikeCancellation(props.id);
  };

  const { mutate: postLikeCancle } = useMutation(onPostLikeCancle, {
    onMutate: async (newPostData) => {
      await queryClient.cancelQueries('post');

      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', newPostData);

      return {
        snapshotOfPreviousData,
      };
    },

    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  useEffect(() => {
    if (mountRef.current > 1) {
      if (liked) {
        postLike();
      }
      if (!liked) {
        postLikeCancle();
      }
    }
  }, [liked, mountRef.current]);

  return (
    <>
      {tokenService.getLocalAccessToken() ? (
        <S.Wrapper>
          {props.children}
          <S.LikeIconBox
            isLiked={liked}
            onClick={() => {
              setLiked((prevLiked) => !prevLiked);
              mountRef.current++;
            }}
          >
            {liked ? <I.AfterPostLikedIcon /> : <I.BeforePostLikedIcon />}
          </S.LikeIconBox>
        </S.Wrapper>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}

export default PostLike;
