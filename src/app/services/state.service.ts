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

  /***************************** StateDTO    *************/

  public getStateDTOs(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/all`);
  }

  public getAllStateDTOsOrderByIdDesc(): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/searchAllStatesOrderByIdDesc`);
  }

  public getStateDtoById(statId: number): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/findById/${statId}`);
  }

  public getStateDtoByDesignation(designation: string): Observable<StateDto> {
    return this.http.get<StateDto>(`${this.apiServerUrl}/states/${designation}`);
  }

  public addStateDto(stateDto: StateDto): Observable<StateDto> {
    return this.http.post<StateDto>(`${this.apiServerUrl}/states/create`, stateDto);
  }

  public updateStateDto(statId: number, stateDto: StateDto): Observable<StateDto> {
    return this.http.put<StateDto>(`${this.apiServerUrl}/states/update/${statId}`, stateDto);
  }

  public getListStateByCountryCode(code: string): Observable<StateDto[]> {
    return this.http.get<StateDto[]>(`${this.apiServerUrl}/states/searchStateByCountryCode?code=`+code);
  }

  getStates(theCountryCode: string): Observable<any> {
    const searchStateUrl = `${this.apiServerUrl}/states/searchStateByCountryCode?code=${theCountryCode}`;
    return this.http.get(searchStateUrl);
  }

  public deleteStateDto(statId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/states/delete/${statId}`);
  }

}
