import styled from '@emotion/styled';

export const UserPostsSection = styled.section`
  width: 72.5vw;
  margin: auto;
`;

export const SignBoardBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const PostList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 16px;
`;

export const ThereAreNoPostsYet = styled.div`
  margin-top: 7rem;
  text-align: center;
`;

export const Icon = styled.p`
  font-size: 8em;
`;

export const Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #d7d7d7;
`;
