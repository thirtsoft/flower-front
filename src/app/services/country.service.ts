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

  /***************************** CountryDTO    *************/

  public getCountryDTOs(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/all`);
  }

  public getAllActivesCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/search-all-active-countries`);
  }

  public getAllCountryDTOsOrderByIdDesc(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${this.apiServerUrl}/countries/searchAllCountriesOderByIdDesc`);
  }

  public getCountryDtoById(countId: number): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/findById/${countId}`);
  }

  public getCountryDtoByDesignation(designation: string): Observable<CountryDto> {
    return this.http.get<CountryDto>(`${this.apiServerUrl}/countries/${designation}`);
  }

  public addCountryDto(countryDto: CountryDto): Observable<CountryDto> {
    return this.http.post<CountryDto>(`${this.apiServerUrl}/countries/create`, countryDto);
  }

  public updateCountryDto(countId: number, countryDto: CountryDto): Observable<CountryDto> {
    return this.http.put<CountryDto>(`${this.apiServerUrl}/countries/update/${countId}`, countryDto);
  }

  public deleteCountryDto(countId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/countries/delete/${countId}`);
  }
}
