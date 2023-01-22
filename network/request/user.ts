import { userUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import tokenService from 'utils/tokenService';

class User {
  getUserMiniProfile() {
    try {
      return instance({
        method: 'GET',
        url: userUrl.getUserMiniProfile(),
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();