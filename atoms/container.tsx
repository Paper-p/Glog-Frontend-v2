import { atom } from 'recoil';

export const deleteCommentModalAtom = atom({
  key: 'deleteCommentModal',
  default: false,
});

export const currentCommentIdAtom = atom({
  key: 'currentCommentId',
  default: '0',
});
