import { Link } from 'react-router-dom';

const PlaylistVideocard = ({ video, handleRemove }) => {
  return (
    <div className='card video-card border flex-grow-1 flex flex-column'>
      <button
        className='btn btn-white icon-rounded card-badge-top-end'
        onClick={() => handleRemove(video)}
        title='Remove'
      >
        <i className='fa-solid fa-xmark'></i>
      </button>

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
        </div>
      </div>
    </div>
  );
};

export { PlaylistVideocard };
