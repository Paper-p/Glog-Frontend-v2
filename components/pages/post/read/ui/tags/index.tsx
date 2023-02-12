import * as S from './style';

interface PostTagsProps {
  tagList: string[] | undefined;
}

function PostTags({ tagList }: PostTagsProps) {
  return (
    <S.TagList>
      {tagList?.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.TagList>
  );
}

export default PostTags;
