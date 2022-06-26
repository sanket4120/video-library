import { Link } from 'react-router-dom';
import './video-card.css';

const Videocard = ({ video }) => {
  return (
    <div className='card border flex-grow-1 flex flex-column'>
      <Link to={`/video/${video._id}`}>
        <img
          src={video.thumbnail}
          alt='alt text'
          className='card-image cover'
        />
      </Link>

      <div className='card-body pt-3'>
        <div className='flex gap-1'>
          <div>
            <figure className='avatar rounded-full'>
              <img src={video.logo} alt={video.title} />
            </figure>
          </div>
          <div>
            <p className='fw-bold'>
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

export { Videocard };
