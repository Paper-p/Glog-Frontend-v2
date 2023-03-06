import styled from '@emotion/styled';

export const HeaderLayout = styled.section`
  display: flex;
  width: 72.5%;
  margin: 25px auto 0;
  justify-content: space-between;
  height: 70px;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const Elements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  & > * {
    cursor: pointer;
  }

  &.right-part {
    gap: 9px;

    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 1.063em;
      color: #9d9d9d;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.063em;
    color: #9d9d9d;
  }
`;
