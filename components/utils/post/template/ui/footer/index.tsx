import * as S from './style';

type posting = 'create' | 'update';

interface FooterProps {
  postingType: posting;
  errorMessage: string;
  onPublishing: () => void;
}

function TemplateFooter(props: FooterProps) {
  return (
    <S.FooterLayout>
      <p className='error'>{props.errorMessage}</p>
      <S.ButtonBox>
        <p>취소</p>
        <div onClick={props.onPublishing}>
          <p>{props.postingType === 'create' && '작성하기'}</p>
          <p>{props.postingType === 'update' && '수정하기'}</p>
        </div>
      </S.ButtonBox>
    </S.FooterLayout>
  );
}

export default TemplateFooter;
