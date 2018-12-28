import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3a2dde02e405ce07f283da9921cdc6283ab8b784761ffcc048d7cf6d159ce7d8'
      }
});