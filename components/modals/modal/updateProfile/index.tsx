import * as S from './style';
import * as I from 'assets/svg';
import ModalLayout from 'components/modals/layout';
import { modalsAtomFamily } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import useInputs from 'hooks/useInputs';
import image from 'network/request/image';
import user from 'network/request/user';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface UpdateProfileModalProps {
  nickname: string;
  profileImageUrl: string;
}

function UpdateProfileModal(props: UpdateProfileModalProps) {
  const [_, setUpdateProfileModal] = useRecoilState(
    modalsAtomFamily('updateProfileModal')
  );
  const [profileImage, setProfileImage] = useState<string>(
    props.profileImageUrl
  );
  const loadingGif =
    'https://raw.githubusercontent.com/Paper-p/Glog-Frontend/main/public/images/loading.gif';
  const setImage = useRef<any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [{ name }, onChange] = useInputs({
    name: props.nickname,
  });
  const router = useRouter();

  const imgHandler = async (e: any) => {
    try {
      // eslint-disable-next-line prefer-const
      let blob = new Blob([new ArrayBuffer(e.target.files[0])], {
        type: 'image/png',
      });
      setProfileImage(URL.createObjectURL(blob));
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      setLoading(true);
      const res: any = await image.uploadImage(formData);
      setProfileImage(res.data.imageUrl);
      setLoading(false);
    } catch {
      setError('잘못된 이미지에요');
      setLoading(false);
      setProfileImage(props.profileImageUrl);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
  };

  const updateUser = async () => {
    try {
      if (props.profileImageUrl !== profileImage) {
        await user.updateUserProfileImage(profileImage);
      }
      if (props.nickname !== name) {
        await user.updateUserNickname(name);
      }

      toast.success('프로필을 변경했어요', {
        autoClose: 2000,
      });
      setUpdateProfileModal(false);
      router.push('/user/' + name);
      setError('');
    } catch (e: any) {
      setError('사용할 수 없는 이름입니다');
    }
  };

  const onEdit = () => {
    if (!loading) {
      updateUser();
    }
  };

  const onExit = () => {
    setUpdateProfileModal(false);
  };

  return (
    <ModalLayout setModal={setUpdateProfileModal}>
      <S.UpdateProfileModalLayout onClick={(e) => e.stopPropagation()}>
        <S.ProfileBox>
          <S.ImageBox>
            <S.ImageChangeBox onClick={imgBtnClick}>
              <S.EditSvg>
                <I.EditIcon />
              </S.EditSvg>
              <p>변경</p>
            </S.ImageChangeBox>
            {loading ? (
              <S.ProfileImage src={loadingGif} />
            ) : (
              <S.ProfileImage src={profileImage} />
            )}
            <input
              ref={setImage}
              type={'file'}
              id={'profile'}
              accept={'image/*'}
              name={'file'}
              onChange={imgHandler}
            />
          </S.ImageBox>
          <S.Nickname
            placeholder='닉네임을 입력하세요'
            value={name}
            onChange={onChange}
            name='name'
            error={error}
          />
        </S.ProfileBox>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.MoveBox error={error}>
          <S.Exit onClick={onExit}>취소하기</S.Exit>
          <S.Edit onClick={onEdit}>수정완료</S.Edit>
        </S.MoveBox>
      </S.UpdateProfileModalLayout>
    </ModalLayout>
  );
}

export default UpdateProfileModal;
