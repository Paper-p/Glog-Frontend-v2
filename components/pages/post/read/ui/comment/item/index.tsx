import Button from 'components/common/button';
import useInputs from 'hooks/useInputs';
import Link from 'next/link';
import * as I from 'assets/svg';
import * as S from './style';
import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function CommentItem() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isMine, setIsMine] = useState<boolean>(true);

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
                  <S.UserProfileImg
                    src={
                      'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg'
                    }
                    alt=''
                  />
                </Link>
              </div>
              <div>
                <S.UserName>asd</S.UserName>
                <S.UserComment>asd</S.UserComment>
              </div>
            </>
          )}
        </S.UserBox>
        <S.CommentSideBox isClick={isClick}>
          {isEdit ? <></> : <S.CreatedAt>2022.12.21</S.CreatedAt>}
          <S.Icon isClick={isClick}>
            {isMine ? (
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
