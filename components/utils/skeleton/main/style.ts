import styled from '@emotion/styled';

export const SkeletonLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 16px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export const Skeleton = styled.div`
  height: 150px;
  border-radius: 10px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;
