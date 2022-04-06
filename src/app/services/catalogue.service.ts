import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { ProductDto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  apiServerUrl = environment.apiBaseUrl;

  id: any;
  currentUser: any;
  username: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) {
  }

  public getListProductDtoBySelectedIsTrue(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchProductBySelectedIsTrue`);
  }

  public getTop12ProductDtoOrderByCreatedDateDesc(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchTop24ProductByOrder`);
  }

  public getListProductDtoByCategoryId(scatId: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/productsBySubCategories/${scatId}`);
  }

  public getListProductDtoByPageable(page: number, size: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchProductByPageables?page=`+page+"&size="+size);
  }

  public getListProductDtoByKeyword(keyword: string): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchProductByKeyword?keyword=`+keyword);
  }

  public getListProductDtoBySamePrice(price: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchProductByPrice/${price}`);
  }

  public getListProductDtoByPricemMinMax(min: number, max: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchAllProductByPriceMinMax/${min}/${max}`);
  }

  public getListProductDtoByScategoryByPageable(scatId: number, page: number, size: number): Observable<ProductDto[]> {
    const searchUrl = (this.apiServerUrl+"/products/searchProductBySubcategoryByPageables?id="+scatId+"&page="+page+"&size="+size);
    console.log("Search Url---", searchUrl);
    return this.http.get<ProductDto[]>(searchUrl);
  }

  public getListProductDtoBySamePriceByPageable(price: number, page: number, size: number): Observable<ProductDto[]> {
    const searchbyPriceUrl = (this.apiServerUrl+"/products/searchProductBySamePriceByPageables?price="+price+"&page="+page+"&size="+size);
    console.log("Search Price Url---", searchbyPriceUrl);
    return this.http.get<ProductDto[]>(searchbyPriceUrl);
  }

  public getPhotoArticle() {
    return this.http.get(`${this.apiServerUrl}/products/photoProduct`);
  }

  public getPhotoArticleInContext() {
    return this.http.get(`${this.apiServerUrl}/products/photoProductInContext`);
  }

  getCurrentUser(): Observable<any> {
    return this.tokenService.getUser();
  }

  getLogginUser() {
    const user = this.tokenService.getLogginUser();
    this.currentUser = user;
  }

  getUsername() {
    const user = this.tokenService.getUser();
    this.username = user.username;
  }

  getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }

  getAllProductsByPageable(page,size): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchAllProductsByPageable?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getAllProductsByCategoryId(id,page,size): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchAllProductsBySubCategoryByPageable?id=${id}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getAllProductsByKeyword(keyword,page,size): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/orderkey?keyword=${keyword}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsLength(): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSize`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsLengthByCategoryId(id): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSizeBySubCategoryId?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsLengthByKeyword(key): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSizeByKeyword?key=${key}`).pipe(
      map(
        response => response
      )
    )
  }

}
