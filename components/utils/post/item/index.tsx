import { PostData } from 'types/post.types';
import RectanglePostItem from './ui/shape/rectangle';
import SquarePostItem from './ui/shape/square';

interface PostItemProps {
  shape: shapeType;
  data: PostData;
  isMine?: boolean;
}

type shapeType = 'square' | 'rectangle';

function PostItem(props: PostItemProps) {
  return (
    <>
      {props.shape === 'square' && (
        <SquarePostItem data={props.data} isMine={props.isMine} />
      )}
      {props.shape === 'rectangle' && <RectanglePostItem data={props.data} />}
    </>
  );
}

export default PostItem;
