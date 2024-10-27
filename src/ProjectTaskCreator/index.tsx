import { useState } from "react";
import styles from "./styles.module.css";
import ChooseType from "./ChooseType";
import AddButton from "./AddButton"

const ProjectTaskCreator: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    console.log(isActive);
    
    return (
        <div>
            <AddButton isActive={isActive} setIsActive={setIsActive}/>
            <div className={`${styles.chooseTypeContainer} ${isActive ? styles.active : ''}`}>
                <ChooseType />
            </div>
        </div>
    )
}

export default ProjectTaskCreator;