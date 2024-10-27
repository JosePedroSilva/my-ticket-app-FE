import styles from './styles.module.css'

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({children}) => {
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
                            <li className={styles.active}>Dashboard</li>
                            <li>Projects</li>
                            <li>List</li>
                            <li>Timer</li>
                            <li>Settings</li>
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
            <div className={styles.contentWindowContainer}>{children}</div>
        </div>
    )
}

export default SideBar