import { useState } from 'react';
import * as S from './style';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import MarkdownPreview from '@uiw/react-markdown-preview';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

function WritePostContent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
          textareaProps={{
            placeholder: '내용을 입력해주세요',
          }}
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
      tabContent: <MarkdownPreview />,
    },
  ];
  return (
    <S.ContentBox>
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

export default WritePostContent;
