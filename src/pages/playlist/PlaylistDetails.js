import { Link, useNavigate, useParams } from 'react-router-dom';
import { removeFromPlaylist, deletePlaylist } from '../../actions/userActions';
import { useUser } from '../../context/userContext';
import { useMessage } from '../../context/messageContext';
import { PlaylistVideocard } from '../../components/cards/PlaylistVideocard';
import { getPlaylistById } from '../../utils/videoUtils';

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const {
    playlistState: { playlists },
    setPlaylist,
  } = useUser();
  const { setMessages } = useMessage();
  const navigate = useNavigate();
  const playlist = getPlaylistById(playlistId, playlists);

  const handleRemove = (video) => {
    removeFromPlaylist(setPlaylist, setMessages, playlistId, video._id);
  };

  const handleDeletePlaylist = () => {
    deletePlaylist(setPlaylist, setMessages, playlistId);
    navigate('/playlist', { replace: true });
  };

  return (
    <>
      <h1 className='txt-center txt-capitalize size-2 mb-5'>
        {playlist.playlist}
      </h1>

      <div className='txt-end'>
        <button onClick={handleDeletePlaylist} className='btn btn-danger mb-3 '>
          Delete Playlist
        </button>
      </div>

      {playlist.videos.length > 0 ? (
        <>
          <section className='grid gap-2 justify-items-center '>
            {playlist.videos.map((video) => (
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

export { PlaylistDetails };
