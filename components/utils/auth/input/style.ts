import styled from '@emotion/styled';

export const InputWrapper = styled.div<{ needMargin: boolean; error: boolean }>`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  background: #252727;
  border-radius: 10px;
  margin-bottom: ${(e) => (e.needMargin ? '0.675rem' : '')};
  filter: ${(e) => (e.error ? 'drop-shadow(0px 1px 7px #e45b3c)' : '')};
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 13px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  background: #252727;
  margin-left: 5px;
  border: 0;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);

  &.lock {
    margin-left: 6.8px;
  }
`;
