import { Tienda } from "./tienda.interface";

export interface tiendaRes {
    ok: boolean;
    path?: string;
    msg?: string;
    produt?: Array<Tienda>;
}