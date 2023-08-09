import { Tienda } from "./tienda.interface";

export interface tiendaResponse {
    ok: boolean;
    path?: string;
    msg?: string;
    produt?: Tienda;
}