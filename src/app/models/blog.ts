import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    createDate: Date;

    utilisateur: Utilisateur ;
}

export class BlogDto {
    id: number;
    title: string;
    image: string;
    description: string;
    createDate: Date;

    utilisateurDto: UtilisateurDto ;
}

