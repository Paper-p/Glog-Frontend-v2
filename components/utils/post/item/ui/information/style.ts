import styled from '@emotion/styled';

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

export const PostControlSection = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100 !important;
  cursor: pointer;
`;

export const PostControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  & > p.update {
    color: #18d570;
  }

  & > p.delete {
    color: #e83f28;
  }
`;
