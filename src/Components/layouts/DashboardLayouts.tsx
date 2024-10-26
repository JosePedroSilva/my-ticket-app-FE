import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';

const DashboardLayout = () => {
    return (
        <SideBar>
            <main>
                <Outlet />
            </main>
        </SideBar>
    );
};

export default DashboardLayout;
