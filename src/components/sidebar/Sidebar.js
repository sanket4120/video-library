import './sidebar.css';

const Sidebar = ({ showSidenav }) => {
  return (
    <ul className='sidebar list-unstyled p-3'>
      <li className='list-item active'>
        <i className='fa-solid fa-house mr-2'></i> Home
      </li>
      <li className='list-item'>
        <i className='fa-regular fa-circle-play mr-2'></i>Playlist
      </li>
      <li className='list-item'>
        <i className='fa-regular fa-clock mr-2'></i>Watch Later
      </li>
      <li className='list-item'>
        <i className='fa-regular fa-thumbs-up mr-2'></i>Liked Videos
      </li>
      <li className='list-item'>
        <i className='fa-solid fa-clock-rotate-left mr-2'></i>History
      </li>
    </ul>
  );
};

export default Sidebar;
