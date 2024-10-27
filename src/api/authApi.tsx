const API_URL = 'http://localhost:3000/auth/';

export const registerUser = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        console.error('An error occurred registering the user with status ' + response.status);
    }

    return response;
}

export const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        console.error('An error occurred logging in with status ' + response.status);
    }

    return response;
}