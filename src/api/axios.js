import axios from 'axios';
export default axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
    // baseURL: 'http://localhost:8081/api',
});
