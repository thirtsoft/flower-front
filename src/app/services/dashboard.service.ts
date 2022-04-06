import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDto } from '../models/client';
import { CommandeDto } from '../models/commande';
import { FournisseurDto } from '../models/fournisseur';
import { LigneCommandeDto } from '../models/ligne-commande';
import { RatingDto } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient
  ) {}

  public getTop200OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/searchTop200OrderItemsOrderByIdDesc`);
  }

  public countNumberOfCommande(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrder`);
  }

  public countNumberOfOrdersInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrdersInMonth`);
  }

  public countNumberOfOrdersByStatusPending(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/countNumberOfOrdersByPendingStatus`);
  }

  public countNumberOfCommandeByDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/numberOfOrderByDay`);
  }

  public countNumberOfCommandeByMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/numberOfOrderByMonth`);
  }

  public sumTotaleOfCommandeInDay(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByDay`);
  }

  public sumTotaleOfCommandeInMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByMonth`);
  }

  public sumTotaleOfCommandeInYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotalOfOrderByYear`);
  }

  public SumTotaleOfCommandePeerMonth(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotaleOfOrderByMonthByList`);
  }

  public SumTotaleOfOrdersPeerYear(): Observable<CommandeDto[]> {
    return this.http.get<CommandeDto[]>(`${this.apiServerUrl}/orders/sumTotaleOfOrderByYearList`);
  }

  public countNumberOfClient(): Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(`${this.apiServerUrl}/clients/countNumberOfClient`);
  }

  public countNumberOfFournisseurs(): Observable<FournisseurDto[]> {
    return this.http.get<FournisseurDto[]>(`${this.apiServerUrl}/fournisseurs/countNumberOfFournisseurs`);
  }

  public countNumberOfRating(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/countNumberOfRating`);
  }

  public countNumberOfRatingByProductId(noteId: string): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/countNumberOfRatingByProductId/${noteId}`);
  }
}
