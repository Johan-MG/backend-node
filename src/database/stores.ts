import {pool} from './connection'

export const getStores = async () =>{
    const query = 'SELECT * FROM jmg.get_stores()'
    const response = await pool.query(query)
    return response.rows;
}