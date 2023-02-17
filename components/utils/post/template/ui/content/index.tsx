import { useState } from 'react';
import * as S from './style';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { postingTempalteValueAtom } from 'atoms';
import { useRecoilState } from 'recoil';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

function PostingContent({ contentError }: { contentError: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [postingTemplateValue, setPostingTemplateValue] = useRecoilState(
    postingTempalteValueAtom
  );

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabbar = [
    {
      tabTitle: (
        <S.Tabs
          key='write'
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          글작성
        </S.Tabs>
      ),
      tabContent: (
        <MDEditor
          hideToolbar={true}
          onChange={(value) => {
            setPostingTemplateValue((oldPostingTemplateValue) => ({
              ...oldPostingTemplateValue,
              content: value,
            }));
          }}
          textareaProps={{
            placeholder: '내용을 입력해주세요',
          }}
          value={postingTemplateValue.content}
        />
      ),
    },
    {
      tabTitle: (
        <S.Tabs
          key='preview'
          className={activeIndex === 1 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          미리보기
        </S.Tabs>
      ),
      tabContent: (
        <div data-color-mode='dark'>
          <MarkdownPreview source={String(postingTemplateValue.content)} />
        </div>
      ),
    },
  ];
  return (
    <S.ContentBox contentError={contentError}>
      <S.Tabbar>
        {tabbar.map((idx) => {
          return idx.tabTitle;
        })}
      </S.Tabbar>
      <S.Markdown data-color-mode='dark'>
        {tabbar[activeIndex].tabContent}
      </S.Markdown>
    </S.ContentBox>
  );
}

export default PostingContent;
