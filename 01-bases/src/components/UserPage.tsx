import { UserRow } from './UserRow'
import { useUsers } from '../hooks/useUsers'
import { useEffect, useState } from 'react';

export const UserPage = () => {

    // const [userPage, setUserPage] = useState<number>(1);

    const { users, nextPage, previousPage } = useUsers();

    return (
        <div>
            <h1>
                Usuarios
            </h1>

            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Avatar
                        </th>
                    </tr>
                </thead>
                <tbody className='p-2'>
                    {users.map(user => (
                        <UserRow
                        key={user.id}
                          user={user}
                        />
                    ))}
                </tbody>
            </table>
            <div className='flex justify-between w-[500px] mt-2'>
                <button className="p-2 bg-blue-500 text-white" onClick={() => {previousPage()}}>Anterior</button>
                <button className="p-2 bg-blue-500 text-white" onClick={() => {nextPage()}}>Siguiente</button>
            </div>
        </div>
    )
}
