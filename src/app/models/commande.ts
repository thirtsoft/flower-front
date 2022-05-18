import { Address, AddressDto } from "./address";
import { Client, ClientDto } from "./client";
import { Utilisateur, UtilisateurDto } from "./utilisateur";

export class Commande {
    id!: number;
    reference!: string;
    totalQuantity!: number;
    numeroCommande!: string;
    totalCommande!: number;
    total!: number;
    dateCommande!: Date;
    status!: string;
    sessionId!: string;
  
    client!: Client;
    utilisateur!: Utilisateur;
    billingAddress!: Address;

}

export class CommandeDto {
    id!: number;
    reference!: string;
    totalQuantity!: number;
    numeroCommande!: string;
    totalCommande!: number;
    total!: number;
    dateCommande!: Date;
    status!: string;
    sessionId!: string;
  
    clientDto!: ClientDto;
    utilisateurDto!: UtilisateurDto;
    billingAddressDto!: AddressDto;

}

