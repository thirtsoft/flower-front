import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressDto } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }


  public getAddressDtosOrderByIdDesc(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/search-all-active-addresses`);
  }

  public getAddressDtoById(addId: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.apiServerUrl}/addresses/findById/${addId}`);
  }
}
