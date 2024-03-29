import ModalLayout from 'components/modals/layout';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useRef, useState } from 'react';
import PostItem from 'components/utils/post/item';
import { modalsAtomFamily, postingTempalteValueAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { PostData, PostingType } from 'types/post.types';
import image from 'network/request/image';
import { CommonButton } from 'components/common/button/style';
import { marked } from 'marked';
import feed from 'network/request/feed';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function PostingModal({ postingType }: { postingType: PostingType }) {
  const router = useRouter();
  const setProfileImage = useRef<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [thumbnailUploadLoading, setThumbnailUploadLoading] =
    useState<boolean>(false);
  const [_, setPostingModal] = useRecoilState(modalsAtomFamily('postingModal'));
  const [postingTemplateValue, setPostingTemplateValue] = useRecoilState(
    postingTempalteValueAtom
  );
  const [contentPreview, setContentPreiview] = useState<string>('');
  const [onlyTagList, setOnlyTagList] = useState<string[]>([]);
  const [requestStart, setRequestStart] = useState<boolean>(false);
  const [data, setData] = useState<PostData>();

  useEffect(() => {
    setData({
      title: postingTemplateValue.title,
      thumbnail: String(postingTemplateValue.thumbnail),
      previewContent: postingTemplateValue.content,
      hit: 9999,
      likeCount: 9999,
    });
    setContentPreiview(
      marked(String(postingTemplateValue.content)).replace(/<[^>]+>/g, '')
    );
  }, [postingTemplateValue]);

  const imgHandler = async (e: any) => {
    try {
      // eslint-disable-next-line prefer-const
      let blob = new Blob([new ArrayBuffer(e.target.files[0])], {
        type: 'image/png',
      });
      setPostingTemplateValue((oldPostingTemplateValue) => ({
        ...oldPostingTemplateValue,
        thumbnail: URL.createObjectURL(blob),
      }));

      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      setThumbnailUploadLoading(true);

      const res: any = await image.uploadImage(formData);

      setErrorMessage('');
      setPostingTemplateValue((oldPostingTemplateValue) => ({
        ...oldPostingTemplateValue,
        thumbnail: res.data.imageUrl,
      }));
      setThumbnailUploadLoading(false);
    } catch {
      setErrorMessage('파일이 너무 커요!');
      setPostingTemplateValue((oldPostingTemplateValue) => ({
        ...oldPostingTemplateValue,
        thumbnail: '',
      }));
    }
  };

  const uploadIconClick = (e: any) => {
    e.preventDefault();
    setProfileImage.current?.click();
  };

  const posting = () => {
    if (!thumbnailUploadLoading) {
      saveTagsWithoutTagId();
    }
  };

  const saveTagsWithoutTagId = () => {
    setOnlyTagList(
      postingTemplateValue.tags.map(({ name }) => {
        return name;
      })
    );
    setRequestStart(true);
  };

  useEffect(() => {
    if (requestStart) {
      makeRequest();
      setRequestStart(false);
    }
  }, [requestStart]);

  const makeRequest = async () => {
    if (postingTemplateValue.thumbnail !== '') {
      if (postingType === 'create') {
        try {
          await feed.createPost({
            title: postingTemplateValue.title,
            content: postingTemplateValue.content,
            thumbnail: postingTemplateValue.thumbnail,
            tags: onlyTagList,
          });

          toast.success('게시물이 출간되었습니다', {
            autoClose: 2000,
          });
          router.push('/');
          setPostingModal(false);
        } catch (e: any) {
          throw new Error(e);
        }
      } else if (postingType === 'update') {
        try {
          await feed.updatePost({
            id: postingTemplateValue.id,
            title: postingTemplateValue.title,
            content: String(postingTemplateValue.content),
            thumbnail: postingTemplateValue.thumbnail,
            tags: onlyTagList,
          });

          toast.success('게시물이 수정되었습니다', {
            autoClose: 2000,
          });
          router.push('/');
          setPostingModal(false);
        } catch (e: any) {
          throw new Error(e);
        }
      }
    } else {
      setErrorMessage('썸네일 이미지가 없어요');
    }
  };

  return (
    <ModalLayout setModal={setPostingModal}>
      <S.WriteModal onClick={(e) => e.stopPropagation()}>
        <S.Text>게시글 프리뷰</S.Text>
        <S.UploadSvgBox onClick={uploadIconClick}>
          <S.UploadSvg>
            <I.ImageUploadIcon />
          </S.UploadSvg>
          <p>썸네일 변경</p>
        </S.UploadSvgBox>
        <S.PostItemSizeControl>
          <PostItem shape='rectangle' data={data as PostData} />
        </S.PostItemSizeControl>
        <S.UploadThumbnail>
          <input
            ref={setProfileImage}
            type={'file'}
            id={'profile'}
            accept={'image/*'}
            name={'file'}
            onChange={imgHandler}
          />
          <CommonButton onClick={posting}>
            <>{postingType === 'create' && '작성하기'}</>
            <>{postingType === 'update' && '수정하기'}</>
          </CommonButton>
        </S.UploadThumbnail>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </S.WriteModal>
    </ModalLayout>
  );
}

export default PostingModal;
