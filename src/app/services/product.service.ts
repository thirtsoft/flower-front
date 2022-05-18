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

  /************   ProductDto  ***************/

  public getALLProductDTOs(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/all`);
  }

  public getProductDtosOrderByIdDesc(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchAllProductOrderByIdDesc`);
  }

  public getTop3ProductDTOsByIdDesc():  Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchTop3ProductByOrderIdDesc`);
  }

  public getTop8ProductDTOsByIdDesc():  Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiServerUrl}/products/searchTop8ProductByOrderIdDesc`);
  }

  public getProductDtoById(prodId: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/findById/${prodId}`);
  }

  public getProductDtoByReference(reference: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiServerUrl}/products/searchProductbyReference/${reference}`);
  }

  public addProductDto(prodDto: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.apiServerUrl}/products/create`, prodDto);
  }

  public addProductDtoWithPhoto(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/createWithFile`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public addProductDtoWithPhotoInFolder(formData: FormData): Observable<any> {
    const req = new HttpRequest('POST', `${this.apiServerUrl}/products/createWithFileInFolder`, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }


  public updateProductDto(prodId: number, prodDto: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.apiServerUrl}/products/update/${prodId}`, prodDto);
  }

  uploadPhotoProductDto(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiServerUrl+'/products/uploadProductPhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  uploadPhotoProductDtoInFolder(file: File, id: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiServerUrl+'/products/uploadProductPhoto/' + id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getPhotoArticle() {
    return this.http.get(`${this.apiServerUrl}/products/photoProduct`);
  }

  public deleteProductDto(prodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete/${prodId}`);
  }

  incrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite++;
  }

  decrementQuantityProductDto(prodDto: ProductDto) {
    prodDto.quantite--;
  }

}
