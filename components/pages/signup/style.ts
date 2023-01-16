import styled from '@emotion/styled';

export const SignupBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const Gif = styled.img`
  width: 170px;
  height: 150px;
  margin-bottom: 0.5rem;
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
  transition: 0.1s;

  :hover {
    box-sizing: border-box;
    background: #252727;
    border: 1px solid #17d46f;
    color: #17d46f;
  }
`;

export const Reference = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #eaeaea;
  margin-top: 1rem;
`;
