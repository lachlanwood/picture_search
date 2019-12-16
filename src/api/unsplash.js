import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a2549209321d30ae68c8610d51defb68409ab388ac5c468e32b82bfcda5139e0'
    }
});
