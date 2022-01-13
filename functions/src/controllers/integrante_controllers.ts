import { Request, Response } from "express";
import { db } from "../index";
import { Integrante } from "../models/integrante_model";
import { Respuesta } from "../models/respuesta";

export async function listIntegrantes(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("integrantes").get();
        return res.status(200).json(snapshot.docs.map(doc => Integrante(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function consultarIntegrante(req: Request, res: Response) {           
    try{
        const doc = await db.collection("integrantes").doc(req.params.id).get();
        if(!doc) {
            return res.status(404).json(Respuesta('Integrante no encontrado', `Integrante con el id ${req.params.id} no encontrado`, {req}, 404));               
        }        
        return res.status(200).json(Integrante(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function createIntegrante(req: Request, res: Response) {           
    try{                    
        const newIntegrante = Integrante(req.body);
        const integranteAdded = await db.collection("integrantes").add(newIntegrante);                            
        return res.status(201).json(Respuesta('Integrante agregado', `El integrante fue agregado correctamente con el id ${integranteAdded.id}`, newIntegrante, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}