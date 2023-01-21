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

export const PostTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.25em;
  color: #ffffff;
`;

export const PostContent = styled.p`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #85888d;
  margin-top: 0.5rem;
  transition: 0.1s;

  :hover {
    color: #ffffff;
  }
`;

export const PostStatBar = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  align-items: center;
  gap: 8px;
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
