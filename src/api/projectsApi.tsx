const API_URL = 'http://localhost:3000/project/';

export const createNewProject = async (name: string, description: string, status: string, start_date: string, due_date: string) => {
    if (!name || !description || !status){
        console.error('Missing required fields');
        return;
    }

    const token = localStorage.getItem('token');
    console.log('token used on the request', token);
    const response = await fetch(`${API_URL}create-project`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description, status, start_date, due_date }),
    });

    if (!response.ok) {
        console.error('An error occurred creating the project with status ' + response.status);
    }

    return response;
}

export const getProjects = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}all-projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        console.error('An error occurred fetching the projects with status ' + response.status);
    }

    return response.json();
}