import styles from './styles.module.css';

interface ChooseTypeProps {
    onNewTaskClick: () => void;
    onNewProjectClick: () => void;
}

const ChooseType: React.FC<ChooseTypeProps> = ({ onNewTaskClick, onNewProjectClick }) => {
    return (
        <div className={styles.chooseTypeContainer}>
            <h1>What do you want to add?</h1>
            <div className='dualBtnContainer'>
                <button onClick={onNewTaskClick} className='btn'>New Task</button>
                <button onClick={onNewProjectClick} className='btn'>New Project</button>
            </div>
        </div>
    );
}

export default ChooseType;