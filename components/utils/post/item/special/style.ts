import styled from '@emotion/styled';

export const SpecialPostItemLayout = styled.div`
  position: relative;
  height: 330px;
  border-radius: 10px;
  cursor: pointer;
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
  height: 145px;
  bottom: 0;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//padding not working
export const PostInformation = styled.div`
  position: relative;
  width: 92%;
  height: 80%;
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
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
