import { Product, ProductDto } from "./product";
import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Rating {
    /*
    id: number;
    nbreEtoile: number;
    observation: string;
    message: string;
    createdDate: Date;

    product: Product;

    utilisateur: Utilisateur;
    */

}

export class RatingDto {
    id?: number;
    nbreEtoile: any;
    observation?: string;
    message?: string;
    createdDate?: Date;

    productDto?: ProductDto;
    utilisateurDto?: UtilisateurDto;
    

}
