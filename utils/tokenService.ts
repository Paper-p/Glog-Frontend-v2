import { TokenData } from 'types/token.types';

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(window.localStorage.getItem('token') || '{}');
    return user?.refreshToken;
  }
  getLocalAccessToken() {
    const user = JSON.parse(window.localStorage.getItem('token') || '{}');
    return user?.accessToken;
  }
  updateLocalAccessToken(token: string) {
    const user = JSON.parse(window.localStorage.getItem('token') || '{}');
    user.accessToken = token;
    window.localStorage.setItem('token', JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(window.localStorage.getItem('token') || '{}');
  }
  setUser(user: TokenData) {
    window.localStorage.setItem('token', JSON.stringify(user));
  }
  removeUser() {
    window.localStorage.removeItem('token');
  }
}

export default new TokenService();
