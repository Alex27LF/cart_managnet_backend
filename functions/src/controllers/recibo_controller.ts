import { Request, Response } from "express";
import { db } from "../index";
import { Recibo } from "../models/recibo_model";
import { Respuesta } from "../models/respuesta";

export async function listRecibos(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("recibos").get();
        return res.status(200).json(snapshot.docs.map(doc => Recibo(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function consultarRecibo(req: Request, res: Response) {       
    try {        
        let id = req.params.id;
        let snapshot = await db.collection("recibos").where("idIntegrante","==",id).get();
        return res.status(200).json(snapshot.docs.map(doc => Recibo(doc.data(), doc.id)));                
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function createRecibo(req: Request, res: Response) {           
    try{                    
        const newRecibo = Recibo(req.body);
        //newFoto.fecha =  new Date().toISOString();
        const reciboAdded = await db.collection("recibos").add(newRecibo);                                    
        return res.status(201).json(Respuesta(`Recibo agregado para el integrante ${newRecibo.idIntegrante}`, `El Recibo fue agregado correctamente con el id ${reciboAdded.id}`, newRecibo, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}