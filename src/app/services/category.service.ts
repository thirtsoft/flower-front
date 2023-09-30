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

 public getAllCategories(): Observable<CategoryDto[]> {
  return this.http.get<CategoryDto[]>(`${this.apiServerUrl}/categories/search-all-active-categories`);
}

}
