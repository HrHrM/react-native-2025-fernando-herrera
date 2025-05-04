import { useEffect, useRef, useState } from 'react'
import { User } from './interfaces/users.interface';
import { loadUserAction } from '../actions/load-users.action';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUserAction(currentPageRef.current).then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUserAction(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const previousPage = async () => {
        if (currentPageRef.current === 1) return;
        currentPageRef.current--;
        const users = await loadUserAction(currentPageRef.current);
        setUsers(users);
    }

    return {
        users, nextPage, previousPage
    };
}
