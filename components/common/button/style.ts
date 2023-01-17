import styled from '@emotion/styled';

export const CommonButton = styled.button`
  width: 100%;
  height: 52px;
  background: linear-gradient(95.2deg, #17d56f 45.83%, #119e6d 93.3%);
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #1c1c1c;
  transition: 0.1s;

  :hover {
    box-sizing: border-box;
    background: #252727;
    border: 1px solid #17d46f;
    color: #17d46f;
  }

  &.needMargin {
    margin-top: 1rem;
  }
`;
