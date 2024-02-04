import { Request, Response } from "express";
import { getUsers } from "../database/users";

export async function getUsersList(req:Request, res: Response): Promise<Response>{
    try{

        const response =  await getUsers()
        
        return res.status(200).json(response)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message: "Internal server error "
        })
    }
}