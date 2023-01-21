import { feedUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';

interface GetNormalPostsListData {
  size: number;
  page: number;
  keyword?: string;
}

class Feed {
  getNormalPostsList(params: GetNormalPostsListData) {
    try {
      instance({
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
      instance({
        method: 'GET',
        url: feedUrl.getHotPostsList(),
        responseType: 'json',
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
