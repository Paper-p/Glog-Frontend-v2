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

export type postingTemplateTagType = {
  id: number;
  name: string;
};

export interface PostingTemplateData {
  id?: number;
  title: string;
  content?: string;
  thumbnail: string;
  tags: postingTemplateTagType[];
}
