import {pool} from './connection'

export const getUsers = async () =>{
    const query = 'SELECT * FROM jmg.get_users()'
    const response = await pool.query(query)
    return response.rows;
}