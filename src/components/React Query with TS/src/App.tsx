import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import Layout from './layout/layout'
import ApiRequest from './pages/Api Page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UpDateForm from './component/updateForm/updateForm'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: '/api-request', element: <ApiRequest /> },
        { path: '/api-request/:id', element: <UpDateForm /> },
      ]
    }
  ])

  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}