import { createBrowserRouter } from 'react-router-dom';

import PublicRoutes from './Components/RoutesHandling/PublicRoutes';
import PrivateRoutes from './Components/RoutesHandling/PrivateRoutes';

import DashboardLayout from './Components/layouts/DashboardLayouts';

import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard';

const router = createBrowserRouter([
    {
        element: <PublicRoutes />, 
        children: [
            { path: '/', element: <Login /> },
            { path: '/login', element: <Login /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                element: <DashboardLayout />, 
                children: [
                    { path: '/dashboard', element: <Dashboard /> },
                ],
            },
        ],
    },
]);

export default router;
