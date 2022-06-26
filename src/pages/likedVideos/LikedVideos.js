import { useDocumentTitle } from '../../utils/useDocumentTitle';

const LikedVideos = () => {
  useDocumentTitle('LikedVideos | TechFlix');

  return (
    <div className='txt-center'>
      <h1> Liked Videos</h1>
    </div>
  );
};

export { LikedVideos };
