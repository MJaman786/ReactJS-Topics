import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layouts/Layout'
import { Children } from 'react'
import Home from './pages/Home'
import ApiRequest from './pages/ApiRequest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/apiData', element: <ApiRequest /> }
      ]
    },
  ])
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}