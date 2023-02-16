import * as S from './style';
import PageFooter from '../ui/footer';
import WritePostTag from '../ui/tag';
import WritePostContent from '../ui/content';

function WritePostPage() {
  return (
    <S.WritePostLayout>
      <S.TitleBox isNull={false}>
        <S.TitleInput placeholder='제목을 입력해주세요' type='text' />
      </S.TitleBox>
      <WritePostTag />
      <WritePostContent />
      <PageFooter />
    </S.WritePostLayout>
  );
}

export default WritePostPage;
