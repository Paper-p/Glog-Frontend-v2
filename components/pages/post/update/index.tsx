import PostingTemplate from 'components/utils/post/template';

function UpdatePostPage({ postId }: { postId: string }) {
  return <PostingTemplate postingType='update' />;
}

export default UpdatePostPage;
