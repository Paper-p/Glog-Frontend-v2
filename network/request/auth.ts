import { authUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import { LoginData } from 'types/auth.types';

class Auth {
  signin(data: LoginData) {
    try {
      return instance({
        method: 'POST',
        url: authUrl.login(),
        data: {
          userId: data.userId,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
