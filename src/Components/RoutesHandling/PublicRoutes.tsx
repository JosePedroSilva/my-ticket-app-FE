import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../../hooks/useAuthStatus';

const PublicRoutes = () => {
    const isAuthenticated = useAuthStatus();

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />; 
    }

    return <Outlet />;
};

export default PublicRoutes;
