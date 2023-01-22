import { TokenData } from 'types/token.types';

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.refreshToken;
  }
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.accessToken;
  }
  updateLocalAccessToken(token: string) {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    user.accessToken = token;
    localStorage.setItem('token', JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem('token') || '{}');
  }
  setUser(user: TokenData) {
    localStorage.setItem('token', JSON.stringify(user));
  }
  removeUser() {
    localStorage.removeItem('token');
  }
}

export default new TokenService();
