import { PostData } from 'types/post.types';
import * as S from './style';
import * as I from 'assets/svg';
import Link from 'next/link';
import { useState } from 'react';
import { marked } from 'marked';

interface ItemInformationProps {
  data: PostData;
  isMine?: boolean;
}

function PostItemInformation({ data, isMine }: ItemInformationProps) {
  const [isKebobClicked, setIsKebobClicked] = useState<boolean>(false);

  return (
    <>
      <Link href={'/post/' + data.id}>
        <S.PostTitle>{data?.title}</S.PostTitle>
        <S.PostContent>
          {marked(String(data?.previewContent)).replace(/<[^>]+>/g, '')}
        </S.PostContent>
      </Link>
      <S.PostStatBar>
        <S.StatWrapper>
          <I.Like />
          <S.Stat>{data?.likeCount}</S.Stat>
        </S.StatWrapper>
        <S.StatWrapper>
          <I.Hit />
          <S.Stat>{data?.hit}</S.Stat>
        </S.StatWrapper>
        {isMine && (
          <S.PostControlSection
            onClick={() => setIsKebobClicked((prevState) => !prevState)}
          >
            {!isKebobClicked && <I.KebobButton />}
            {isKebobClicked && (
              <S.PostControl>
                <p className='update'>수정</p>
                <p className='delete'>삭제</p>
                <I.ControlIcon />
              </S.PostControl>
            )}
          </S.PostControlSection>
        )}
      </S.PostStatBar>
    </>
  );
}

export default PostItemInformation;
