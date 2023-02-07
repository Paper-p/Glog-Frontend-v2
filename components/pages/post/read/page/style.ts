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

export const PostTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 3em;
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
