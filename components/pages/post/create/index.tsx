import CommonButton from 'components/common/button';
import PostingTemplate from 'components/utils/post/template';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import tokenService from 'utils/tokenService';
import * as S from './style';

function WritePostPage() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        {tokenService.getLocalAccessToken() ? (
          <PostingTemplate postingType='create' />
        ) : (
          <S.NotLoggedInSection>
            <div>
              <S.Icon>🙇‍♂️</S.Icon>
              <S.Text>게시물 작성은 로그인이 필요해요</S.Text>
              <Link href={'/login'}>
                <CommonButton className='needMargin'>
                  로그인 하러가기
                </CommonButton>
              </Link>
            </div>
          </S.NotLoggedInSection>
        )}
      </>
    )
  );
}

export default WritePostPage;
