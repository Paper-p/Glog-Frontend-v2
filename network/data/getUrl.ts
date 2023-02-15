export const authUrl = {
  tokenReissuance: () => {
    return 'auth';
  },

  login: () => {
    return 'auth/signin';
  },

  signup: () => {
    return 'auth/signup';
  },

  checkNicknameValidation: () => {
    return 'auth/valid-name';
  },

  checkUseridValidation: () => {
    return 'auth/valid-id';
  },
};

export const feedUrl = {
  getNormalPostsList: () => {
    return 'feed/list';
  },

  getHotPostsList: () => {
    return 'feed/hot';
  },

  getPostByPostId: () => {
    return 'feed/';
  },

  getPostsUserLiked: () => {
    return 'feed/like';
  },
};

export const userUrl = {
  getUserMiniProfile: () => {
    return 'user/profile';
  },
};

export const commentUrl = {
  getCommentUrl: () => {
    return 'comment/';
  },
};
