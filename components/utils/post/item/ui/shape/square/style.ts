import styled from '@emotion/styled';

export const SquarePostItemLayout = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 1500px) {
    height: 250px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const InformationWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 125px;
  bottom: 0;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(14px);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//padding not working
export const PaddingBox = styled.div`
  position: relative;
  width: 92%;
  height: 80%;
`;
