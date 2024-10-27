import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import styles from '../styles.module.css'

const INITIAL_STATE = {
    email: '',
    password: '',
    submitDisabled: false,
};

const Register = () => {
    const { register } = useAuth();

    const [state, dispatch] = useReducer((prev: typeof INITIAL_STATE, next: Partial<typeof INITIAL_STATE>) => {
        const nextEvent = {
            ...prev,
            ...next,
        }

        if (nextEvent.email && nextEvent.password) {
            nextEvent.submitDisabled = false;
        } else {
            nextEvent.submitDisabled = true;
        }

        return nextEvent;
    }, INITIAL_STATE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { type, value } = e.target;

        dispatch({ [type]: value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await register(state.email, state.password);
            console.info('registered');
        } catch (err) {
            console.error('error registering', err);
        }
    };

    return (
        <div className='flex-container flex-container-center-screen'>
            <div className={styles.loginbox}>
                <h2>Create account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" onChange={handleChange}/>

                    <label>Password:</label>
                    <input type="password" onChange={handleChange}/>

                    <button disabled={state.submitDisabled} className={`btn ${styles.loginBtn}`} type="submit">Register</button>
                    <Link to="/" className={styles.createAccountLink}>
                        Back to login
                    </Link>

                </form>
            </div>
        </div>

    );
};

export default Register;
