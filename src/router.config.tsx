import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutUsPage from './pages/aboutUs/AboutUsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import MainPageStructure from './components/core/page/MainPageStructure';
import LogInPage from './pages/authentication/LogInPage';
import SignUpPage from './pages/authentication/SignUpPage';

const router = typeof window !== 'undefined' ? createBrowserRouter([
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
        path: 'login',
        element: <LogInPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]) : createBrowserRouter([
  {
    path: '*',
    element: 'the app is not supported on server side'
  }
]);

export default router;