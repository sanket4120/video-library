import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  getVideoDetails,
  removeVideoDetails,
} from '../../actions/videoActions';
import { useVideos } from '../../context/videosContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import { Loader } from '../../components/loader/Loader';
import './video-details.css';
import { useUser } from '../../context/userContext';
import {
  addToHistory,
  addToLikedVideos,
  addToWatchLater,
  removeFromLikedVideos,
  removeFromWatchLater,
} from '../../actions/userActions';
import { useMessage } from '../../context/messageContext';
import { isInTheList } from '../../utils/videoUtils';

const VideoDetails = () => {
  useDocumentTitle('Video | TechFlix');
  const { videoId } = useParams();
  const {
    videoDetailsState: { video, loading },
    setVideoDetails,
  } = useVideos();
  const {
    likesState: { likedVideos },
    watchLaterState: { watchlater },
    setLikes,
    setWatchLater,
    authState: { isAuthenticated },
    historyState: { history },
    setHistory,
  } = useUser();
  const { setMessages } = useMessage();
  const navigate = useNavigate();
  const location = useLocation();
  const isInTheHistory = isInTheList(history, videoId);
  let isLiked = false;
  let isInWatchLater = false;

  useEffect(() => {
    getVideoDetails(setVideoDetails, videoId);

    return () => {
      removeVideoDetails(setVideoDetails);
    };
  }, [videoId, setVideoDetails]);

  useEffect(() => {
    if (isAuthenticated && video && !isInTheHistory) {
      addToHistory(setHistory, setMessages, video);
    }
  }, [isAuthenticated, isInTheHistory, setMessages, setHistory, video]);

  if (video) {
    isLiked = isInTheList(likedVideos, video._id);
    isInWatchLater = isInTheList(watchlater, video._id);
  }

  const toggleLike = () => {
    if (isAuthenticated) {
      isLiked
        ? removeFromLikedVideos(setLikes, setMessages, video)
        : addToLikedVideos(setLikes, setMessages, video);
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  const toggleWatchLater = () => {
    if (isAuthenticated) {
      isInWatchLater
        ? removeFromWatchLater(setWatchLater, setMessages, video)
        : addToWatchLater(setWatchLater, setMessages, video);
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && video && (
        <section className='video-details'>
          <div className='video-container mb-3'>
            <iframe
              src={video.src}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='rounded video'
            ></iframe>
          </div>

          <h3 className='size-4 mb-3'>{video.title}</h3>

          <div className='flex justify-content-between flex-wrap mb-5'>
            <div className='flex align-items-center gap-1'>
              <figure className='avatar rounded-full'>
                <img src={video.logo} alt={video.creator} />
              </figure>

              <div>
                <p className='fw-bold'>{video.creator}</p>
                <p>
                  <span>{video.views} views</span>
                  <span className='txt-primary mx-1'>|</span>
                  <span>{video.createdAt}</span>
                </p>
              </div>
            </div>

            <ul className='flex align-items-center actions'>
              <li className='py-1 px-3' onClick={toggleLike}>
                <i className='fa-regular fa-thumbs-up mr-2'></i>
                {isLiked ? 'Liked' : 'Like'}
              </li>
              <li className='py-1 px-3' onClick={toggleWatchLater}>
                <i className='fa-regular fa-clock mr-2'></i>{' '}
                {isInWatchLater ? 'Remove from Watch Later' : 'Watch Later'}
              </li>
              <li className='py-1 px-3'>
                <i className='fa-regular fa-circle-play mr-2'></i>Save
              </li>
            </ul>
          </div>

          <p>{video.description}</p>
        </section>
      )}
    </>
  );
};

export { VideoDetails };
