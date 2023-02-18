import { feedUrl } from 'network/data/getUrl';
import { instance } from 'network/data/instance';
import tokenService from 'utils/tokenService';

interface GetNormalPostsListData {
  size: number;
  page: number;
  keyword?: string;
}

interface PostRequestData {
  id?: number;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
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

  getPostByPostId(postId: string) {
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

  getPostsUserLiked() {
    try {
      return instance({
        method: 'GET',
        url: feedUrl.getPostsUserLiked(),
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  createPost(data: PostRequestData) {
    try {
      return instance({
        method: 'POST',
        url: 'feed',
        data: {
          title: data.title,
          content: data.content,
          thumbnail: data.thumbnail,
          tags: data.tags,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  updatePost(data: PostRequestData) {
    try {
      return instance({
        method: 'PATCH',
        url: 'feed/' + data.id,
        data: {
          title: data.title,
          content: data.content,
          thumbnail: data.thumbnail,
          tags: data.tags,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
