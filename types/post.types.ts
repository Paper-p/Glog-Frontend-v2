export interface PostData {
  id: number;
  title: string;
  createdAt: Date;
  thumbnail?: string;
  previewContent: string;
  hit: number;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  tagList: [string];
}
