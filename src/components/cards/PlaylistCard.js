import { Link } from 'react-router-dom';
import './card.css';

const PlaylistCard = ({ playlist }) => {
  return (
    <div className='card'>
      <Link to={`/playlist/${playlist._id}`}>
        <img
          src={
            playlist.videos.length
              ? playlist.videos[0]?.thumbnail
              : './assets/empty-playlist.png'
          }
          alt={playlist.playlist}
          className='card-image rounded cover'
          style={{ width: '100%' }}
        />
      </Link>
      <div className='card-body'>
        <p className='txt-center txt-capitalize'>
          <span className='size-5'>{playlist.playlist}</span> ({' '}
          {playlist.videos.length} videos )
        </p>
      </div>
    </div>
  );
};

export { PlaylistCard };
