// import { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
import styles from './styles.module.css'

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
        <div className={styles.logincontainer}>
            <div className={styles.loginbox}>
                <h2>Login</h2>
                <form>
                <label >Email:</label>
                <input type="email" id="priority" name="priority" />

                <label >Password:</label>
                <input type="password" id="start-date" name="start-date" />

                <button type="submit">Submit</button>
                <a href="#" className={styles.createaccount}>Create account</a>
                </form>
            </div>
        </div>

    );
};

export default Login;
