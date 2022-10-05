import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID B-dvyOrRnwitg54cqgnWi8aksttjyPCSqv2Fcm6R1yA'
    }
})