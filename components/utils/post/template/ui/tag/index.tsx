import { postingTempalteValueAtom } from 'atoms';
import useInputs from 'hooks/useInputs';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { postingTemplateTagType } from 'types/post.types';
import * as S from './style';

function PostingTag() {
  const [onlyNameList, setOnlyNameList] = useState<string[]>([]);
  const [postingTemplateValue, setPostingTemplateValue] = useRecoilState(
    postingTempalteValueAtom
  );
  const nextId = useRef<number>(1);
  const [{ content }, onChange, setNull] = useInputs({
    content: '',
  });
  const [isValueChecked, setIsValueChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isValueChecked && !onlyNameList.includes(content)) {
      setPostingTemplateValue((oldPostingTemplateValue) => ({
        ...oldPostingTemplateValue,
        tags: postingTemplateValue.tags.concat({
          id: nextId.current,
          name: content,
        }),
      }));

      nextId.current += 1;

      setIsValueChecked(false);
      setNull('content');
      setOnlyNameList([]);
    }
  }, [isValueChecked]);

  const onAddTag = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        content !== '' &&
        postingTemplateValue.tags.length + 1 < 6 &&
        e.code === 'Enter'
      ) {
        if (!e.nativeEvent.isComposing) {
          e.preventDefault();
          setOnlyNameList(
            postingTemplateValue.tags.map(({ name }) => {
              return name;
            })
          );
          setIsValueChecked(true);
        }
      } else if (e.code === 'Enter') {
        setNull('content');
      }
    },
    [content, postingTemplateValue.tags]
  );

  const onRemoveTag = useCallback(
    (data: postingTemplateTagType) => {
      setPostingTemplateValue((oldPostingTemplateValue) => ({
        ...oldPostingTemplateValue,
        tags: postingTemplateValue.tags.filter((tag) => tag.id !== data.id),
      }));
    },
    [postingTemplateValue.tags]
  );
  return (
    <S.WriteTagLayout>
      <S.TagInputBox>
        <S.TagInput
          name='content'
          placeholder='태그를 입력해주세요'
          onChange={onChange}
          onKeyDown={onAddTag}
          value={content}
        />
      </S.TagInputBox>
      <S.TagListBox>
        {postingTemplateValue.tags.map((item) => (
          <div key={item.id} className={String(item.id)}>
            <S.Tag
              onClick={() => {
                onRemoveTag(item);
              }}
            >
              {item.name}
            </S.Tag>
          </div>
        ))}
      </S.TagListBox>
    </S.WriteTagLayout>
  );
}

export default PostingTag;
