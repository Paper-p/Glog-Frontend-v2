import styled from '@emotion/styled';

export const SearchBarLayout = styled.section`
  width: 520px;
  height: 36px;
  background: rgba(51, 51, 51, 0.7);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1300px) {
    width: 320px;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  margin-left: 15px;

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 88%;
  background: none;
  border: 0;
  outline: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);

  @media screen and (max-width: 1240px) {
    width: 80%;
  }
`;
