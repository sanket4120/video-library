import { useEffect } from 'react';
import { Videocard } from '../../components/cards/Videocard';
import { useVideos } from '../../context/videosContext';
import { getAllVideos } from '../../actions/videoActions';
import { CategoryChips } from '../../components/categoryChips/CategoryChips';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import { Loader } from '../../components/loader/Loader';
import { PlaylistModal } from '../../components/playListModal/PlaylistModal';
import { usePlaylistModal } from '../../context/playlistModalContext';

const Homepage = () => {
  useDocumentTitle('TechFlix');
  const {
    videoListState: { loading },
    filteredVideos,
    setVideoList,
  } = useVideos();
  const {
    playlistModalState: { isOpen },
  } = usePlaylistModal();

  useEffect(() => {
    getAllVideos(setVideoList);
  }, [setVideoList]);

  return (
    <>
      {loading && <Loader />}
      {!loading && filteredVideos && (
        <>
          {isOpen && <PlaylistModal />}

          <CategoryChips />
          {filteredVideos.length > 0 ? (
            <section className='grid gap-2 justify-items-center '>
              {filteredVideos.map((video) => (
                <div
                  className='col-12 col-xs-6 col-lg-4 flex flex-column'
                  key={video._id}
                >
                  <Videocard video={video} />
                </div>
              ))}
            </section>
          ) : (
            <div className='txt-center'>
              <h1 className='mb-3'>No results found!</h1>
              <p>
                Please check the spelling or try searching for something else
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export { Homepage };
