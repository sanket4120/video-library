import { useState } from 'react';
import {
  addToPlaylist,
  createPlaylist,
  removeFromPlaylist,
} from '../../actions/userActions';
import { useUser } from '../../context/userContext';
import { useMessage } from '../../context/messageContext';
import { usePlaylistModal } from '../../context/playlistModalContext';
import { closePlaylistModal } from '../../actions/playlistModalActions';
import { isInTheList } from '../../utils/videoUtils';
import { useStopBodyScroll } from '../../utils/useStopBodyScroll';

const PlaylistModal = () => {
  const {
    playlistState: { playlists },
    setPlaylist,
  } = useUser();
  const { setMessages } = useMessage();
  const [playlistTitle, setPlaylistTitle] = useState('');
  const {
    setPlaylistModal,
    playlistModalState: { video },
  } = usePlaylistModal();
  useStopBodyScroll();

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    createPlaylist(setPlaylist, setMessages, playlistTitle);
    setPlaylistTitle('');
  };

  const handleAddToPlaylist = (event, playlistId) => {
    event.target.checked
      ? addToPlaylist(setPlaylist, setMessages, playlistId, video)
      : removeFromPlaylist(setPlaylist, setMessages, playlistId, video._id);
  };

  return (
    <div className='modal-container' id='myModal'>
      <div className='modal'>
        <div className='modal-header flex align-items-center'>
          <span
            className='ml-auto size-5'
            onClick={() => closePlaylistModal(setPlaylistModal)}
          >
            <i
              className='fas fa-times icon'
              id='modal-close'
              data-dismiss='modal'
            ></i>
          </span>
        </div>
        <div className='modal-body'>
          <form
            className='flex align-items-center mb-3'
            onSubmit={handleCreatePlaylist}
          >
            <input
              type='text'
              placeholder='Enter playlist name'
              className='input'
              value={playlistTitle}
              onChange={(e) => setPlaylistTitle(e.target.value)}
            />
            <button className='btn ml-2'>Create</button>
          </form>
          <ul className='list-unstyled'>
            {playlists.length > 0 &&
              playlists.map((playlist) => (
                <li className='list-item' key={playlist._id}>
                  <input
                    type='checkbox'
                    id={playlist._id}
                    value={playlist.playlist}
                    checked={isInTheList(playlist.videos, video._id)}
                    onChange={(event) =>
                      handleAddToPlaylist(event, playlist._id)
                    }
                  />
                  <label
                    className='label fw-normal ml-2'
                    htmlFor={playlist._id}
                  >
                    {playlist.playlist}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
