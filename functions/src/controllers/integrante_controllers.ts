import { Request, Response } from "express";
import { db } from "../index";
import { Integrante } from "../models/integrante_model";

export async function listIntegrantes(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("integrantes").get();
        return res.status(200).json(snapshot.docs.map(doc => Integrante(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};


function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}