import styled from '@emotion/styled';

export const PostPageLayout = styled.section`
  width: 60%;
  margin: 6rem auto 0;

  @media screen and (max-width: 1350px) {
    width: 70vw;
  }
  @media screen and (max-width: 900px) {
    width: 92vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeIconBox = styled.div<{ isLiked: boolean | undefined }>`
  cursor: pointer;
  height: 100%;
  width: 57px;
  transition: 0.7s;
  transform: ${(e) => e.isLiked && 'rotate(360deg)'};

  & > svg {
    height: 100%;
    width: 100%;
  }
`;

export const PostTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 2.8em;
  color: #ffffff;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  margin: 3rem auto 0;
  display: block;
`;

export const ReadMarkdown = styled.div`
  .wmde-markdown {
    background: #1a1b1e;
    font-size: 17px;
    color: #fff;
    margin: 5rem 0 4rem;
  }
`;
