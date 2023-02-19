import { Nickname } from 'components/modals/modal/updateProfile/style';
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

  getUserByNickname(nickname: string) {
    try {
      return instance({
        method: 'GET',
        url: 'user/' + nickname,
        headers: {
          Authorization:
            tokenService.getLocalAccessToken() &&
            'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  updateUserProfileImage(imageUrl: string) {
    try {
      return instance({
        method: 'PATCH',
        url: '/user/profile-image',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
        data: {
          imageUrl: imageUrl,
        },
      });
    } catch (error) {
      return error;
    }
  }

  updateUserNickname(nickname: string) {
    try {
      return instance({
        method: 'PATCH',
        url: '/user/nickname',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
        data: {
          nickname: nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
