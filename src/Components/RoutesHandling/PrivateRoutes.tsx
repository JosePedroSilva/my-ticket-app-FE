import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../../hooks/useAuthStatus';
import SideBar from '../SideBar';

const PrivateRoutes = () => {
    const isAuthenticated = useAuthStatus();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />; 
    }

    return (
        <SideBar >
            <Outlet />
        </SideBar>
    ); 
};

export default PrivateRoutes;
