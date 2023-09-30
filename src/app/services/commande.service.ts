import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommandeDto } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class orderservice {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';

  formData!: FormGroup;

  constructor(private http: HttpClient) {
  }

  public getCommandeDtoById(comId: number): Observable<CommandeDto> {
    return this.http.get<CommandeDto>(`${this.apiServerUrl}/orders/findById/${comId}`);
  } 

  public getCommandeDtoByUserIdOrderDesc(userId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-userId-order-by-IdDesc/${userId}`);
  }

  public getCommandeDtoByBillingIdOrderDesc(billingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-billing-addressIdDesc/${billingAddressId}`);
  }

  public getCommandeDtoByShippingIdOrderDesc(shippingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/search-order-by-shipping-addressIdDesc/${shippingAddressId}`);
  }

  public getListCommandeDTOByCustomerPageable(clientId: number, page: number, size: number): Observable<CommandeDto[]> {
    const searchbyPriceUrl = (this.apiServerUrl+"/orders/search-orders-by-userId-by-pageable?clientId="+clientId+"&page="+page+"&size="+size);
    return this.http.get<CommandeDto[]>(searchbyPriceUrl);
  }
  

}
