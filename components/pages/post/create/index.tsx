import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import * as S from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';

import { useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

function WritePostPage() {
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
    <S.WritePostLayout>
      <S.TitleBox isNull={false}>
        <S.TitleInput placeholder='제목을 입력해주세요' type='text' />
      </S.TitleBox>
      <S.WriteTagLayout>
        <S.TagInputBox>
          <S.TagInput name='content' placeholder='태그를 입력해주세요' />
        </S.TagInputBox>
        <S.TagListBox>
          {/* {tag.map((item) => (
          <div key={item.id}>
            <S.Tag
              onClick={() => {
                onRemoveTag(item);
              }}
            >
              {item.name}
            </S.Tag>
          </div>
        ))} */}
        </S.TagListBox>
      </S.WriteTagLayout>
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
      <S.FooterLayout>
        <p className='error'>{'errorMessage'}</p>
        <S.ButtonBox>
          <p>취소</p>
          <div>
            <p>{'mode'}</p>
          </div>
        </S.ButtonBox>
      </S.FooterLayout>
    </S.WritePostLayout>
  );
}

export default WritePostPage;
