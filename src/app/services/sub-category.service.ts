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

  public getAllSubCategories(): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/search-all-active-subcategories`);
  }
  
  public getSuCategoriesDtosByCategoryId(catId: number): Observable<SubCategoryDto[]> {
    return this.http.get<SubCategoryDto[]>(`${this.apiServerUrl}/subcategories/search-subcategories-by-categoryId/${catId}`);
  }

}
