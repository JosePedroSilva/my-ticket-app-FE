import { useReducer } from 'react';
import styles from '../AddNewTask/styles.module.css';

const STATUS = [
    'active',
    'inactive',
    'archived'
];

const INITIAL_STATE = {
    name: '',
    description: '',
    status: STATUS[0],
    startDate: '',
    dueDate: '',
    AuthProvider: '',
    createdAt: '',  
};

const AddNewProject = () => {
    const [state, dispatch] = useReducer((prev: typeof INITIAL_STATE, next: Partial<typeof INITIAL_STATE>) => {
        const nextEvent = {
            ...prev,
            ...next,
        }

        return nextEvent;
    }, INITIAL_STATE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        dispatch({ [name]: value });
    }

    console.log(state);

    return (
        <div className={styles.addNewTaskContainer}>
            <h1>New project</h1>
            
            <form>
                
                <label>Project name:</label>
                <input type="text" onChange={handleChange} name='name'/>

                <div className={styles.projectStatusContainer}>
                    <label>Status</label>
                        <select onChange={handleChange} name="status" defaultValue={STATUS[0]}>
                            {STATUS.map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>

                <div className='form-single-row'>
                    <div className='form-single-row-input-width'>
                        <label>Start date:</label>
                        <input type="date" onChange={handleChange} name='startDate' />
                    </div>
                    <div className='form-single-row-input-width'>
                        <label>Due date:</label>
                        <input type="date" onChange={handleChange} name='dueDate' />
                    </div>
                </div>
     
                <label>Description</label>
                <textarea name="description" onChange={handleChange} rows={20} />

                <button type='submit' className='btn'>Save</button>

            </form>


        </div>
    );
}

export default AddNewProject;