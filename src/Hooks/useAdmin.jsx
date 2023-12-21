import React, { useContext } from 'react';


import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './UseAuth';


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin } = useQuery({

        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adminverifyuser/admin/${user.email}`)
            console.log(res.data)
            return res.data.admin;
        }

    })
    return [isAdmin]

};

export default useAdmin;