import axios from 'axios';


export const ZaapAxios = axios.create({
    baseURL: `http://168.138.133.24:4000/api`
})

