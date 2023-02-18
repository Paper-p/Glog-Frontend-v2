import { currentIdsAtomFamily, modalsAtomFamily } from 'atoms';
import CommonButton from 'components/common/button';
import ModalLayout from 'components/modals/layout';
import feed from 'network/request/feed';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import * as S from './style';

function DeletePostModal() {
  const queryClient = useQueryClient();

  const [_, setDeletePostModal] = useRecoilState(
    modalsAtomFamily('deletePostModal')
  );
  const [currentPostId] = useRecoilState(currentIdsAtomFamily('currentPostId'));

  const onDeletePost = async () => {
    return await feed.deletePost(String(currentPostId));
  };

  const { mutate: updateComment } = useMutation(onDeletePost, {
    onSettled: () => {
      queryClient.invalidateQueries('update');
      setDeletePostModal(false);
    },
  });

  return (
    <ModalLayout setModal={setDeletePostModal}>
      <S.DeletePostModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>게시물 삭제</S.TitleText>
        <S.Text>정말 게시물을 삭제하시겠습니까?</S.Text>
        <S.ButtonBox>
          <CommonButton onClick={() => updateComment()}>확인</CommonButton>
          <CommonButton onClick={() => setDeletePostModal(false)}>
            취소
          </CommonButton>
        </S.ButtonBox>
      </S.DeletePostModal>
    </ModalLayout>
  );
}

export default DeletePostModal;
