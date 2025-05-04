import axios from 'axios';
import { UserListResponse } from '../hooks/interfaces/users.interface';

export const loadUserAction = async (page: number) => {
    try {
        const { data } = await axios.get<UserListResponse>("https://reqres.in/api/users", {
            params: {
                page: page,
                api_key: 'reqres-free-v1'
            }
        });

        return data.data;
    } catch (error) {
        console.log('ERROR:', error);
        return [];
    }
}