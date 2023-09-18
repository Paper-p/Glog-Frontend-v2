import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeIconBox = styled.div<{ isLiked: boolean | undefined }>`
  @keyframes likeAnimation {
    0% {
      transform: scale(1); /* 초기 크기 */
    }
    50% {
      transform: scale(1.1); /* 애니메이션 중간 크기 */
    }
    100% {
      transform: scale(1); /* 최종 크기 (원래 크기로 복귀) */
    }
  }

  cursor: pointer;
  height: 100%;
  width: 57px;
  /* transition: 0.2s;
  transform: ${(e) => e.isLiked && 'rotate(360deg)'}; */

  & > svg {
    margin-bottom: -36px;
    height: 100%;
    width: 100%;
    animation: likeAnimation 0.3s;
    transform-origin: center;
    cursor: pointer;
  }
`;
