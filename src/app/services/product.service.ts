import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiServerUrl = environment.apiBaseUrl;

  choixmenu: string  = 'A';
  listData!: ProductDto[];
  formData!:  FormGroup;

  constructor(private http: HttpClient) {
  }

  public getAllActivesProductDtos(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-all-active-products`);
  }

  public getTop3ProductDTOsByIdDesc():  Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-top3-product-by-orderIdDesc`);
  }

  public getTop4ProductDTOsByIdDesc():  Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-top4-product-by-orderIdDesc`);
  }

  public getTop8ProductDTOsByIdDesc():  Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-top8-product-by-orderIdDesc`);
  }

  public getProductDtoById(prodId: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/findById/${prodId}`);
  }

  public getProductDtoByReference(reference: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/search-product-by-reference/${reference}`);
  }

  public getPhotoArticle() {
    return this.http.get(`${this.apiServerUrl}/products/photoProduct`);
  }

  incrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite++;
  }

  decrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite--;
  }

}
