import SignBoard from 'components/common/signBoard';
import CommentItem from './item';
import CommentTextArea from './textarea';

function PostComment() {
  return (
    <>
      <SignBoard>📖 댓글</SignBoard>
      <CommentTextArea />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </>
  );
}

export default PostComment;
