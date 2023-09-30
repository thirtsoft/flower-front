import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { environment } from 'src/environments/environment';
import { ProfileInfo, UpdatePasswordInfo, UpdatePasswordUser, UpdateProfilInfo, UpdateUsernameInfo, UpdateUsernameUser } from './profile-info';
import { Register } from './register';
import { TokenStorageService } from './token-storage.service';

const TOKEN_KEY = 'AuthToken';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiServerUrl = environment.apiBaseUrl;

  public choixmenu : string  = 'A';
  public dataForm!: FormGroup;
//  listData: ProfilInfo;
  public listData!: UtilisateurDto;
  public listDataUsername!: UpdateUsernameInfo;

  public listDataProfil!: ProfileInfo;

  islogin = false ;

  profileInfo: ProfileInfo = {} as ProfileInfo;
  userId:any;
  user:any;
  currentUser = {};

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  signUp(info: Register): Observable<Register> {
    return this.http.post<Register>(`${this.apiServerUrl}/auth/signUp`, info , httpOptions);
  }

  attemptAuth(credentials:any): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(`${this.apiServerUrl}/auth/authenticated`, loginData, httpOptions);
    this.islogin=true;
  }

  getCurrentUser(){
    return this.http.get(`${this.apiServerUrl}/auth/currentUser`);
  }

  getCurrentLogginUser(){
    return this.http.get(this.apiServerUrl + '/auth/currentLogginUser');
  }

 /*  getUserProfile(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl_1}/utilisateurs/${id}`, httpOptions).pipe(
      map((res:Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  } */

 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
