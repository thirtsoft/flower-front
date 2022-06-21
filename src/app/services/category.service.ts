import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';
  dataForm!:  FormGroup;
  listData!: CategoryDto[];

  constructor(private http: HttpClient) {
  }

 /***************************** CategoryDTO    *************/

 public getCategorieDTOs(): Observable<CategoryDto[]> {
   return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/all`);
 }

 public getCategorieDTOsOrderByIdDesc(): Observable<CategoryDto[]> {
   return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/searchAllCategorieOrderByIdDesc`);
 }

 public getCategoryDtoById(catId: number): Observable<CategoryDto> {
   return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/findById/${catId}`);
 }

 public getCategoryDtoByDesignation(designation: string): Observable<CategoryDto> {
   return this.http.get<CategoryDto>(`${this.apiServerUrl}/categories/${designation}`);
 }

 public addCategoryDto(catDTO: CategoryDto): Observable<CategoryDto> {
   return this.http.post<CategoryDto>(`${this.apiServerUrl}/categories/create`, catDTO);
 }

 public updateCategoryDto(catId: number, catDTO: CategoryDto): Observable<CategoryDto> {
   return this.http.put<CategoryDto>(`${this.apiServerUrl}/categories/update/${catId}`, catDTO);
 }

 public deleteCategoryDto(categoryId: number): Observable<void> {
   return this.http.delete<void>(`${this.apiServerUrl}/categories/delete/${categoryId}`);
 }

}
