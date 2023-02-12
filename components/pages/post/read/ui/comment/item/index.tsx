import Button from 'components/common/button';
import useInputs from 'hooks/useInputs';
import Link from 'next/link';
import * as I from 'assets/svg';
import * as S from './style';
import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface CommentItemProps {
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

  const [{ edit }, onChange] = useInputs({
    edit: 'content',
  });

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
              <TextareaAutosize name='edit' onChange={onChange} value={edit} />
              <Button>수정</Button>
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
                    <S.RemoveText>삭제</S.RemoveText>
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
