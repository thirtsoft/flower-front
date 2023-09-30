import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailDto } from '../models/email';
import { NewsletterDto } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl = environment.apiBaseUrl;

  choixmenu: string  = 'A';
  listData!: EmailDto[];
  formData!: EmailDto;

  dataForm!:  FormGroup;

  constructor(private http: HttpClient) { }

  public sendEmail(info: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(`${this.baseUrl}/emails/sendEmail`, info);
  }

  public sendEmailDTOToManager(info: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(`${this.baseUrl}/emails/send-mail-to-manager`, info);
  }
  
}
