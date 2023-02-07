import styled from '@emotion/styled';

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
