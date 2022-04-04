import { Product, ProductDto } from "./product";
import { State, StateDto } from "./state";

export class Fournisseur {
    id: number;
    reference: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    telephone: string;
    city: string;
    country: string;
    subject: string;
    message: string;
  
    product: Product;
    state: State;
  
}

import { Product } from "./product";
import { State } from "./state";

export class Fournisseur {
    id: number;
    reference: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    telephone: string;
    city: string;
    country: string;
    subject: string;
    message: string;
  
    productDto: ProductDto;
    stateDto: StateDto;
  
}

