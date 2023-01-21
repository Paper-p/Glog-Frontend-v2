import NormalPostItem from 'components/utils/post/item/normal';
import * as S from './style';
import PostTypeBoard from 'components/utils/post/typeBoard';

function NormalPosts() {
  return (
    <>
      <PostTypeBoard>💻 게시물’s</PostTypeBoard>
      <S.NormalPostsLayout>
        <NormalPostItem />
        <NormalPostItem />
        <NormalPostItem />
      </S.NormalPostsLayout>
    </>
  );
}

export default NormalPosts;
