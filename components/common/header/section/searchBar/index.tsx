import * as S from './style';
import * as I from 'assets/svg';
import { useRecoilState } from 'recoil';
import { searchKeywordAtom } from 'atoms';

function SearchBarSection() {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordAtom);

  return (
    <S.SearchBarLayout>
      <S.SearchIcon>
        <I.SearchIcon />
      </S.SearchIcon>
      <S.SearchInput />
    </S.SearchBarLayout>
  );
}

export default SearchBarSection;
