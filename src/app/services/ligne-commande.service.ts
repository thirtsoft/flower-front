import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneCommandeDto } from '../models/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class orderItemservice {
  
  apiServerUrl = environment.apiBaseUrl;

  listData!: LigneCommandeDto[];

  constructor(private http: HttpClient) {
  }


  public getLigneCommandeDtosOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/find-all-orderItems-group-by-IdDesc`);
  }

  public getLigneCommandeDtosByCommandeId(lcomId: number): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-all-orderItems-by-orderId/${lcomId}`);
  }

  public getLigneCommandeDtoById(lcomId: number): Observable<LigneCommandeDto> {
    return this.http.get<LigneCommandeDto>(`${this.apiServerUrl}/orderItems/findById/${lcomId}`);
  }



}
