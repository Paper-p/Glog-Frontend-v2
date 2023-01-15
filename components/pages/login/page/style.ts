import styled from '@emotion/styled';

export const LoginPageLayout = styled.section`
  display: flex;
  height: calc(100vh - 95px);
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 366px;
  margin-bottom: 5rem;
`;

export const LogoToCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin: 1.7rem 0 2.5rem 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  background: #252727;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 13px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  background: #252727;
  margin-left: 5px;
  border: 0;
  outline: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);

  &.password-input {
    margin-left: 6.8px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 60px;
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
  margin-top: 1rem;
  transition: 0.1s;

  :hover {
    box-sizing: border-box;
    background: #252727;
    border: 1px solid #17d46f;
    color: #17d46f;
  }
`;
