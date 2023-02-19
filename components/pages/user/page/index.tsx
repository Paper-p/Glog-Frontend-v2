import { modalsAtomFamily } from 'atoms';
import DeletePostModal from 'components/modals/modal/deletePost';
import EditProfileModal from 'components/modals/modal/editProfile';
import user from 'network/request/user';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { UserData } from 'types/user.type';
import UserPostsSection from '../ui/posts';
import UserProfileSection from '../ui/profile';
import * as S from './style';

function UserPage({ nickname }: { nickname: string }) {
  const [editProfileModal] = useRecoilState(
    modalsAtomFamily('editProfileModal')
  );
  const [userData, setUserData] = useState<UserData>({
    userId: '',
    nickname: '익명의 개발자',
    profileImageUrl: '',
    feedList: [],
    isMine: false,
  });
  const [deletePostModal] = useRecoilState(modalsAtomFamily('deletePostModal'));

  const getUserByNickname = async () => {
    try {
      const res: any = await user.getUserByNickname(nickname);
      setUserData(res.data);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useQuery({
    queryKey: 'update',
    queryFn: getUserByNickname,
  });

  return (
    <S.UserPageLayout>
      {editProfileModal && <EditProfileModal />}
      {deletePostModal && <DeletePostModal />}
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
