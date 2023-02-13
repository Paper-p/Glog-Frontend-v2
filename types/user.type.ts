export interface UserData {
  userId: string;
  nickname: string;
  profileImageUrl: string;
  feedList: FeedListData[];
  isMine: boolean;
}

interface FeedListData {
  id: number;
  title: string;
  createdAt: Date;
  thumbnail?: string;
  previewContent: string;
  hit: number;
  likeCount: number;
  isLiked: boolean;
  tagList: [string];
}
