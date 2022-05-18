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

  public getAllListEmailDTOs(): Observable<EmailDto[]> {
    return this.http.get<EmailDto[]>(`${this.baseUrl}/emails/all`);
  }

  public getAllListEmailDTOOrderIdDesc(): Observable<EmailDto[]> {
    return this.http.get<EmailDto[]>(`${this.baseUrl}/emails/searchAllEmailsOrderByIdDesc`);
  }

  public getEmailById(id: number): Observable<EmailDto> {
    return this.http.get<EmailDto>(`${this.baseUrl}/emails/findById/${id}`);
  }

  public sendEmail(info: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(`${this.baseUrl}/emails/sendEmail`, info);
  }

  public sendEmailDTOToManager(info: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(`${this.baseUrl}/emails/sendMailToManager`, info);
  }

  public sendMailDTOToAllCustomer(info: NewsletterDto): Observable<NewsletterDto> {
    return this.http.post<NewsletterDto>(`${this.baseUrl}/emails/sendMailToAllCustomers`, info);
  }

  public sendEmailToCustomer(mail: NewsletterDto): Observable<NewsletterDto> {
    return this.http.post<NewsletterDto>(`${this.baseUrl}/emails/sendToNewsletter`, mail);
  }

  public sendMailToFournisseur(info: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(`${this.baseUrl}/emails/sendToFournisseur`, info);
  }

  public countNumberOfEmail(): Observable<EmailDto> {
    return this.http.get<EmailDto>(`${this.baseUrl}/emails/countNumberOfEmail`);
  }

  public deleteEmail(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/emails/delete/${id}`);
  }
}
