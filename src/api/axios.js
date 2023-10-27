import axios from 'axios';

export default axios.create({
    // baseURL: 'https://bookstore-api-service.onrender.com/api',
    baseURL: process.env.BASE_URL + '/api',
});
