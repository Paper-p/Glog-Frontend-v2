import SignBoard from 'components/common/signBoard';
import * as S from './style';

function UserPostsSection() {
  return (
    <S.UserPostsSection>
      <S.SignBoardBox>
        <SignBoard>💻 내 게시물’s</SignBoard>
        <SignBoard>👍 좋아요 한 게시물</SignBoard>
      </S.SignBoardBox>
    </S.UserPostsSection>
  );
}

export default UserPostsSection;
