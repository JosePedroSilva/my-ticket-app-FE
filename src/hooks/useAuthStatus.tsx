import useAuth from "./useAuth";

const useAuthStatus = () => {
    const { user } = useAuth();
    return !!user;
};

export default useAuthStatus;