import { Fruta } from "./frutas.interface";

export interface FrutaResponse {
    ok: boolean;
    path?: string;
    msg?: string;
    products?: Array<Fruta>;
  }
  