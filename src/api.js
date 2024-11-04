import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // we use our backend url

// example function to fetch jobs
export const fetchJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
};

// example function to register carer
export const registerCaregiver = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/register/caregiver`, data);
        return response.data;
    } catch (error) {
        console.error("Error registering caregiver:", error);
        throw error;
    }
};