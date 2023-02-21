import React from 'react';
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
  const queryClient = useQueryClient();

  const onPostLike = async () => {
    return await feed.postLike(props.id);
  };

  const { mutate: postLike } = useMutation(onPostLike, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onPostLikeCancle = async () => {
    return await feed.postLikeCancellation(props.id);
  };

  const { mutate: postLikeCancle } = useMutation(onPostLikeCancle, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onLikeIconClick = () => {
    if (props.isLiked) {
      postLikeCancle();
    } else {
      postLike();
    }
  };

  return (
    <>
      {tokenService.getLocalAccessToken() ? (
        <S.Wrapper>
          {props.children}
          <S.LikeIconBox isLiked={props.isLiked} onClick={onLikeIconClick}>
            {props.isLiked ? (
              <I.AfterPostLikedIcon />
            ) : (
              <I.BeforePostLikedIcon />
            )}
          </S.LikeIconBox>
        </S.Wrapper>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}

export default PostLike;
