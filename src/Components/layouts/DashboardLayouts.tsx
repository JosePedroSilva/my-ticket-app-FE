import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import ProjectTaskCreator from '../ProjectTaskCreator';

const DashboardLayout = () => {
    return (
        <SideBar>
            <main>
                <Outlet />
                <ProjectTaskCreator />
            </main>
        </SideBar>
    );
};

export default DashboardLayout;
