import styled from '@emotion/styled';

export const ErrorText = styled.p<{ needMargin: boolean }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #e83f28;
  padding-left: 10px;
  margin-bottom: ${(e) => (e.needMargin ? '0.675rem' : '')};
`;
