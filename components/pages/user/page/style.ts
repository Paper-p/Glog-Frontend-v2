import styled from '@emotion/styled';

export const UserPageLayout = styled.section``;

export const UserProfileSection = styled.section`
  width: 100%;
  height: 320px;
  background-color: #1f2125;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 200px;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;

export const Name = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

export const SectionThatOnlyWorksInMyPage = styled.section`
  width: 100%;
`;

export const EditProfileButton = styled.button`
  display: block;
  width: 120px;
  height: 35px;
  margin: 1rem auto;
  background: #1a1b1e;
  color: #cccccc;
  font-size: 14px;
  text-align: center;
  border: #cccccc 1px solid;
  cursor: pointer;

  &:hover {
    background: #25262b;
  }
`;

export const Logout = styled.p`
  color: red;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const UserPostsSection = styled.section`
  width: 72.5vw;
  margin: auto;
`;

export const PostSignBoardBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const PostListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 16px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
