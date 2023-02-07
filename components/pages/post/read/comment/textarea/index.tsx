import CommonButton from 'components/common/button';
import tokenService from 'utils/tokenService';
import TextareaAutosize from 'react-textarea-autosize';
import * as S from './style';

function CommentTextArea() {
  return (
    <>
      {tokenService.getLocalAccessToken() ? (
        <S.CommentTextArea>
          <div style={{ padding: '18px', width: '90%' }}>
            <TextareaAutosize
              name='content'
              placeholder='댓글을 입력해주세요'
            />
          </div>
          <CommonButton>등록</CommonButton>
        </S.CommentTextArea>
      ) : (
        <S.NotLogged>댓글작성은 로그인이 필요해요</S.NotLogged>
      )}
    </>
  );
}

export default CommentTextArea;
