interface PostingTemplateProps {
  postingType: posting;
}

type posting = 'write' | 'update';

function PostingTemplate(props: PostingTemplateProps) {
  return <>{props.postingType}</>;
}

export default PostingTemplate;
