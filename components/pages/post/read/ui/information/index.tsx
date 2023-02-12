import * as S from './style';
import * as I from 'assets/svg';
import { useDate } from 'hooks/useDate';

interface PostInformationProps {
  nickname: string;
  profileImageUrl: string;
  createdAt: any;
  likeCount: string;
  hit: string;
}

function PostInformation(props: PostInformationProps) {
  const formatDate = useDate(new Date(props.createdAt));

  return (
    <S.PostInfoBox>
      <S.Author>
        <S.ProfileImage src={props.profileImageUrl} />
        <div>
          <S.Name>{props.nickname}</S.Name>
          <S.DatePostCreated>{formatDate}</S.DatePostCreated>
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
