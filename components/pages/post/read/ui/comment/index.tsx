import SignBoard from 'components/common/signBoard';
import CommentItem from './item';
import CommentTextArea from './textarea';

interface CommentsArrayType {
  id: number;
  author: {
    userId: string;
    nickname: string;
    profileImageUrl: string;
  };
  content: string;
  createdAt: Date;
  isMine: boolean;
}

interface PostCommentProps {
  comments: CommentsArrayType[] | undefined;
  postId: string;
}

function PostComment(props: PostCommentProps) {
  return (
    <>
      <SignBoard>📖 댓글</SignBoard>
      <CommentTextArea postId={props.postId} />
      <>
        {props.comments?.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
            isMine={comment.isMine}
          />
        ))}
      </>
    </>
  );
}

export default PostComment;
