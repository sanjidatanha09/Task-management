
import axios from 'axios';


export const axiosSecure = axios.create({

    baseURL: 'https://task-server-management.vercel.app'
    

})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;