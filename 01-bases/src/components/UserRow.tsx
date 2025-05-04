import React from 'react'
import { User } from '../hooks/interfaces/users.interface'

interface userRowProps {
    user: User;
}

export const UserRow = ({ user }: userRowProps) => {
    return (
        <tr>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                <img src={user.avatar} alt="Avatar" className='w-10 h-10 rounded-full' />
            </td>
        </tr>
    )
}
