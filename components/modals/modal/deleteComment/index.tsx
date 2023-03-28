import { modalsAtomFamily, currentIdsAtomFamily } from 'atoms';
import CommonButton from 'components/common/button';
import ModalLayout from 'components/modals/layout';
import comment from 'network/request/comment';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import * as S from './style';

function DeleteCommentModal() {
  const [currentCommentId] = useRecoilState(
    currentIdsAtomFamily('currentCommentId')
  );
  const [_, setDeleteCommentModal] = useRecoilState(
    modalsAtomFamily('deleteCommentModal')
  );

  const queryClient = useQueryClient();

  const onDeleteComment = async () => {
    return comment.deleteComment(String(currentCommentId));
  };

  const { mutate: deleteComment } = useMutation(onDeleteComment, {
    onMutate: async (newData) => {
      await queryClient.cancelQueries('post');

      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', (oldData: any) => ({
        newData,
        ...oldData,
      }));

      return {
        snapshotOfPreviousData,
      };
    },
    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
      setDeleteCommentModal(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('post');
      setDeleteCommentModal(false);
    },
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
          <CommonButton
            className='cancle'
            onClick={() => setDeleteCommentModal(false)}
          >
            취소
          </CommonButton>
        </S.ButtonBox>
      </S.DeleteCommentModal>
    </ModalLayout>
  );
}

export default DeleteCommentModal;
