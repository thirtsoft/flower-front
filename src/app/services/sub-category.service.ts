import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategoryDto } from '../models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';
  dataForm!:  FormGroup;
  listData!: SubCategoryDto[];
  formData!: SubCategoryDto;

  constructor(private http: HttpClient) {
  }

  /********************* SubCategoryDto ******************/

  public getAllSubCategoryDtos(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/all`);
  }

  public getAllActivesSubCategories(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/search-all-active-subcategories`);
  }
  
  public getALLSuCategoryDtosOrderByIdDesc(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/searchAllSubCategoriesOrderByIdDesc`);
  }

  public getSuCategoriesDtosByCategoryId(catId: number): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/searchSubcategoryByCategoryId/${catId}`);
  }

  public getSubCategoryDtoById(scatId: number): Observable<SubCategoryDto> {
    return this.http.get<SubCategoryDto>(`${this.apiServerUrl}/subcategories/findById/${scatId}`);
  }

  public addSubCategoryDto(SubCatDto: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.post<SubCategoryDto>(`${this.apiServerUrl}/subcategories/create`, SubCatDto);
  }

  public updateSubCategoryDto(scatId: number, SubCatDto: SubCategoryDto): Observable<SubCategoryDto> {
    return this.http.put<SubCategoryDto>(`${this.apiServerUrl}/subcategories/update/${scatId}`, SubCatDto);
  }

  public deleteSubCategoryDto(scatId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/subcategories/delete/${scatId}`);
  }

}
