// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import styles from '../styles.module.css'

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const { login } = useAuth();

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     try {
    //         await login(email, password);
    //         alert('Logged in successfully');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div className='flex-container flex-container-center-screen'>
            <div className={styles.loginbox}>
                <h2>Create account</h2>
                <form>
                    <label>Email:</label>
                    <input type="email" />

                    <label>Password:</label>
                    <input type="password" />

                    <button className={`btn ${styles.loginBtn}`} type="submit">Register</button>
                    <Link to="/" className={styles.createAccountLink}>
                        Back to login
                    </Link>

                </form>
            </div>
        </div>

    );
};

export default Login;
