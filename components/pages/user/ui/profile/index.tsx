import { modalsAtomFamily } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';

interface UserProfileSectionProps {
  nickname: string;
  profileImageUrl: string;
  isMine: boolean;
}

function UserProfileSection(props: UserProfileSectionProps) {
  const [_, setUpdateProfileModal] = useRecoilState(
    modalsAtomFamily('updateProfileModal')
  );
  return (
    <S.UserProfileSection>
      <div>
        <S.ProfileImage src={props.profileImageUrl} alt='user profile image' />
        <S.Name>{props.nickname}</S.Name>
        {props.isMine ? (
          <S.SectionThatOnlyWorksInMyPage>
            <S.EditProfileButton onClick={() => setUpdateProfileModal(true)}>
              수정하기
            </S.EditProfileButton>
            <S.Logout>로그아웃</S.Logout>
          </S.SectionThatOnlyWorksInMyPage>
        ) : (
          <></>
        )}
      </div>
    </S.UserProfileSection>
  );
}

export default UserProfileSection;
