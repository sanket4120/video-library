import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  addToWatchLater,
  removeFromHistory,
  removeFromLikedVideos,
  removeFromWatchLater,
} from '../../../actions/userActions';
import { useUser } from '../../../context/userContext';
import { MoreOptions } from '../../moreOptions/MoreOptions';
import { useMessage } from '../../../context/messageContext';
import { isInTheList } from '../../../utils/videoUtils';
import './video-card.css';

const Videocard = ({ video }) => {
  const {
    likesState: { likedVideos },
    watchLaterState: { watchlater },
    setLikes,
    setWatchLater,
    authState: { isAuthenticated },
    setHistory,
  } = useUser();
  let isInWatchLater = false;
  let isLiked = false;
  const navigate = useNavigate();
  const location = useLocation();
  const { setMessages } = useMessage();

  if (video) {
    isInWatchLater = isInTheList(watchlater, video._id);
    isLiked = isInTheList(likedVideos, video._id);
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

  const toggleLike = () => {
    if (isAuthenticated) {
      isLiked && removeFromLikedVideos(setLikes, setMessages, video);
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  const handleRemove = () => {
    switch (location.pathname) {
      case '/likedvideos':
        toggleLike();
        break;
      case '/watchlater':
        toggleWatchLater();
        break;
      case '/history':
        removeFromHistory(setHistory, setMessages, video);
        break;
      default:
        break;
    }
  };

  return (
    <div className='card border flex-grow-1 flex flex-column'>
      {location.pathname !== '/' && (
        <button
          className='btn btn-white icon-rounded card-badge-top-end'
          onClick={handleRemove}
          title='Remove'
        >
          <i className='fa-solid fa-xmark'></i>
        </button>
      )}

      <Link to={`/video/${video._id}`}>
        <img
          src={video.thumbnail}
          alt='alt text'
          className='card-image cover'
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
          {location.pathname === '/' && (
            <MoreOptions>
              <ul>
                <li onClick={toggleWatchLater}>
                  {isInWatchLater
                    ? 'Remove from Watch Later'
                    : 'Add to watch later'}
                </li>
              </ul>
            </MoreOptions>
          )}
        </div>
      </div>
    </div>
  );
};

export { Videocard };
