import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-e14c1.firebaseio.com/'
    
});
export default instance;