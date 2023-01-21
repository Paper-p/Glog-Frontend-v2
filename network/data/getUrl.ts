export const authUrl = {
  tokenReissuance: () => {
    return 'auth/refresh';
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
};
