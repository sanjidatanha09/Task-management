
import { useQuery } from '@tanstack/react-query';
import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';

const usePreviTask = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();
    const { refetch, data: PreviousTask = [] } = useQuery({

        queryKey: ['biodetails', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasksemail?email=${user.email}`)
            return res.data;
        }

    })

    return [PreviousTask, refetch]
   
};

export default usePreviTask;




