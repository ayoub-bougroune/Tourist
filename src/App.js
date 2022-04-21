import {  Route, Routes  } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import NotFound from './pages/NotFound'


function App() {
  return (
    <Layout>
      <Routes >
        <Route path='/' element={<AllMeetupsPage />} exact />
        <Route path='/new-meetup' element={<NewMeetupPage />} exact />
        <Route path='/favorites' element={<FavoritesPage />} exact />
        <Route path='*' element={<NotFound />} exact />
      </Routes>
    </Layout>
  );
}

export default App;