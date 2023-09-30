import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Newsletter, NewsletterDto } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class newsletterservice {

  apiServerUrl = environment.apiBaseUrl;

  choixmenu : string  = 'A';
  listData!: Newsletter[];
  formData!: Newsletter;

  dataForm!: FormGroup;

  constructor(private http: HttpClient) {
  }

  public addNewsletterDTO(newsletDto: NewsletterDto): Observable<NewsletterDto> {
    return this.http.post<NewsletterDto>(`${this.apiServerUrl}/newsletters/create`, newsletDto);
  }


  public countNumberOfNewsletter(): Observable<NewsletterDto[]> {
    return this.http.get<NewsletterDto[]>(`${this.apiServerUrl}/newsletters/count-number-of-newsletter`);
  }

}
