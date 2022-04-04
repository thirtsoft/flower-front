import { State, StateDto } from "./state";

export class Address {
    id: number;
    zipcode: string;
    city: string;
    rue: string;
    zipcode: string;
    
    state: State ;

}

export class AddressDto {
    id: number;
    zipcode: string;
    city: string;
    rue: string;
    zipcode: string;
    
    stateDto: StateDto ;
}
