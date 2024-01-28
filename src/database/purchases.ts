
import {pool} from './connection'

export const getUsers = async () =>{
    const query = 'SELECT * FROM jmg.get_purchases()'
    const response = await pool.query(query)
    pool.end()
    return response.rows;
}