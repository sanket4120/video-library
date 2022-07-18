import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  addToWatchLater,
  removeFromWatchLater,
} from '../../actions/userActions';
import { useUser } from '../../context/userContext';
import { MoreOptions } from '../moreOptions/MoreOptions';
import { useMessage } from '../../context/messageContext';
import { isInTheList } from '../../utils/videoUtils';
import { usePlaylistModal } from '../../context/playlistModalContext';
import { openPlaylistModal } from '../../actions/playlistModalActions';
import './card.css';

const Videocard = ({ video }) => {
  const {
    watchLaterState: { watchlater },
    setWatchLater,
    authState: { isAuthenticated },
  } = useUser();
  let isInWatchLater = false;
  const navigate = useNavigate();
  const location = useLocation();
  const { setMessages } = useMessage();
  const { setPlaylistModal } = usePlaylistModal();

  if (video) {
    isInWatchLater = isInTheList(watchlater, video._id);
  }

  const toggleWatchLater = () => {
    if (isAuthenticated) {
      isInWatchLater
        ? removeFromWatchLater(setWatchLater, setMessages, video)
        : addToWatchLater(setWatchLater, setMessages, video);
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  const showPlaylistModal = () => {
    if (isAuthenticated) {
      openPlaylistModal(setPlaylistModal, video);
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  return (
    <div className='card video-card border flex-grow-1 flex flex-column'>
      <Link to={`/video/${video._id}`}>
        <img
          src={video.thumbnail}
          alt='alt text'
          className='card-image cover thumbnail'
        />
      </Link>

      <div className='card-body pt-3 relative'>
        <div className='flex gap-1'>
          <div>
            <figure className='avatar-sm rounded-full'>
              <img src={video.logo} alt={video.title} />
            </figure>
          </div>
          <div>
            <p className='fw-bold inline-block'>
              <Link to={`/video/${video._id}`}>{video.title}</Link>
            </p>
            <p>{video.creator}</p>
            <p>
              <span>{video.views} views</span>
              <span className='txt-primary mx-1'>|</span>
              <span>{video.createdAt}</span>
            </p>
          </div>

          <MoreOptions>
            <ul>
              <li onClick={toggleWatchLater}>
                {isInWatchLater
                  ? 'Remove from Watch Later'
                  : 'Add to watch later'}
              </li>
              <li onClick={showPlaylistModal}>Add to playlist</li>
            </ul>
          </MoreOptions>
        </div>
      </div>
    </div>
  );
};

export { Videocard };
