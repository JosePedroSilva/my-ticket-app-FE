import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css'

const NAV_ITEMS = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        link: '/dashboard'
    },
    {
        name: 'Projects',
        icon: 'projects',
        link: '/projects'
    },
    {
        name: 'List',
        icon: 'list',
        link: '/list'
    },
    {
        name: 'Timer',
        icon: 'timer',
        link: '/timer'
    },
    {
        name: 'Settings',
        icon: 'settings',
        link: '/settings'
    },
]

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({children}) => {
    const location = useLocation();

    console.log(location.pathname)
    
    return (
        <div className={styles.fullLayout}>  
            <div className={`${styles.sideBarBG}`}>
                <div className={`${styles.sideBarContainer} content-margin-large `}>
                    <h1>Ticket app</h1>

                    <div className={styles.currentProjectsContainer}>
                        <p>Current Project:</p>
                        <p>Project Name // No Project</p>
                    </div>

                    <nav>
                        <ul>
                            {NAV_ITEMS.map((item, index) => (
                                <li key={index} className={location.pathname === item.link ? styles.active : undefined}>
                                    <Link to={item.link}>
                                        {/* <i className="material-icons">{item.icon}</i> */}
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.recentEventsContainer}>
                        <p>Recent events:</p>
                        <ul>
                            <li>Ticket created by x: Do something</li>
                            <li>Ticket created by x: Do something</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.contentWindowContainer}>
                {children}
            </div>
        </div>
    )
}

export default SideBar