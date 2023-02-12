import { commentUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import tokenService from 'utils/tokenService';

class Comment {
  addComment(postId: string, comment: string) {
    try {
      return instance({
        method: 'POST',
        url: commentUrl.getCommentUrl() + postId,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
        data: {
          content: comment,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Comment();
