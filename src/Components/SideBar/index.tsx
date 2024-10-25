import styles from './styles.module.css'

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({children}) => {
    return (
        <div className={styles.fullLayout}>  
            <div className={styles.sideBarContainer}>
                <p>Side bar</p>
            </div>
            <div className={styles.contentWindowContainer}>{children}</div>
        </div>
    )
}

export default SideBar