import * as S from './style';
import * as I from 'assets/svg';

function PostInformation() {
  return (
    <S.PostInfoBox>
      <S.Author>
        <S.ProfileImage src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg' />
        <div>
          <S.Name>오종진</S.Name>
          <S.DatePostCreated>222222</S.DatePostCreated>
        </div>
      </S.Author>
      <S.PostStatBar>
        <S.StatWrapper>
          <I.Like />
          <S.Stat>203</S.Stat>
        </S.StatWrapper>
        <S.StatWrapper>
          <I.Hit />
          <S.Stat>215</S.Stat>
        </S.StatWrapper>
      </S.PostStatBar>
    </S.PostInfoBox>
  );
}

export default PostInformation;