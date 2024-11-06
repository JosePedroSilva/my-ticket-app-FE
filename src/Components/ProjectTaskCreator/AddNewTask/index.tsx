import { useReducer, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { getProjects } from '../../../api/projectsApi';

const STATUS = [
    'To Do',
    'In Progress',
    'Done'
];

const PRIORITY = [
    'Low',
    'Medium',
    'High',
];

const INITIAL_STATE = {
    name: '',
    description: '',
    project: '',
    priority: PRIORITY[1],
    status: STATUS[0],	
    dueDate: '',
    startDate: '',
    assignee: '',
    parentTask: null,
    createAt: '',
    author: '',
    comments: [],
};

const AddNewTask = () => {
    const [projects, setProjects] = useState<{ id: number; name: string; }[]>([]);
    const [state, dispatch] = useReducer((prev: typeof INITIAL_STATE, next: Partial<typeof INITIAL_STATE>) => {
        const nextEvent = {
            ...prev,
            ...next,
        }

        return nextEvent;
    }, INITIAL_STATE);

    useEffect(() => {
            const fetchProjects = async () => {
                const userProjects = await getProjects();
                setProjects(userProjects);
                console.log(userProjects);
            };
    
            fetchProjects();
        }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        dispatch({ [name]: value });
    }

    console.log(state);

    return (
        <div className={styles.addNewTaskContainer}>
            <h1>New task</h1>
            
            <form>
                
                <label>Project:</label>
                <select onChange={handleChange} name="project">
                    {projects.map(project => (
                        <option  key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>

                <label>Task name:</label>
                <input type="text" onChange={handleChange} name='name'/>
                
                <div className='form-single-row'>
                    <div className='form-single-row-input-width'>
                    <label>Priority</label>
                        <select onChange={handleChange} name="priority" defaultValue={PRIORITY[1]}>
                            {PRIORITY.map(priority => (
                                <option key={priority} value={priority}>{priority}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-single-row-input-width'>
                        <label>Status</label>
                        <select onChange={handleChange} name="status" defaultValue={STATUS[0]}>
                            {STATUS.map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
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
                <textarea name="description" onChange={handleChange} rows={10} />

                <button type='submit' className='btn'>Save</button>

            </form>


        </div>
    );
}

export default AddNewTask;