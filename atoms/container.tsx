import { atom, atomFamily } from 'recoil';
import { PostingData } from 'types/post.types';

export const currentIdsAtomFamily = atomFamily({
  key: 'currentId',
  default: 0,
});

export const modalsAtomFamily = atomFamily({
  key: 'modalsAtomFamily',
  default: false,
});

export const postingTempalteValueAtom = atom<PostingData>({
  key: 'postingTempalteValueAtom',
  default: {
    title: '',
    content: '',
    thumbnail: '',
    tags: [],
  },
});

export const searchKeywordAtom = atom({
  key: 'searchKeyword',
  default: '',
});
