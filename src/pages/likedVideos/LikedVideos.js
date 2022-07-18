import { Link } from 'react-router-dom';
import { removeFromLikedVideos } from '../../actions/userActions';
import { PlaylistVideocard } from '../../components/cards/PlaylistVideocard';
import { useMessage } from '../../context/messageContext';
import { useUser } from '../../context/userContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const LikedVideos = ({ video }) => {
  useDocumentTitle('LikedVideos | TechFlix');
  const {
    likesState: { likedVideos },
    setLikes,
  } = useUser();
  const { setMessages } = useMessage();

  const handleRemove = (video) => {
    removeFromLikedVideos(setLikes, setMessages, video);
  };

  return (
    <>
      {likedVideos?.length > 0 ? (
        <>
          <h1 className='txt-center size-2 mb-5'>Liked Videos</h1>
          <section className='grid gap-2 justify-items-center '>
            {likedVideos.map((video) => (
              <div
                className='col-12 col-xs-6 col-lg-4 flex flex-column'
                key={video._id}
              >
                <PlaylistVideocard video={video} handleRemove={handleRemove} />
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className='txt-center py-6'>
          <h1 className='mb-3'>There are no videos in this playlist yet</h1>

          <Link to='/'>
            <button className='btn btn-primary'>Explore</button>
          </Link>
        </section>
      )}
    </>
  );
};

export { LikedVideos };
