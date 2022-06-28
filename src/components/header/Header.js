import { Link, useLocation, NavLink } from 'react-router-dom';
import { VIDEO_LIST_APPLY_FILTER } from '../../constants/videoConstants';
import { useUser } from '../../context/userContext';
import { useVideos } from '../../context/videosContext';
import './header.css';

const Header = ({ handleSidenav }) => {
  const {
    videoListState: { filters },
    setVideoList,
  } = useVideos();
  const {
    authState: { isAuthenticated, userInfo },
  } = useUser();
  const { pathname } = useLocation();

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
          <Link to='/'>
            <span className='txt-primary'>Tech</span>Flix
          </Link>
        </h3>

        <div
          className={`input-has-icon searchbar rounded-full border py-1 ${
            pathname !== '/' && 'hide'
          }`}
        >
          <i className='fa-solid fa-magnifying-glass ml-3'></i>
          <input
            type='text'
            className='input mr-3'
            placeholder='Search'
            value={filters.searchQuery}
            onChange={handleChange}
          />
        </div>

        <ul className='justify-self-end'>
          {isAuthenticated ? (
            <NavLink to='/account'>
              <li>Hi {userInfo?.firstName}</li>
            </NavLink>
          ) : (
            <Link to='/login'>
              <li className='btn btn-primary'>Login</li>
            </Link>
          )}
          <li>
            <i
              className='fa-solid fa-bars ml-4 pointer ham-menu'
              onClick={handleSidenav}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
