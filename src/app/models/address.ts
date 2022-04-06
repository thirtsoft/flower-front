import { Commande, CommandeDto } from "./commande";
import { State, StateDto } from "./state";

export class Address {
    id: number;
    zipcode: string;
    city: string;
    rue: string;
    zipcode: string;
    
    commande: Commande;
    state: State ;

}

export class AddressDto {
    id: number;
    zipcode: string;
    city: string;
    rue: string;
    zipcode: string;
    
    commandeDto: CommandeDto;
    stateDto: StateDto ;
}
