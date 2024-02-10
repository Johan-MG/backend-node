
import {pool} from './connection'

export const getPurchases = async () =>{
    const query = 'SELECT * FROM jmg.get_purchases()'
    const response = await pool.query(query)
    //pool.end()
    return response.rows;
}

export const createPurchases = async (purchase:JSON) =>{
    const query = `SELECT * FROM jmg.create_purchase('${JSON.stringify(purchase)}')`
    const response = await pool.query(query)
    //pool.end()
    return response.rows[0].create_purchase;
}

export const changeStatusPurchase = async (id:Number, state:String) =>{
    const query = `SELECT * FROM jmg.update_purchase('{"id":${id}, "status": "${state}"}')`
    const response = await pool.query(query)
    return response.rows;
}