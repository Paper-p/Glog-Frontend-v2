import { modalsAtomFamily } from 'atoms';
import CommonButton from 'components/common/button';
import ModalLayout from 'components/modals/layout';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import tokenService from 'utils/tokenService';
import * as S from './style';

function LogoutModal() {
  const [_, setLogoutModal] = useRecoilState(modalsAtomFamily('logoutModal'));
  const router = useRouter();

  const onLogout = () => {
    tokenService.removeUser();
    router.push('/');
    setLogoutModal(false);
  };

  return (
    <ModalLayout setModal={setLogoutModal}>
      <S.LogoutModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>로그아웃</S.TitleText>
        <S.Text>정말 로그아웃 하시겠습니까?</S.Text>
        <S.ButtonBox>
          <CommonButton onClick={() => onLogout()}>확인</CommonButton>
          <CommonButton onClick={() => setLogoutModal(false)}>
            취소
          </CommonButton>
        </S.ButtonBox>
      </S.LogoutModal>
    </ModalLayout>
  );
}

export default LogoutModal;
