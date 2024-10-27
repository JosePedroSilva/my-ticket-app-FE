import { useReducer } from 'react';
// import styles from './styles.module.css';

const MOCK_PROJECTS = [
    {
        id: 1,
        name: 'Project 1'
    },
    {
        id: 2,
        name: 'Project 2'
    },
    {
        id: 3,
        name: 'Project 3'
    },
    {
        id: 4,
        name: 'Project 4'
    }
];

const STATUS = [
    'To Do',
    'In Progress',
    'Done'
];

const INITIAL_STATE = {
    taskName: '',
    taskDescription: '',
    taskProject: '',
    taskPriority: '',
    taskStatus: '',	
    taskDueDate: '',
    taskStartDate: '',
    taskAssignee: '',
    parentTask: null,
    taskCreatedDate: '',
    taskAuthor: '',
    taskComments: [],
};

const AddNewTask = () => {
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
        <div >
            <h1>New task</h1>
            
            <form>

                <label>Project:</label>
                <select onChange={handleChange} name="taskProject">
                    {MOCK_PROJECTS.map(project => (
                        <option  key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>

                <label>Task name:</label>
                <input type="text" onChange={handleChange} name='taskName'/>

                <label>Priority</label>
                <input type="text" onChange={handleChange} name='taskPriority'/>

                <label>Status</label>
                <select onChange={handleChange} name="taskStatus">
                    {STATUS.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>

                <label>Start date:</label>
                <input type="date" onChange={handleChange} name='taskStartDate' />

                <label>Due date:</label>
                <input type="date" onChange={handleChange} name='taskDueDate' />
                
                <label>Description</label>
                <textarea name="taskDescription" onChange={handleChange} />


            </form>


        </div>
    );
}

export default AddNewTask;