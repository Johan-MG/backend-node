import { Request, Response } from "express";
import { getStores } from "../database/stores";

export async function getStroreList(req:Request, res: Response): Promise<Response>{
    try{

        const response =  await getStores()
        
        return res.status(200).json(response)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message: "Internal server error "
        })
    }
}