import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PublicRoutes = () => {
    const {user, authProviderIsLoading} = useAuth();

    if (user && !authProviderIsLoading) {
        return <Navigate to="/dashboard" replace />; 
    }

    return <Outlet />;
};

export default PublicRoutes;
