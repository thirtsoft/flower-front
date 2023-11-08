import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateDto } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllActivesStates(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/search-all-active-states`);
  }

  public getStateDtoById(statId: number): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/findById/${statId}`);
  }

  public getStateDtoByDesignation(designation: string): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/${designation}`);
  }

  public getListStateByCountryCode(code: string): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/search-state-by-country-code?code=`+code);
  }

  getStates(theCountryCode: string): Observable<any> {
    const searchStateUrl = `${this.apiServerUrl}/states/search-state-by-country-code?code=${theCountryCode}`;
    return this.http.get(searchStateUrl);
  }

  getPrixLivraisonByStateId(idState: number): Observable<any> {
    const searchStateUrl = `${this.apiServerUrl}/states/shipping-price/${idState}`;
    return this.http.get(searchStateUrl);
  }

}
