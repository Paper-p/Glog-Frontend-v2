import * as S from './style';
import * as I from 'assets/svg';
import ModalLayout from 'components/modals/layout';
import { modalsAtomFamily } from 'atoms';
import error from 'next/error';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

function UpdateProfileModal() {
  const [_, setUpdateProfileModal] = useRecoilState(
    modalsAtomFamily('updateProfileModal')
  );
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ModalLayout setModal={setUpdateProfileModal}>
      <S.UpdateProfileModalLayout onClick={(e) => e.stopPropagation()}>
        <S.ProfileBox>
          <S.ImageBox>
            <S.ImageChangeBox>
              <S.EditSvg>
                <I.EditIcon />
              </S.EditSvg>
              <p>변경</p>
            </S.ImageChangeBox>
            {loading ? (
              <S.ProfileImage src='/images/loading.gif' />
            ) : (
              <S.ProfileImage src={'profileImage'} />
            )}
            <input
              // ref={setImage}
              type={'file'}
              id={'profile'}
              accept={'image/*'}
              name={'file'}
              // onChange={imgHandler}
            />
          </S.ImageBox>
          <S.Nickname
            placeholder='닉네임을 입력하세요'
            // value={name}
            // onChange={onChange}
            name='name'
            error={'error'}
          />
        </S.ProfileBox>
        {error && <S.ErrorMessage>{'error'}</S.ErrorMessage>}
        {/* <S.MoveBox error={error}> */}
        <S.MoveBox error={''}>
          <S.Exit>취소하기</S.Exit>
          <S.Edit>수정완료</S.Edit>
        </S.MoveBox>
      </S.UpdateProfileModalLayout>
    </ModalLayout>
  );
}

export default UpdateProfileModal;
