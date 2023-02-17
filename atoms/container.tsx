import { atom, atomFamily } from 'recoil';
import { PostingTemplateData } from 'types/post.types';

export const currentCommentIdAtom = atom({
  key: 'currentCommentId',
  default: '0',
});

export const modalsAtomFamily = atomFamily({
  key: 'modalsAtomFamily',
  default: false,
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
