import axios from 'axios';

export default axios.create({
    // baseURL: 'https://bookstore-api-service.onrender.com/api',
        baseURL: 'http://localhost:8081/api',
});
