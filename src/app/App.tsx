import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CookieBanner } from '../Components/CookieBanner/CookieBanner';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
    </>
  );
}
