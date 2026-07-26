import { createBrowserRouter } from 'react-router';
import LandingPage from '../Pages/LandingPage/LandingPage';
import PrivacyPage from '../Pages/PrivacyPage/PrivacyPage';

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
  ]
);
