import { Fruta } from "./frutas.interface";
import { Tienda } from "./tienda.interface";

export interface inventario {
    _id:string;
    id_tienda: Tienda;
    id_fruta: Fruta
    tipo: string;
    inventarioCanastilla: number;
    inventarioBulto: number;
    valorMedioKilo: number;
    valorKilo: number;
    valorC: number;
    valorB: number;
  }
  