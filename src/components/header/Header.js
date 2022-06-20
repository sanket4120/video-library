import { VIDEO_LIST_APPLY_FILTER } from '../../constants/videoConstants';
import { useVideos } from '../../context/videosContext';
import './header.css';

const Header = ({ handleSidenav }) => {
  const {
    videoListState: { filters },
    setVideoList,
  } = useVideos();

  const handleChange = (e) => {
    setVideoList({
      type: VIDEO_LIST_APPLY_FILTER,
      payload: { ...filters, searchQuery: e.target.value },
    });
  };

  return (
    <header className='py-3 border-bottom'>
      <nav className='container'>
        <h3 className='size-3'>
          <span className='txt-primary'>Tech</span>Flix
        </h3>

        <div className='input-has-icon searchbar rounded-full border py-1 '>
          <i className='fa-solid fa-magnifying-glass ml-3'></i>
          <input
            type='text'
            className='input mr-3'
            placeholder='Search'
            value={filters.searchQuery}
            onChange={handleChange}
          />
        </div>

        <div className='justify-self-end'>
          <button className='btn btn-primary'>Login</button>
          <i
            className='fa-solid fa-bars ml-4 pointer ham-menu'
            onClick={handleSidenav}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export { Header };
