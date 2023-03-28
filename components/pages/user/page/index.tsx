import { modalsAtomFamily } from 'atoms';
import DeletePostModal from 'components/modals/modal/deletePost';
import LogoutModal from 'components/modals/modal/logout';
import UpdateProfileModal from 'components/modals/modal/updateProfile';
import user from 'network/request/user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { UserData } from 'types/user.type';
import UserPostsSection from '../ui/posts';
import UserProfileSection from '../ui/profile';
import * as S from './style';

function UserPage({ nickname }: { nickname: string }) {
  const [updateProfileModal] = useRecoilState(
    modalsAtomFamily('updateProfileModal')
  );
  const router = useRouter();
  const [logoutModal] = useRecoilState(modalsAtomFamily('logoutModal'));
  const [deletePostModal] = useRecoilState(modalsAtomFamily('deletePostModal'));
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [userData, setUserData] = useState<UserData>({
    userId: '',
    nickname: '익명의 개발자',
    profileImageUrl: '/images/default-profileImage.svg',
    feedList: [],
    isMine: false,
  });

  const getUserByNickname = async () => {
    try {
      const res: any = await user.getUserByNickname(nickname);
      setUserData(res.data);
    } catch (e: any) {
      if (e.response.status === 404) {
        router.replace('/not-found?type=유저');
      }
    }
  };

  useQuery({
    queryKey: 'update',
    queryFn: getUserByNickname,
  });

  return mounted ? (
    <S.UserPageLayout>
      {updateProfileModal && (
        <UpdateProfileModal
          nickname={userData?.nickname}
          profileImageUrl={userData?.profileImageUrl}
        />
      )}
      {logoutModal && <LogoutModal />}
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
  ) : (
    <></>
  );
}

export default UserPage;
