import { useEffect } from 'react';

const useStopBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => (document.body.style.overflowY = 'scroll');
  });
};

export { useStopBodyScroll };
