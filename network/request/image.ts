import { instance } from 'network/data/instance';
import tokenService from 'utils/tokenService';

class Image {
  uploadImage(thumnailImage: FormData) {
    try {
      return instance({
        method: 'POST',
        url: '/image',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
          'content-type': 'multipart/form-data',
        },
        data: thumnailImage,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Image();
