import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';

function NormalPostItem() {
  return (
    <S.NormalPostItemLayout backgroundImage='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt361d06c667f47dac/60dad6580401cb0ebfa74b50/dbf90410e8ce567dd5ea7b1d2e6972627d587f4b.jpg'>
      <S.PaddingBox>
        <S.PostTitle>
          asdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsad
        </S.PostTitle>
        <S.PostContent>
          asdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasd
          asdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasdasdasdsadassdasdasd
        </S.PostContent>
        <S.PostStatBar>
          <S.StatWrapper>
            <I.Like />
            <S.Stat>900</S.Stat>
          </S.StatWrapper>
          <S.StatWrapper>
            <I.Hit />
            <S.Stat>900</S.Stat>
          </S.StatWrapper>
        </S.PostStatBar>
      </S.PaddingBox>
    </S.NormalPostItemLayout>
  );
}

export default NormalPostItem;
