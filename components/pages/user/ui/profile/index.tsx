import * as S from './style';

interface UserProfileSectionProps {
  nickname: string;
  profileImageUrl: string;
  isMine: boolean;
}

function UserProfileSection(props: UserProfileSectionProps) {
  return (
    <S.UserProfileSection>
      <div>
        <S.ProfileImage src={props.profileImageUrl} alt='user profile image' />
        <S.Name>{props.nickname}</S.Name>
        {props.isMine ? (
          <S.SectionThatOnlyWorksInMyPage>
            <S.EditProfileButton>수정하기</S.EditProfileButton>
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
