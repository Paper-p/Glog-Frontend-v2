import styled from '@emotion/styled';

export const PostPageLayout = styled.section`
  width: 60%;
  margin: 6rem auto 0;
`;

export const PostTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 3em;
  color: #ffffff;
`;

export const TagList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: content;
  display: flex;
  gap: 10px 6px;
  margin-top: 1.8rem;
`;

export const Tag = styled.div`
  word-break: break-all;
  height: content;
  padding: 10px 18px;
  background: #3a3b3d;
  border-radius: 10px;
  font-size: 0.88em;
  font-weight: bold;
  color: #969696;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PostInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
  border-radius: 40px;
`;

export const Wrapper = styled.div``;

export const Name = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

export const DatePostCreated = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #999999;
`;

export const PostStatBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const StatWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const Stat = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #929292;
  margin: 0.1rem 0 0 0;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  margin: 3rem auto 0;
  display: block;
`;

export const ReadMarkdown = styled.div`
  .w-md-editor-input {
    display: none;
  }
  .w-md-editor-text {
    display: none;
  }
  .w-md-editor-text-input {
    display: none;
  }
`;

export const dummy = styled.div``;
