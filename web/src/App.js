import './resources/app.scss';

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
import RootRoute from './routes/root';
import { ThemeContextProvider } from './context/themes.context';
import NavigationComponent from './components/navigation/navigation.component';
import { GlobalModal } from './components/modals/modal.component';
import UserProfilePage from './routes/user';

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalModal>
        <NavigationComponent />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootRoute />} />
            <Route path='/test' element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
      </GlobalModal>
    </ThemeContextProvider>
  );
}
