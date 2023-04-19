import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutUsPage from './pages/aboutUs/AboutUsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import MainPageStructure from './components/core/page/MainPageStructure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageStructure />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'about-us',
        element: <AboutUsPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;