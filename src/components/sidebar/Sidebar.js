import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ showSidenav }) => {
  return (
    <ul className='sidebar list-unstyled p-3'>
      <li>
        <NavLink to='/' className='list-item'>
          <i className='fa-solid fa-house mr-2'></i> Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/playlist' className='list-item'>
          <i className='fa-regular fa-circle-play mr-2'></i>Playlist
        </NavLink>
      </li>
      <li>
        <NavLink to='/watchlater' className='list-item'>
          <i className='fa-regular fa-clock mr-2'></i>Watch Later
        </NavLink>
      </li>
      <li>
        <NavLink to='/likedvideos' className='list-item'>
          <i className='fa-regular fa-thumbs-up mr-2'></i>Liked Videos
        </NavLink>
      </li>
      <li>
        <NavLink to='/history' className='list-item'>
          <i className='fa-solid fa-clock-rotate-left mr-2'></i>History
        </NavLink>
      </li>
    </ul>
  );
};

export { Sidebar };
