import { useEffect } from 'react';
import { Videocard } from '../../components/cards/videoCard/Videocard';
import { useVideos } from '../../context/videosContext';
import { getAllVideos } from '../../actions/videoActions';
import { CategoryChips } from '../../components/categoryChips/CategoryChips';

const Homepage = () => {
  const {
    videoListState: { loading },
    filteredVideos,
    setVideoList,
  } = useVideos();

  useEffect(() => {
    getAllVideos(setVideoList);
  }, [setVideoList]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && filteredVideos && (
        <>
          <CategoryChips />

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
        </>
      )}
    </>
  );
};

export { Homepage };
