import user from 'network/request/user';
import { useEffect, useState } from 'react';
import { UserData } from 'types/user.type';
import UserPostsSection from '../ui/posts';
import UserProfileSection from '../ui/profile';
import * as S from './style';

function UserPage({ nickname }: { nickname: string }) {
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const getUserByNickname = async () => {
      try {
        const res: any = await user.getUserByNickname(nickname);
        setUserData(res.data);
      } catch (e: any) {
        throw new Error(e);
      }
    };

    getUserByNickname();
  }, []);

  return (
    <S.UserPageLayout>
      <UserProfileSection
        nickname={String(userData?.nickname)}
        profileImageUrl={String(userData?.profileImageUrl)}
        isMine={Boolean(userData?.isMine)}
      />
      <UserPostsSection
        userPosts={userData?.feedList}
        nickname={String(userData?.nickname)}
        isMine={Boolean(userData?.isMine)}
      />
    </S.UserPageLayout>
  );
}

export default UserPage;
