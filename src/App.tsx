import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard/'
import SideBar from './Components/SideBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  }
])

function App() {

  return (
    <>
      <SideBar>
        <RouterProvider router={router} />
      </SideBar>
    </>
  )
}

export default App

