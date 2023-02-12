import Button from 'components/common/button';
import useInputs from 'hooks/useInputs';
import Link from 'next/link';
import * as I from 'assets/svg';
import * as S from './style';
import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useMutation, useQueryClient } from 'react-query';
import comment from 'network/request/comment';
import { currentCommentIdAtom, deleteCommentModalAtom } from 'atoms';
import { useRecoilState } from 'recoil';

interface CommentItemProps {
  id: string;
  author: {
    userId: string;
    nickname: string;
    profileImageUrl: string;
  };
  content: string;
  createdAt: Date;
  isMine: boolean;
}

function CommentItem(props: CommentItemProps) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [_, setCurrntCommentId] = useRecoilState(currentCommentIdAtom);
  const [__, setDeleteCommentModal] = useRecoilState(deleteCommentModalAtom);
  const queryClient = useQueryClient();

  const [{ fixedComment }, onChange] = useInputs({
    fixedComment: props.content,
  });

  const onUpdateComment = async () => {
    if (fixedComment !== '') {
      setIsClick(false);
      return await comment.updateComment(props.id, fixedComment);
    }
  };

  const { mutate: updateComment } = useMutation(onUpdateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onDeleteComment = () => {
    setCurrntCommentId(props.id);
    setDeleteCommentModal(true);
  };

  useEffect(() => {
    if (isClick === false) {
      setIsEdit(false);
    }
  }, [isClick]);

  return (
    <S.CommentItemLayout>
      <S.CommentItem>
        <S.UserBox>
          {isEdit ? (
            <S.EditTextarea>
              <TextareaAutosize
                name='fixedComment'
                onChange={onChange}
                value={fixedComment}
              />
              <Button onClick={() => updateComment()}>수정</Button>
            </S.EditTextarea>
          ) : (
            <>
              <div>
                <Link href={'/asd'}>
                  <S.UserProfileImg src={props.author.profileImageUrl} alt='' />
                </Link>
              </div>
              <div>
                <S.UserName>{props.author.nickname}</S.UserName>
                <S.UserComment>{props.content}</S.UserComment>
              </div>
            </>
          )}
        </S.UserBox>
        <S.CommentSideBox isClick={isClick}>
          {isEdit ? <></> : <S.CreatedAt>2022.12.21</S.CreatedAt>}
          <S.Icon isClick={isClick}>
            {props.isMine ? (
              <>
                <div onClick={() => setIsClick(!isClick)}>
                  {isClick ? <I.ControlIcon /> : <I.KebobButton />}
                </div>
                {isClick ? (
                  <S.CommentUpdate>
                    <S.EditText onClick={() => setIsEdit(true)}>
                      수정
                    </S.EditText>
                    <S.RemoveText onClick={() => onDeleteComment()}>
                      삭제
                    </S.RemoveText>
                  </S.CommentUpdate>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </S.Icon>
        </S.CommentSideBox>
      </S.CommentItem>
      <S.Border />
    </S.CommentItemLayout>
  );
}

export default CommentItem;
