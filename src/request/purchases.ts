import { Request, Response } from "express";
import { getUsers } from "../database/purchases";

export async function getDefaultList(req:Request, res: Response): Promise<Response>{
    try{

        const response =  await getUsers()
        
        return res.json(response)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message: "Internal server error "
        })
    }
}