import { atom } from 'recoil';
import { PostingTemplateData } from 'types/post.types';

export const deleteCommentModalAtom = atom({
  key: 'deleteCommentModal',
  default: false,
});

export const currentCommentIdAtom = atom({
  key: 'currentCommentId',
  default: '0',
});

export const postingTempalteValueAtom = atom<PostingTemplateData>({
  key: 'postingTempalteValueAtom',
  default: {
    title: '',
    content: '',
    thumbnail: '',
    tags: [],
  },
});
