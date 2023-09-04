import Link from 'next/link';
import React from 'react';
import * as S from './style';

interface AfterLoginSectionProps {
  nickname: string;
  profileImageUrl: string;
}

function AfterLoginSection(props: AfterLoginSectionProps) {
  return (
    <>
      <S.UserName>{props.nickname}</S.UserName>
      <Link href={'/user/' + props.nickname}>
        <S.UserProfileImage src={props.profileImageUrl} />
      </Link>
    </>
  );
}

export default AfterLoginSection;
