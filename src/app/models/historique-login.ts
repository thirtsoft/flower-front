import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class HistoriqueLogin {
    /*
    id: number;
    action: string;
    status: string;
    createdDate: Date;

    utilisateur: Utilisateur;
    */
}

export class HistoriqueLoginDto {
    id!: number;
    action!: string;
    status!: string;
    createdDate!: Date;

    utilisateurDto!: UtilisateurDto;
}

