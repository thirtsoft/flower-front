import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryDto } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllActivesCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/search-all-active-countries`);
  }

  public getCountryDtoById(countId: number): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/findById/${countId}`);
  }

  public getCountryDtoByDesignation(designation: string): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/${designation}`);
  }

 
}
