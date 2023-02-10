import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'

export type User = {
    avatar_url: string,
    created_at: string,
    email: string,
    id: number,
    name: string,
    updated_at: string,
    user_name: string
}

export async function getAllUsersById(
    userIds: number[]
): Promise<User[]> {
    try {
        const resp = await axios.get(
            `${BACKEND_API_URL}/api/users?userId=${userIds.join()}`,
            {
                headers: {
                    authorization: `Bearer ${getAccessToken()}`,
                },
            }
        )
        return resp.data as User[]
    } catch (error) {
        return []
    }
}
