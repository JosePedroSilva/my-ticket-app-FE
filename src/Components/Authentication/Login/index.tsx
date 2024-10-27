import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import styles from '../styles.module.css'

const INITIAL_STATE = {
    email: '',
    password: ''
};

const Login = () => {
    const { login } = useAuth();
    
    const [state, dispatch] = useReducer((prev: typeof INITIAL_STATE, next: Partial<typeof INITIAL_STATE>) => {
        const nextEvent = {
            ...prev,
            ...next,
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
            await login(state.email, state.password);
            console.info('logged in');
        } catch (err) {
            console.error('error logging in', err);
        }
    };

    return (
        <div className='flex-container flex-container-center-screen'>
            <div className={styles.loginbox}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" onChange={handleChange}/>

                    <label>Password:</label>
                    <input type="password" onChange={handleChange}/>

                    <button className={`btn ${styles.loginBtn}`} type="submit">Submit</button>
                    <Link to="/register" className={styles.createAccountLink}>
                        Create account
                    </Link>

                </form>
            </div>
        </div>

    );
};

export default Login;
