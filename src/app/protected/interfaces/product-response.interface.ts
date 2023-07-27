import { Product } from "./product.interface";

export interface ProductResponse {
  msg: string;
  ok: boolean;
  path?: string;
  product: Array<Product>;
}
