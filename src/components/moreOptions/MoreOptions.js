import { useState } from 'react';
import './more-options.css';

const MoreOptions = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <i
        className='fa-solid fa-ellipsis-vertical pt-1 px-2 pointer'
        onClick={() => setShowOptions(true)}
        title='options'
      ></i>
      {showOptions && (
        <div className='options absolute top-0 end-0 shadow bg-white rounded p-3 flex mt-2 mr-1'>
          {children}
          <i
            className='fa-solid fa-xmark ml-4 pointer'
            onClick={() => setShowOptions(false)}
            title='close'
          ></i>
        </div>
      )}
    </>
  );
};

export { MoreOptions };
