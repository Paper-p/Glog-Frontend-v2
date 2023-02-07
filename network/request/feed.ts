import { feedUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import tokenService from 'utils/tokenService';

interface GetNormalPostsListData {
  size: number;
  page: number;
  keyword?: string;
}

class Feed {
  getNormalPostsList(params: GetNormalPostsListData) {
    try {
      return instance({
        method: 'GET',
        url: feedUrl.getNormalPostsList(),
        params: {
          size: params.size,
          page: params.page,
          keyword: params.keyword,
        },
        responseType: 'json',
      });
    } catch (error) {
      return error;
    }
  }

  getHotPostsList() {
    try {
      return instance({
        method: 'GET',
        url: feedUrl.getHotPostsList(),
        responseType: 'json',
      });
    } catch (error) {
      return error;
    }
  }

  getPostByPostId(postId: number) {
    try {
      return instance({
        method: 'GET',
        url: feedUrl.getPostByPostId() + postId,
        responseType: 'json',
        headers: {
          Authorization: tokenService.getLocalAccessToken()
            ? 'Bearer ' + tokenService.getLocalAccessToken()
            : '',
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
