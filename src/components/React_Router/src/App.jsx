import AppLayout from './appLayout/AppLayout';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Features from './pages/Features';
import Home from './pages/Home';
import Pricing from './pages/pricing';
import AboutUs from './pages/Aboutus';
import NotFound from './pages/NotFound';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/features',
          element: <Features />
        },
        {
          path: '/pricing',
          element: <Pricing />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}