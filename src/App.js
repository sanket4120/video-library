import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { GlobalProvider } from './context/globalContext';
import { VideoDetails } from './pages/videoDetails/VideoDetails';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Messages } from './components/messages/Messages';
import { Playlist } from './pages/playlist/Playlist';
import { WatchLater } from './pages/watchLater/WatchLater';
import { LikedVideos } from './pages/likedVideos/LikedVideos';
import { History } from './pages/history/History';
import { Account } from './pages/account/Account';
import './App.css';
import { AuthRequired } from './components/authRequired/AuthRequired';
import { PlaylistDetails } from './pages/playlist/PlaylistDetails';

function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  const handleSidenav = () => {
    setShowSidenav((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <GlobalProvider>
        <Header handleSidenav={handleSidenav} />
        <div className='grid'>
          <aside
            className={`col col-md-3 col-lg-2 border-end ${
              showSidenav ? 'translate-x-0' : ''
            }`}
          >
            <Sidebar />
          </aside>
          <main className='col col-md-9 col-lg-10 p-3 relative'>
            <Messages />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/video/:videoId' element={<VideoDetails />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/' element={<AuthRequired />}>
                <Route path='/playlist' element={<Playlist />} />
                <Route
                  path='/playlist/:playlistId'
                  element={<PlaylistDetails />}
                />
                <Route path='/watchlater' element={<WatchLater />} />
                <Route path='/likedvideos' element={<LikedVideos />} />
                <Route path='/history' element={<History />} />
                <Route path='/account' element={<Account />} />
              </Route>
            </Routes>
          </main>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
