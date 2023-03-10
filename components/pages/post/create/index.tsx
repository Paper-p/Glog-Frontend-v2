import CommonButton from 'components/common/button';
import PostingTemplate from 'components/utils/post/template';
import Link from 'next/link';
import tokenService from 'utils/tokenService';
import * as S from './style';

function WritePostPage() {
  return (
    <>
      {tokenService.getLocalAccessToken() ? (
        <PostingTemplate postingType='create' />
      ) : (
        <S.NotLoggedInSection>
          <div>
            <S.Icon>๐โโ๏ธ</S.Icon>
            <S.Text>๊ฒ์๋ฌผ ์์ฑ์ ๋ก๊ทธ์ธ์ด ํ์ํด์</S.Text>
            <Link href={'/login'}>
              <CommonButton className='needMargin'>
                ๋ก๊ทธ์ธ ํ๋ฌ๊ฐ๊ธฐ
              </CommonButton>
            </Link>
          </div>
        </S.NotLoggedInSection>
      )}
    </>
  );
}

export default WritePostPage;
