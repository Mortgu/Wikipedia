import './resources/app.scss';

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
import { ThemeContextProvider } from './context/themes.context';
import NavigationComponent from './components/navigation/navigation.component';
import { GlobalModal } from './components/modals/modal.component';

/** PAGES */
import RootRoute from './routes/root';
import {ArticlePage} from './routes/articles/articles.route';
import UserProfilePage from './routes/user';

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalModal>
        <NavigationComponent />
        <main id='pages'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<RootRoute />} />
              <Route path='/test' element={<UserProfilePage />} />
              <Route path='/wiki/:id' element={<ArticlePage />}>
                <Route path=':page' element={<ArticlePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </GlobalModal>
    </ThemeContextProvider>
  );
}
