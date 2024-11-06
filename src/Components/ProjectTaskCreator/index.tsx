import { useState } from "react";
import styles from "./styles.module.css";
import ChooseType from "./ChooseType";
import AddButton from "./AddButton"
import AddNewTask from "./AddNewTask";
import AddNewProject from "./AddNewProject";

const ProjectTaskCreator: React.FC = () => {
    const [view, setView] = useState<'none' | 'chooseType' | 'addTask' | 'addProject'>('none');
    
    const handleAddButtonClick = () => {
        if (view === 'none') {
            setView('chooseType');
        } else {
            handleClose();
        }
    }

    const handleClose = () => {
        setView('none');
    }

    const handleNewTaskClick = () => {
        setView('addTask');
    };

    const handleNewProjectClick = () => {
        setView('addProject');
    }

    return (
        <div>
            <AddButton isActive={view !== 'none'} setIsActive={handleAddButtonClick} />
            <div className={`${styles.chooseTypeContainer} ${view === 'chooseType' ? styles.active : ''}`}>
                {view === 'chooseType' && <ChooseType onNewTaskClick={handleNewTaskClick} onNewProjectClick={handleNewProjectClick} />}
            </div>
            <div className={`${styles.chooseTypeContainer} ${view === 'addTask' ? styles.active : ''}`}>
                {view === 'addTask' && <AddNewTask/>}
            </div>
            <div className={`${styles.chooseTypeContainer} ${view === 'addProject' ? styles.active : ''}`}>
                {view === 'addProject' && <AddNewProject handleClose={handleClose} />}
            </div>
        </div>
    )
}

export default ProjectTaskCreator;