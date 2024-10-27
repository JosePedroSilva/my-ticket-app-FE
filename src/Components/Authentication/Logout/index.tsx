import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.info('logging out');
        logout();
        navigate('/login');

    }, [logout, navigate]);

    return (
        <></>
    );
};

export default Logout;