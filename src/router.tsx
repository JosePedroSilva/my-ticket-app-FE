import { createBrowserRouter } from 'react-router-dom';

import PublicRoutes from './Components/RoutesHandling/PublicRoutes';
import PrivateRoutes from './Components/RoutesHandling/PrivateRoutes';

import DashboardLayout from './Components/layouts/DashboardLayouts';

import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Logout from './Components/Authentication/Logout';

import Dashboard from './Components/Dashboard';
import ProjectsPage from './Components/ProjectsPage';

const router = createBrowserRouter([
    {
        element: <PublicRoutes />, 
        children: [
            { path: '/', element: <Login /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/logout', element: <Logout /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                element: <DashboardLayout />, 
                children: [
                    { path: '/dashboard', element: <Dashboard /> },
                    { path: '/projects', element: <ProjectsPage /> },
                ],
            },
        ],
    },
]);

export default router;
