import * as S from './style';
import * as I from 'assets/svg';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

function ReadPostPage() {
  return (
    <S.PostPageLayout>
      <S.PostTitle>asd</S.PostTitle>
      <S.TagList>
        <S.Tag>asd</S.Tag>
        <S.Tag>asd</S.Tag>
        <S.Tag>asd</S.Tag>
        <S.Tag>asd</S.Tag>
      </S.TagList>
      <S.PostInfoBox>
        <S.Author>
          <S.ProfileImage src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg' />
          <S.Wrapper>
            <S.Name>오종진</S.Name>
            <S.DatePostCreated>222222</S.DatePostCreated>
          </S.Wrapper>
        </S.Author>
        <S.PostStatBar>
          <S.StatWrapper>
            <I.Like />
            <S.Stat>203</S.Stat>
          </S.StatWrapper>
          <S.StatWrapper>
            <I.Hit />
            <S.Stat>215</S.Stat>
          </S.StatWrapper>
        </S.PostStatBar>
      </S.PostInfoBox>
      <S.Thumbnail src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg' />
      <S.Markdown data-color-mode='dark'>
        <MDEditor.Markdown source={'asd'} />
      </S.Markdown>
    </S.PostPageLayout>
  );
}

export default ReadPostPage;
