export interface tiendaResponse {
    ok: boolean;
    path?: string;
    msg?: string;
    produt?: {
        _id:string;
        nameTienda:  string;
        nit:  string;
        local:  string;
        location:  string;
        scheduleStart:  string;
        scheduleEnd:  string;
        contact:  string;
    };
}