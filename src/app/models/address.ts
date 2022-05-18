import { Commande, CommandeDto } from "./commande";
import { State, StateDto } from "./state";

export class Address {
    id!: number;
    zipcode!: string;
    city!: string;
    rue!: string;
    
//    commande: Commande;
    //    commande: Commande;
    state!: State;

}

export class AddressDto {
    id!: number;
    zipcode!: string;
    city!: string;
    rue!: string;

   // commandeDto!: CommandeDto;
    stateDto!: StateDto;
}
