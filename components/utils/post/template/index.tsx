import PostingContent from './ui/content';
import TemplateFooter from './ui/footer';
import PostingTag from './ui/tag';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { postingTempalteValueAtom } from 'atoms';
import { useState } from 'react';

type posting = 'create' | 'update';

interface PostingTemplateProps {
  postingType: posting;
}

function PostingTemplate(props: PostingTemplateProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [postingTemplateValue, setPostingTemplateValue] = useRecoilState(
    postingTempalteValueAtom
  );
  const [titleError, setTitleError] = useState<boolean>(false);
  const [contentError, setContentError] = useState<boolean>(false);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostingTemplateValue((oldPostingTemplateValue) => ({
      ...oldPostingTemplateValue,
      title: e.target.value,
    }));
  };

  const templateValueNullCheck = () => {
    const data = postingTemplateValue;
    const isTitleNull = data.title.trim().length === 0;
    const isContentNull =
      String(data.content).replace(/\n/g, '').trim().length === 0;

    if (isTitleNull && isContentNull) {
      setTitleError(true);
      setContentError(true);
      setErrorMessage('제목과 내용은 필수 입력입니다');
    } else if (isTitleNull) {
      setTitleError(true);
      setContentError(false);
      setErrorMessage('제목은 필수 입력입니다');
    } else if (isContentNull) {
      setTitleError(false);
      setContentError(true);
      setErrorMessage('내용은 필수 입력입니다');
    } else {
      setTitleError(false);
      setContentError(false);
      setErrorMessage('');
    }
  };

  return (
    <S.PostingTemplateLayout>
      <S.TitleBox titleError={titleError}>
        <S.TitleInput
          name='title'
          placeholder='제목을 입력해주세요'
          onChange={onTitleChange}
          type='text'
        />
      </S.TitleBox>
      <PostingTag />
      <PostingContent contentError={contentError} />
      <TemplateFooter
        postingType={props.postingType}
        errorMessage={errorMessage}
        onPublishing={templateValueNullCheck}
      />
    </S.PostingTemplateLayout>
  );
}

export default PostingTemplate;
