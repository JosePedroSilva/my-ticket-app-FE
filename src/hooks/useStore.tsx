import {create} from 'zustand';

interface Project {
    id: number | null;
    name: string;
    description: string;
    status: string;
    startDate: string;
    dueDate: string;
    createdAt: string;
}

interface User {
    id: number | null;
    username: string | null;
    email: string;
}

interface StoreState {
    user: User;
    setStoreUser: (user: User) => void;
    projects: Project[];
    addProject: (project: Project) => void;
}

const useStore = create<StoreState>((set) => ({
    user: {
        id: null,
        username: null,
        email: '',
    },
    setStoreUser: (user: User) => set({user}),

    projects: [],
    addProject: (project: Project) => set((state) => ({projects: [...state.projects, project]})),
}));

export default useStore;