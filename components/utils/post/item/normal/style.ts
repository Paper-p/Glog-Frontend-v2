import styled from '@emotion/styled';

export const NormalPostItemLayout = styled.div<{ backgroundImage: string }>`
  height: 150px;
  border-radius: 10px;
  background-image: ${(e) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaddingBox = styled.div`
  position: relative;
  width: 90%;
  height: 68%;
`;
