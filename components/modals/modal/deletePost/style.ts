import styled from '@emotion/styled';

export const DeletePostModal = styled.div`
  width: 350px;
  height: 200px;
  background: #252727;
  border-radius: 15px;
  padding: 30px;
`;

export const TitleText = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #dbd4d4;
  margin: 2rem 0 1.8rem;
`;

export const Text = styled.p`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #dbd4d4;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  button {
    width: 136px;
    height: 35px;
    font-size: 14px;
    margin-top: 48px;
  }
`;
