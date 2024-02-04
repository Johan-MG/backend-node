import { Request, Response } from "express";
import { createPurchases, getPurchases } from "../database/purchases";

export async function getDefaultList(req:Request, res: Response): Promise<Response>{
    try{

        const response =  await getPurchases()
        
        return res.json(response)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message: "Internal server error "
        })
    }
}

export async function createPurchase(req:Request, res: Response): Promise<Response>{
    try{

        //const response =  await getPurchases()
        console.log(req.body)

        const response = await createPurchases(req.body)

        if (!response) return res.status(400).json({
                message: "Bad request"
            })
        
        return res.json(response)
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message: "Internal server error "
        })
    }
}