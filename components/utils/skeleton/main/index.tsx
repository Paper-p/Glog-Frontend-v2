import * as S from './style';
import uuid from 'react-uuid';

function MainPageSkeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 6; i++) {
      returnList.push(<S.Skeleton key={uuid()} />);
    }
    return returnList;
  };
  return <S.SkeletonLayout>{skeleton()}</S.SkeletonLayout>;
}

export default MainPageSkeleton;
