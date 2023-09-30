import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { RatingDto } from '../models/rating';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  apiServerUrl = environment.apiBaseUrl;

  id: any;
  artId: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService
  ) {
  }

  public getTop4RatingOrderByCreatedDateDescByProduct(prodId: string): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/search-top4-rating-order-by-createdDateDesc-by-productId/${prodId}`);
  }

  public getRatingDtoById(ratId: number): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/findById/${ratId}`);
  }

  public addRatingDto(ratDTO: RatingDto): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create`, ratDTO);
  }

  public addRatingToArticle(ratDTO: RatingDto, reference: string, userId:number): Observable<RatingDto> {
    return this.http.post<RatingDto>(`${this.apiServerUrl}/ratings/create-rating-to-article-with-user?reference=${reference}&id=${userId}`, ratDTO);
  }

  public countNumberOfRatingDto(): Observable<RatingDto[]> {
    return this.http.get<RatingDto[]>(`${this.apiServerUrl}/ratings/count-number-of-rating`);
  }

  public countNumberOfRatingDtoByProductId(noteId: string): Observable<RatingDto> {
    return this.http.get<RatingDto>(`${this.apiServerUrl}/ratings/count-number-of-rating-by-productId/${noteId}`);
  }

  public getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }


}
