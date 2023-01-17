import { authUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import { LoginData, SignupData } from 'types/auth.types';

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

  signup(data: SignupData) {
    try {
      return instance({
        method: 'POST',
        url: authUrl.signup(),
        data: {
          nickname: data.nickname,
          userId: data.userId,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  checkNicknameValidation(nickname: string) {
    try {
      return instance({
        method: 'HEAD',
        url: authUrl.checkNicknameValidation(),
        params: {
          nickname: nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }

  checkUseridValidation(userId: string) {
    try {
      return instance({
        method: 'HEAD',
        url: authUrl.checkUseridValidation(),
        params: {
          userId: userId,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
