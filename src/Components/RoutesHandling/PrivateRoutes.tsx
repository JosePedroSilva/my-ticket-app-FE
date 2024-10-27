import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoutes = () => {
    const { user, authProviderIsLoading } = useAuth();

    if (!user && !authProviderIsLoading) {
        return <Navigate to="/" replace />; 
    }

    return <Outlet />;
};

export default PrivateRoutes;
