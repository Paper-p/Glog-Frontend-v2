import styled from '@emotion/styled';

export const NormalPostsLayout = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const SearchResultIsNone = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchText = styled.p`
  color: #fa3830;
  font-weight: 400;
`;
