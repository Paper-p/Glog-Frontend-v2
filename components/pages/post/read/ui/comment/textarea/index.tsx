import CommonButton from 'components/common/button';
import tokenService from 'utils/tokenService';
import TextareaAutosize from 'react-textarea-autosize';
import * as S from './style';
import { useMutation, useQueryClient } from 'react-query';
import useInputs from 'hooks/useInputs';
import comment from 'network/request/comment';

function CommentTextArea({ postId }: { postId: string }) {
  const queryClient = useQueryClient();
  const [{ content }, onChange, setNull] = useInputs({
    content: '',
  });

  const onAddComment = async () => {
    if (content !== '') {
      setNull('content');
      return await comment.addComment(postId, content);
    }
  };

  const { mutate: addComment } = useMutation(onAddComment, {
    onMutate: async (newPostData) => {
      await queryClient.cancelQueries('post');

      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', (oldPostData: any) => ({
        newPostData,
        ...oldPostData,
      }));

      return {
        snapshotOfPreviousData,
      };
    },
    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  return (
    <>
      {tokenService.getLocalAccessToken() ? (
        <S.CommentTextArea>
          <div style={{ padding: '18px', width: '90%' }}>
            <TextareaAutosize
              name='content'
              placeholder='댓글을 입력해주세요'
              onChange={onChange}
              value={content}
            />
          </div>
          <CommonButton onClick={() => addComment()}>등록</CommonButton>
        </S.CommentTextArea>
      ) : (
        <S.NotLogged>댓글작성은 로그인이 필요해요</S.NotLogged>
      )}
    </>
  );
}

export default CommentTextArea;
