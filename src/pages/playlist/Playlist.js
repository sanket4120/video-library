import { Link } from 'react-router-dom';
import { PlaylistCard } from '../../components/cards/PlaylistCard';
import { useUser } from '../../context/userContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const Playlist = () => {
  useDocumentTitle('Playlist | TechFlix');

  const {
    playlistState: { playlists },
  } = useUser();

  return (
    <>
      {playlists?.length > 0 ? (
        <>
          <h1 className='txt-center size-2 mb-5'>My Playlists</h1>
          <section className='grid gap-2'>
            {playlists.map((playlist) => (
              <div
                className='col-12 col-xs-6 col-lg-4 flex flex-column'
                key={playlist._id}
              >
                <PlaylistCard playlist={playlist} />
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className='txt-center py-6'>
          <h1 className='mb-3'>It looks a bit empty here!</h1>

          <Link to='/'>
            <button className='btn btn-primary'>Explore</button>
          </Link>
        </section>
      )}
    </>
  );
};

export { Playlist };
