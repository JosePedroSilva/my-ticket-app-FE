import { useState } from "react";
import styles from "./styles.module.css";
import ChooseType from "./ChooseType";
import AddButton from "./AddButton"
import AddNewTask from "./AddNewTask";

const ProjectTaskCreator: React.FC = () => {
    const [view, setView] = useState<'none' | 'chooseType' | 'addTask' | 'addProject'>('none');
    
    const handleAddButtonClick = () => {
        if (view === 'none') {
            setView('chooseType');
        } else {
            setView('none');
        }
    }

    console.log(view);

    const handleNewTaskClick = () => {
        setView('addTask');
    };

    return (
        <div>
            <AddButton isActive={view !== 'none'} setIsActive={handleAddButtonClick} />
            <div className={`${styles.chooseTypeContainer} ${view === 'chooseType' ? styles.active : ''}`}>
                {view === 'chooseType' && <ChooseType onNewTaskClick={handleNewTaskClick}/>}
            </div>
            <div className={`${styles.chooseTypeContainer} ${view === 'addTask' ? styles.active : ''}`}>
                {view === 'addTask' && <AddNewTask/>}
            </div>
        </div>
    )
}

export default ProjectTaskCreator;