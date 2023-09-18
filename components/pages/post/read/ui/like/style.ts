import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeIconBox = styled.div<{ isLiked: boolean | undefined }>`
  cursor: pointer;
  height: 100%;
  width: 57px;
  transition: 0.5s;
  transform: ${(e) => e.isLiked && 'rotate(360deg)'};

  & > svg {
    margin-bottom: -36px;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
