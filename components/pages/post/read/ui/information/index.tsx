import * as S from './style';
import * as I from 'assets/svg';

interface PostInformationProps {
  nickname: string;
  profileImageUrl: string;
  createdAt: Date | undefined;
  likeCount: number;
  hit: number;
}

function PostInformation(props: PostInformationProps) {
  return (
    <S.PostInfoBox>
      <S.Author>
        <S.ProfileImage src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg' />
        <div>
          <S.Name>{props.nickname}</S.Name>
          <S.DatePostCreated>22.1.1</S.DatePostCreated>
        </div>
      </S.Author>
      <S.PostStatBar>
        <S.StatWrapper>
          <I.Like />
          <S.Stat>{props.likeCount}</S.Stat>
        </S.StatWrapper>
        <S.StatWrapper>
          <I.Hit />
          <S.Stat>{props.hit}</S.Stat>
        </S.StatWrapper>
      </S.PostStatBar>
    </S.PostInfoBox>
  );
}

export default PostInformation;
