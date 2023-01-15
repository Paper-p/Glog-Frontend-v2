import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';

interface Props {
  width: number;
  height: number;
}

function Logo({ ...props }: Props) {
  return (
    <S.LogoLayout width={props.width} height={props.height}>
      <S.SmallCircle />
      <S.BigCircle />
      <S.SvgWrapper width={props.width} height={props.height}>
        <I.Logo />
      </S.SvgWrapper>
    </S.LogoLayout>
  );
}

export default Logo;
