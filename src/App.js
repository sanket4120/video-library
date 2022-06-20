import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/Homepage';
import './App.css';
import { Header } from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { GlobalProvider } from './context/globalContext';

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
          <main className='col col-md-9 col-lg-10 p-3'>
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
          </main>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
