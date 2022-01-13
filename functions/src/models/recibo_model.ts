/* Modelo representa el concepto de recibo */
/*============ Recibos ============*/
export interface Recibo {
    idRecibo? :string,
    urlRecibo :string,
    nombre :string,
    fecha :string,
    monto :number,
    idIntegrante: string
}

export function Recibo(data :any, id?:string){
    const { urlRecibo, nombre, fecha, monto, idIntegrante} = data;

    let object :Recibo = { 
        idRecibo :id,
        urlRecibo :urlRecibo,
        nombre :nombre,
        fecha :fecha,
        monto :monto,
        idIntegrante: idIntegrante
    };
    return object;
}