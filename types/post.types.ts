export interface PostData {
  id?: number;
  title: string;
  createdAt?: Date;
  thumbnail?: string;
  previewContent?: string;
  hit: number;
  likeCount: number;
  commentCount?: number;
  isLiked?: boolean;
  tagList?: [string];
}

export interface DetailPostData extends PostData {
  content: string;
  comments: [
    {
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
  ];
  author: {
    userId: string;
    nickname: string;
    profileImageUrl: string;
  };
  isMine: boolean;
}

export type TagType = {
  id: number;
  name: string;
};

interface DefaultPostingData {
  id?: number;
  title: string;
  content?: string;
  thumbnail: string;
}

export interface PostingData extends DefaultPostingData {
  tags: TagType[];
}

export interface RequestPostingData extends DefaultPostingData {
  tags: string[];
}

export type PostingType = 'create' | 'update';

export interface GetNormalPostsListData {
  size: number;
  page: number;
  keyword?: string;
}
