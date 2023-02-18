import { currentIdsAtomFamily, modalsAtomFamily } from 'atoms';
import CommonButton from 'components/common/button';
import ModalLayout from 'components/modals/layout';
import feed from 'network/request/feed';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import * as S from './style';

function DeletePostModal() {
  const [_, setDeletePostModal] = useRecoilState(
    modalsAtomFamily('deletePostModal')
  );
  const [currentPostId] = useRecoilState(currentIdsAtomFamily('currentPostId'));

  const onDelete = async () => {
    try {
      await feed.deletePost(String(currentPostId));
      toast.success('게시물이 삭제 됐습니다', {
        autoClose: 2000,
      });
      setDeletePostModal(false);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  return (
    <ModalLayout setModal={setDeletePostModal}>
      <S.DeletePostModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>게시물 삭제</S.TitleText>
        <S.Text>정말 게시물을 삭제하시겠습니까?</S.Text>
        <S.ButtonBox>
          <CommonButton onClick={onDelete}>확인</CommonButton>
          <CommonButton onClick={() => setDeletePostModal(false)}>
            취소
          </CommonButton>
        </S.ButtonBox>
      </S.DeletePostModal>
    </ModalLayout>
  );
}

export default DeletePostModal;
