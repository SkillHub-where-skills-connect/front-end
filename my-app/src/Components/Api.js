import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const requestPasswordReset = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password-reset/request`, null, {
            params: { email },
        });
        return response.data;
    } catch (error) {
        console.error('Error requesting password reset:', error);
        throw error;
    }
};

export const resetPassword = async (token, newPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password-reset/reset`, null, {
            params: { token, newPassword },
        });
        return response.data;
    } catch (error) {
        console.error('Error resetting password:', error);
        throw error;
    }
};