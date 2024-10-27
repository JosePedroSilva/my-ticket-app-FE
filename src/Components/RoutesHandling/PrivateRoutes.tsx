import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../../hooks/useAuthStatus';

const PrivateRoutes = () => {
    const isAuthenticated = useAuthStatus();

    console.info('PrivateRoutes isAuthenticated', isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />; 
    }

    return <Outlet />;
};

export default PrivateRoutes;
