import styled from '@emotion/styled';

export const HeaderLayout = styled.section`
  display: flex;
  width: 72.5%;
  margin: 25px auto 0;
  justify-content: space-between;
  height: 70px;
`;

export const Elements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &.right-part {
    gap: 16px;

    p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      color: #e0e0e0;
    }
  }
`;

export const UserProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  object-fit: cover;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #e0e0e0;
  }
`;
