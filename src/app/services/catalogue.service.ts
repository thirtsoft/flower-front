import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { LigneCommandeDto } from '../models/ligne-commande';
import { ProductDto } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  apiServerUrl = environment.apiBaseUrl;

  id: any;
  currentUser: any;
  username: any;

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService
              ) {
  }

  public getListProductBySelectedIsTrue(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-product-by-selected-is-true`);
  }

  public getTop6ProductOrderByIdDesc(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchTop6ProductsByOrder`);
  }

  public getTop5OrderItemsOrderByIdDesc(): Observable<LigneCommandeDto[]> {
    return this.http.get<LigneCommandeDto[]>(`${this.apiServerUrl}/orderItems/search-top8-orderItems-order-by-IdDesc`);
  }

  public getTop12ProductOrderByCreatedDateDesc(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-top24-product-by-order`);
  }

  public getListProductBySubCategoryId(scatId: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/products-by-subcategories/${scatId}`);
  }

  public getListProductBySubCategoryName(scatName: string): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/products-by-subcategory-name/${scatName}`);
  }

  public getListProductDTOByPageable(page: number, size: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-product-by-pageable?page=`+page+"&size="+size);
  }

  public getListProductByKeyword(keyword: string): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-product-by-keyword?keyword=`+keyword);
  }

  public getListProductBySamePrice(price: number): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchProductByPrice/${price}`);
  }

  public getListProductDTOBySubCategoryByPageable(scatId: number, page: number, size: number): Observable<ProductDto[]> {
    const searchUrl = (this.apiServerUrl+"/products/search-all-products-by-subcategory-by-pageable?id="+scatId+"&page="+page+"&size="+size);
    console.log("Search Url---", searchUrl);
    return this.http.get<ProductDto[]>(searchUrl);
  }

  public getListProductBySamePriceByPageable(price: number, page: number, size: number): Observable<ProductDto[]> {
    const searchbyPriceUrl = (this.apiServerUrl+"/products/searchProductBySamePriceByPageables?price="+price+"&page="+page+"&size="+size);
    return this.http.get<ProductDto[]>(searchbyPriceUrl);
  }

  public getPhotoProduct() {
    return this.http.get(`${this.apiServerUrl}/products/photoProduct`);
  }

  public getPhotoProductInContext() {
    return this.http.get(`${this.apiServerUrl}/products/photoProductInFolder`);
  }

  public getCurrentUser(): Observable<any> {
    return this.tokenService.getUser();
  }

  public getLogginUser() {
    const user = this.tokenService.getLogginUser();
    this.currentUser = user;
  }

  public getUsername() {
    const user = this.tokenService.getUser();
    this.username = user.username;
  }

  public getUserId() {
    const user = this.tokenService.getUser();
    this.id = user.id
  }

  public getNumberTotalOfProduct(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products/count-number-total-of-products`);
  }

  public getAllProductsByPageable(page: any,size: any): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-all-products-by-pageable?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  public getAllProductsByCategoryId(id: any,page: any,size: any): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-product-by-subcategory-by-pageable?id=${id}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  public getAllProductsByCategoryName(subCatName: any,page: any,size: any): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-products-by-subcategory-name-by-pageable?subCatName=${subCatName}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  public getAllProductsByKeyword(keyword: any,page: any,size: any): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/search-all-products-by-keyword-by-pageable?keyword=${keyword}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  public getProductsLength(): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSize`).pipe(
      map(
        response => response
      )
    )
  }

  public getProductsLengthByCategoryId(id: any): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSize-by-subcategoryId?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  public getProductsLengthByCategoryName(subCatName: any): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/product-size-by-subcategory-name?subcatName=${subCatName}`).pipe(
      map(
        response => response
      )
    )
  }

  public getProductsLengthByKeyword(keyword: any): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/products/productSize-by-keyword?keyword=${keyword}`).pipe(
      map(
        response => response
      )
    )
  }
}


