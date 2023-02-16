import styled from '@emotion/styled';

export const WritePostLayout = styled.div`
  width: 72.5%;
  margin: auto;
  padding-bottom: 150px;

  @media screen and (max-width: 1350px) {
    width: 95vw;
  }
`;
export const TitleBox = styled.div<{ isNull: boolean }>`
  width: 100%;
  height: 100px;
  margin-top: 40px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
  border-radius: ${(e) => (e.isNull ? '10px' : '')};
  padding: 10px;
  box-sizing: border-box;
  filter: ${(e) => (e.isNull ? 'drop-shadow(0px 1px 7px #e45b3c)' : '')};
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

export const WriteTagLayout = styled.div`
  margin-top: 20px;
`;

export const TagInputBox = styled.div`
  width: 100%;
  height: 50px;
  background: #1a1b1e;
  padding-left: 5px;
  margin-bottom: 5px;
`;

export const TagInput = styled.input`
  width: 100%;
  height: 100%;
  background: #1a1b1e;
  border: none;
  font-size: 20px;
  color: #969696;
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

export const TagListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72.5vw;
  height: content;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  height: content;
  padding: 10px 18px;
  background: #3a3b3d;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #969696;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: fadein 0.4s;
  -moz-animation: fadein 0.4s; /* Firefox */
  -webkit-animation: fadein 0.4s; /* Safari and Chrome */
  -o-animation: fadein 0.4s; /* Opera */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Tabbar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  background: #373b45;

  .is-active {
    box-sizing: content-box;
    background-color: #1f2125;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #d8d7d7;
  font-weight: 700;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  width: 100%;
  border-radius: 2px;
  border: 1px solid #767676;
  margin-top: 40px;
`;

export const Markdown = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #1f2125;
  padding: 25px;

  .w-md-editor {
    box-shadow: inherit !important;
  }
  .w-md-editor-bar {
    display: none;
  }
  .wmde-markdown h1 {
    border-bottom: 1px solid #484848;
  }
  .wmde-markdown h2 {
    border-bottom: 1px solid #484848;
  }
  .w-md-editor-text {
    padding: 0;
  }
  .w-md-editor-input {
    width: 100%;
    background-color: #1f2125;
  }
  .w-md-editor-preview {
    display: none;
  }
  .w-md-editor-text-input {
    color: white;
  }
  .wmde-markdown.wmde-markdown-color {
    background: none;
    min-height: 40vh !important;
    height: fit-content !important;
  }
  .w-md-editor-text-pre,
  .w-md-editor-text-input {
    min-height: 40vh;
    color: white;
  }
  .wmde-markdown-var.w-md-editor.w-md-editor-show-live {
    min-height: 40vh !important;
    height: fit-content !important;
    background-color: #1f2125;
  }
`;

export const FooterLayout = styled.footer`
  position: fixed;
  display: flex;
  width: 72.5%;
  height: 100px;
  left: 50%;
  bottom: 0;
  margin-left: -36.25%;
  align-items: center;
  justify-content: center;
  background: #262626;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  font-size: 17px;
  p.error {
    color: #e83f28;
    @media screen and (max-width: 900px) {
      position: absolute;
      left: 50px;
    }
    @media screen and (max-width: 600px) {
      position: absolute;
      left: 15px;
    }
  }
  @media screen and (max-width: 1350px) {
    width: 95vw;
    margin-left: -47.5%;
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  gap: 40px;
  top: 50%;
  right: 5px;
  color: #18d570;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 900px) {
    gap: 20px;
  }
  @media screen and (max-width: 600px) {
    gap: 10px;
    right: -30px;
  }
  p {
    cursor: pointer;
    font-weight: bold;
  }
  div {
    font-weight: bold;
    color: #18d570;
    font-size: 17px;
  }
`;
