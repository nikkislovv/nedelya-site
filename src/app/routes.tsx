import { createBrowserRouter } from 'react-router';
import LandingPage from './pages/LandingPage';
import PrivacyPage from './pages/PrivacyPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: LandingPage,
    },
    {
      path: '/privacy',
      Component: PrivacyPage,
    },
  ],
  {
    basename: '/nedelya-site/',
  }
);