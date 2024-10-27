import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../../hooks/useAuthStatus';

const PublicRoutes = () => {
    const isAuthenticated = useAuthStatus();

    console.info('PublicRoutes isAuthenticated', isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />; 
    }

    return <Outlet />;
};

export default PublicRoutes;
