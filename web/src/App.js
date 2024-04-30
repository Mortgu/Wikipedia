import './resources/app.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootRoute from './routes/root';
import UserProfilePage from './routes/user';
import { ThemeContextProvider } from './context/themes.context';
import NavigationComponent from './components/navigation/navigation.component';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <RootRoute /> },
    { path: '/user/:id', element: <UserProfilePage /> }
  ]);

  return (
    <ThemeContextProvider>
      <NavigationComponent />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
