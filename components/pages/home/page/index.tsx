import { searchAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import HotPosts from '../posts/hot';
import NormalPosts from '../posts/normal';
import * as S from './style';

function HomePage() {
  const [search] = useRecoilState(searchAtom);

  return (
    <S.HomePageLayout>
      {!search.keyword && <HotPosts />}
      <NormalPosts />
    </S.HomePageLayout>
  );
}

export default HomePage;
