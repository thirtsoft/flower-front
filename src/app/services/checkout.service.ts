import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  apiServerUrl = environment.apiBaseUrl;

  id;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService
  ) {
  }


  placeToOrder(purchase: Purchase): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrder`, purchase);
  }

  placeToOrderWithUser(purchase: Purchase, id: number): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrderWithUser?id=`+id, purchase);
  }


  place2Order(purchase: Purchase, id: number): Observable<any> {
    return this.http.post<GetResponsePurchase>(`${this.apiServerUrl}/checkout/placeToOrder?id=${id}`, purchase);

  }

  getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id;
  }


}

interface GetResponsePurchase{
  orderTrackingNumber: string;
}

interface GetResponsePurchase{
  orderTrackingNumber: string;
}
