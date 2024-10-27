import styles from './styles.module.css';

const ChooseType = () => {
    return (
        <div className={styles.chooseTypeContainer}>
            <h1>What do you want to add?</h1>
            <div className='dualBtnContainer'>
                <button className='btn'>New Task</button>
                <button className='btn'>New Project</button>
            </div>
        </div>
    );
}

export default ChooseType;