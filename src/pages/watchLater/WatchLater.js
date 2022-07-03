import { Link } from 'react-router-dom';
import { Videocard } from '../../components/cards/videoCard/Videocard';
import { useUser } from '../../context/userContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const WatchLater = () => {
  useDocumentTitle('WatchLater | TechFlix');
  const {
    watchLaterState: { watchlater },
  } = useUser();

  return (
    <>
      {watchlater?.length > 0 ? (
        <>
          <h1 className='txt-center size-2 mb-5'>Watch Later</h1>
          <section className='grid gap-2 justify-items-center '>
            {watchlater.map((video) => (
              <div
                className='col-12 col-xs-6 col-lg-4 flex flex-column'
                key={video._id}
              >
                <Videocard video={video} />
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className='txt-center py-6'>
          <h1 className='mb-3'>There are no videos in this playlist yet</h1>

          <Link to='/'>
            <button className='btn btn-primary'>Explore</button>
          </Link>
        </section>
      )}
    </>
  );
};

export { WatchLater };
