import SignBoard from 'components/common/signBoard';
import user from 'network/request/user';
import { useEffect, useState } from 'react';
import { UserData } from 'types/user.type';
import * as S from './style';

function UserPage({ nickname }: { nickname: string }) {
  const [isMine, setIsMine] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const getUserByNickname = async () => {
      try {
        const res: any = await user.getUserByNickname(nickname);
        setUserData(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    getUserByNickname();
  }, []);

  return (
    <S.UserPageLayout>
      <S.UserProfileSection>
        <div>
          <S.ProfileImage
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
            alt='user profile image'
          />
          <S.Name>오종진님</S.Name>
          {isMine ? (
            <S.SectionThatOnlyWorksInMyPage>
              <S.EditProfileButton>수정하기</S.EditProfileButton>
              <S.Logout>로그아웃</S.Logout>
            </S.SectionThatOnlyWorksInMyPage>
          ) : (
            <></>
          )}
        </div>
      </S.UserProfileSection>
      <S.UserPostsSection>
        <S.SignBoardBox>
          <SignBoard>💻 내 게시물’s</SignBoard>
          <SignBoard>👍 좋아요 한 게시물</SignBoard>
        </S.SignBoardBox>
      </S.UserPostsSection>
    </S.UserPageLayout>
  );
}

export default UserPage;
