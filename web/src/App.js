import './resources/app.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootRoute from './routes/root';
import UserProfilePage from './routes/user';
import { ThemeContextProvider } from './context/themes.context';
import NavigationComponent from './components/navigation/navigation.component';
import { GlobalModal } from './components/modals/modal.component';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <RootRoute /> },
    { path: '/user/:id', element: <UserProfilePage /> }
  ]);

  return (
    <ThemeContextProvider>
      <GlobalModal>
        <NavigationComponent />
        <RouterProvider router={router} />
      </GlobalModal>
    </ThemeContextProvider>
  );
}

export default App;
