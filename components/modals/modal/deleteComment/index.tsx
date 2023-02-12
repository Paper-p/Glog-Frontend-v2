import { currentCommentIdAtom, deleteCommentModalAtom } from 'atoms';
import CommonButton from 'components/common/button';
import ModalLayout from 'components/modals/layout';
import comment from 'network/request/comment';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import * as S from './style';

function DeleteCommentModal() {
  const [currntCommentId] = useRecoilState(currentCommentIdAtom);
  const [_, setDeleteCommentModal] = useRecoilState(deleteCommentModalAtom);

  const queryClient = useQueryClient();

  const onDeleteComment = async () => {
    return comment.deleteComment(currntCommentId);
  };

  const { mutate: deleteComment } = useMutation(onDeleteComment, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
      setDeleteCommentModal(false);
    },
  });

  return (
    <ModalLayout setModal={setDeleteCommentModal}>
      <S.DeleteCommentModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>댓글삭제</S.TitleText>
        <S.Text>정말 댓글을 삭제하시겠습니까?</S.Text>
        <S.ButtonBox>
          <CommonButton onClick={() => deleteComment()}>확인</CommonButton>
          <CommonButton onClick={() => setDeleteCommentModal(false)}>
            취소
          </CommonButton>
        </S.ButtonBox>
      </S.DeleteCommentModal>
    </ModalLayout>
  );
}

export default DeleteCommentModal;
