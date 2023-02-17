import styled from '@emotion/styled';

export const PostingTemplateLayout = styled.div`
  width: 72.5%;
  margin: auto;
  padding-bottom: 150px;

  @media screen and (max-width: 1350px) {
    width: 95vw;
  }
`;
export const TitleBox = styled.div<{ titleError: boolean }>`
  width: 100%;
  height: 100px;
  margin-top: 40px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
  border-radius: ${(e) => (e.titleError ? '10px' : '')};
  padding: 10px;
  box-sizing: border-box;
  filter: ${(e) => (e.titleError ? 'drop-shadow(0px 1px 7px #e45b3c)' : '')};
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: #1a1b1e;
  border: none;
  color: #ededed;
  font-weight: 500;

  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #252727 inset !important;
    box-shadow: 0 0 0 30px #252727 inset !important;
  }
`;
