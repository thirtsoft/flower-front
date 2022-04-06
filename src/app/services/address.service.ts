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

  /****************************** AddressDto ******************/

  public getAddressDtos(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/all`);
  }

  public getAddressDtosOrderByIdDesc(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.apiServerUrl}/addresses/searchAllAddressOrderByIdDesc`);
  }

  public getAddressDtoById(addId: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.apiServerUrl}/addresses/findById/${addId}`);
  }

  public addAddressDto(addressDto: AddressDto): Observable<AddressDto> {
    return this.http.post<AddressDto>(`${this.apiServerUrl}/addresses/create`, addressDto);
  }

  public updateAddressDto(addId: number, addressDto: AddressDto): Observable<AddressDto> {
    return this.http.put<AddressDto>(`${this.apiServerUrl}/addresses/update/${addId}`, addressDto);
  }

  public deleteAddressDto(addId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addresses/delete/${addId}`);
  }

}
