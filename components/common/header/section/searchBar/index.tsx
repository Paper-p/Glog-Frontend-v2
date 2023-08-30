import * as S from './style';
import * as I from 'assets/svg';
import { useRecoilState } from 'recoil';
import { searchAtom } from 'atoms';

function SearchBarSection() {
  const [search, setSearch] = useRecoilState(searchAtom);

  const onSearchKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((oldValue) => ({
      ...oldValue,
      keyword: e.target.value,
    }));
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (!e.nativeEvent.isComposing) {
        e.preventDefault();
        setSearch((oldValue) => ({
          ...oldValue,
          isSearchRequested: true,
        }));
      }
    }
  };

  return (
    <S.SearchBarLayout>
      <S.SearchIcon>
        <I.SearchIcon />
      </S.SearchIcon>
      <S.SearchInput
        placeholder='Enter를 입력해 검색해주세요'
        value={search.keyword}
        onChange={onSearchKeywordChange}
        onKeyDown={onSearch}
      />
    </S.SearchBarLayout>
  );
}

export default SearchBarSection;
