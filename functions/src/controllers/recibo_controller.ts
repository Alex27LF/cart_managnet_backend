import { Request, Response } from "express";
import { db } from "../index";
import { Recibo } from "../models/recibo_model";

export async function listRecibos(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("recibos").get();
        return res.status(200).json(snapshot.docs.map(doc => Recibo(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}