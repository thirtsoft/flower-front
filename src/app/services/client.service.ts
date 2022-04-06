import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  /************************ ClientDTO *******************/

  public getClientDTOs(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/all`);
  }

  public getClientDTOsOrderByIdDesc(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/searchAllClientsOrderByIdDesc`);
  }

  public getClientDtoById(cltId: number): Observable<ClientDto> {
    return this.http.get<ClientDto>(`${this.apiServerUrl}/clients/findById/${cltId}`);
  }

  public addClientDto(clientDTO: ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(`${this.apiServerUrl}/clients/create`, clientDTO);
  }

  public updateClientDto(cltId: number, clientDTO: ClientDto): Observable<ClientDto> {
    return this.http.put<ClientDto>(`${this.apiServerUrl}/clients/update/${cltId}`, clientDTO);
  }

  public deleteClientDto(cltId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${cltId}`);
  }

}
