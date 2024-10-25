import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard/'
import Layout from './Components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  }
])

function App() {

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App

