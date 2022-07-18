import { Link } from 'react-router-dom';
import { clearHistory, removeFromHistory } from '../../actions/userActions';
import { PlaylistVideocard } from '../../components/cards/PlaylistVideocard';
import { useMessage } from '../../context/messageContext';
import { useUser } from '../../context/userContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const History = () => {
  useDocumentTitle('History | TechFlix');
  const {
    historyState: { history },
    setHistory,
  } = useUser();
  const { setMessages } = useMessage();

  const handleRemove = (video) => {
    removeFromHistory(setHistory, setMessages, video);
  };

  return (
    <>
      {history?.length > 0 ? (
        <>
          <h1 className='txt-center size-2 mb-5'>History</h1>

          <div className='txt-end'>
            <button
              onClick={() => clearHistory(setHistory, setMessages)}
              className='btn mb-3 '
            >
              Clear History
            </button>
          </div>
          <section className='grid gap-2 justify-items-center '>
            {history.map((video) => (
              <div
                className='col-12 col-xs-6 col-lg-4 flex flex-column'
                key={video._id}
              >
                <PlaylistVideocard video={video} handleRemove={handleRemove} />
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

export { History };
