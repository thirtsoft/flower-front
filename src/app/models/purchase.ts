import { Address } from "./address";
import { Client } from "./client";
import { Commande } from "./commande";
import { LigneCommande } from "./ligne-commande";
import { Utilisateur } from "./utilisateur";

export class Purchase {
    client: Client;
    utilisateur: Utilisateur;
    shippingAddress: Address;
    billingAddress: Address;
    commande: Commande;
    lcomms: LigneCommande[];

   // lcomms: List<LigneCommande> ;
}
