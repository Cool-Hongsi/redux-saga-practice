import axios from 'axios';

export const getPostAPI = async (id) => {
    return await axios.get(`https://api.github.com/users/${id}`);
};