/* Modelo representa el concepto de integrante */
/*============ Integrante ============*/
export interface Integrante {
    idIntegrante? :string,
    urlDoc: string,
    urlFotoPerfil: string,
    cedula :string,
    nombre :string,
    telefono :string,
    alDia :boolean,
    placa :string,
    direccion :string
}

export function Integrante(data :any, id?:string){
    const { urlDoc, urlFotoPerfil, cedula, nombre, telefono, alDia, placa, direccion } = data;

    let object :Integrante = { 
        idIntegrante: id,                
        urlDoc: urlDoc,
        urlFotoPerfil: urlFotoPerfil,
        cedula :cedula,
        nombre :nombre,
        telefono :telefono,
        alDia :alDia,
        placa :placa,
        direccion :direccion
    };
    return object;
}