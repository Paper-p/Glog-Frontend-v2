import { REACT_APP_BASE_URL } from 'shared/config';

export const authUrl = {
  tokenReissuance: () => {
    return REACT_APP_BASE_URL + 'auth/refresh';
  },
};
