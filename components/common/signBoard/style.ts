import styled from '@emotion/styled';

export const SignBoard = styled.div`
  background-color: #33333399;
  width: fit-content;
  padding: 8px 13px;
  text-align: center;
  border-radius: 10px;
  color: #969696;
  margin-bottom: 1rem;

  &.deactivation {
    cursor: pointer;
  }

  &.is-active {
    cursor: pointer;
    background-color: #6e6e75;
    color: #282827;
  }
`;
