import * as S from './style';

function PageFooter() {
  return (
    <S.FooterLayout>
      <p className='error'>{'errorMessage'}</p>
      <S.ButtonBox>
        <p>취소</p>
        <div>
          <p>{'mode'}</p>
        </div>
      </S.ButtonBox>
    </S.FooterLayout>
  );
}

export default PageFooter;
