import './loader.css';

const Loader = () => {
  return (
    <div className='minheight flex align-items-center justify-content-center loader'>
      <img src='/assets/loader.gif' alt='Loading...' className='contain' />
    </div>
  );
};

export { Loader };
