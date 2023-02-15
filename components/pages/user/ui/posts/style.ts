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
