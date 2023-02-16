import * as S from './style';

function WritePostTag() {
  return (
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
  );
}

export default WritePostTag;
