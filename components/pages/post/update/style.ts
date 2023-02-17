import styled from '@emotion/styled';

export const IsNotOwnerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: calc(100vh - 110px);

  & > div > button {
    display: block;
    width: 98%;
    height: 45px;
    margin: 1rem auto 1.5rem;
  }
`;

export const Icon = styled.p`
  font-size: 8em;
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #d7d7d7;
  text-align: center;
  margin: 1rem 0 1.5rem;
`;
