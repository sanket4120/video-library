import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../../actions/videoActions';
import { useVideos } from '../../context/videosContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import { Loader } from '../../components/loader/Loader';
import './video-details.css';

const VideoDetails = () => {
  useDocumentTitle('Video | TechFlix');
  const params = useParams();
  const {
    videoDetailsState: { video, loading },
    setVideoDetails,
  } = useVideos();

  useEffect(() => {
    getVideoDetails(setVideoDetails, params.videoId);
  }, [params.videoId, setVideoDetails]);

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

            <ul className='flex align-items-center'>
              <li className='py-1 px-3'>
                <i className='fa-regular fa-thumbs-up mr-2'></i>Like
              </li>
              <li className='py-1 px-3'>
                <i className='fa-regular fa-clock mr-2'></i>Watch Later
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
