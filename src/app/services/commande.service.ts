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

  formData:  FormGroup;

  constructor(private http: HttpClient) {
  }

  /***********************  CommandeDTO ***********/

  public getCommandeDtos(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/all`);
  }

  public getCommandeDtosOrderByIdDesc(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/searchAllOrdersOrderByIdDesc`);
  }

  public getCommandeDtosByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/findListOrderByStatuePending`);
  }

  public getCommandeDtosByStatusPurchased(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/findListOrderByStatuePayed`);
  }

  public getCommandeDtoById(comId: number): Observable<CommandeDto> {
    return this.http.get<CommandeDto>(`${this.apiServerUrl}/orders/findById/${comId}`);
  }

  public getCommandeDtoByUserIdOrderDesc(userId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/searchOrderByUserIdOrderByIdDesc/${userId}`);
  }

  public getCommandeDtoByBillingIdOrderDesc(billingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/searchOrderByBillingAddressIdDesc/${billingAddressId}`);
  }

  public getCommandeDtoByShippingIdOrderDesc(shippingAddressId: number): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/searchCommandeByShippingAddressIdDesc/${shippingAddressId}`);
  }

  public addCommandeDto(commandeDTO: CommandeDto): Observable<CommandeDto> {
    return this.http.post<CommandeDto>(`${this.apiServerUrl}/orders/create`, commandeDTO);
  }

  public updateCommandeDto(comId: number, commandeDTO: CommandeDto): Observable<CommandeDto> {
    return this.http.put<CommandeDto>(`${this.apiServerUrl}/orders/update/${comId}`, commandeDTO);
  }

  public updateStatusOfCommandeDto(id: number, status: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let data = {"status":status};
    const urlUpdateStatus = (this.apiServerUrl+"/orders/updateStatusOfOrder/"+id+"?status="+data.status);
    return this.http.patch<any>(urlUpdateStatus, {headers: headers});

  }

  public getListCommandeDTOByCustomerPageable(clientId: number, page: number, size: number): Observable<CommandeDto[]> {
    const searchbyPriceUrl = (this.apiServerUrl+"/orders/searchOrdersByUtilisateurIdByPageables?clientId="+clientId+"&page="+page+"&size="+size);
    console.log("Search Commande by Customer Url---", searchbyPriceUrl);
    return this.http.get<CommandeDto[]>(searchbyPriceUrl);
  }
  
  public deleteCommandeDto(commandeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/orders/delete/${commandeId}`);
  }

}
