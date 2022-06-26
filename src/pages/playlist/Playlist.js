import { useDocumentTitle } from '../../utils/useDocumentTitle';

const Playlist = () => {
  useDocumentTitle('Playlist | TechFlix');
  return (
    <div className='txt-center'>
      <h1> Playlist</h1>
    </div>
  );
};

export { Playlist };
