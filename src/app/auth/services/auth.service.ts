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

const AUTH_API = 'http://localhost:8081/flowers/v1/';

const TOKEN_KEY = 'AuthToken';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiServerUrl = environment.apiBaseUrl;

  public loginUrl = 'http://localhost:8081/flowers/v1/auth/authenticated';

  public baseUrl_1 = 'http://localhost:8081/flowers/v1';

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
    return this.http.post<Register>(AUTH_API + 'auth/signUp', info , httpOptions);
  }

  attemptAuth(credentials:any): Observable<any> {
    const loginData = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(AUTH_API + 'auth/authenticated', loginData, httpOptions);
    this.islogin=true;
  }

  getCurrentUser(){
    return this.http.get(AUTH_API + '/auth/currentUser');
  }

  getCurrentLogginUser(){
    return this.http.get(AUTH_API + '/auth/currentLogginUser');
  }

 /*  getUserProfile(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl_1}/utilisateurs/${id}`, httpOptions).pipe(
      map((res:Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  } */

  getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(this.baseUrl_1 + `/getUserByUsername/${username}`);
  }
  getUserById(id: any) {
    return this.http.get(`${this.baseUrl_1}/utilisateurs/${id}`);
  }

  public updateProfil(userId: number, userDTO: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    return this.http.put<UpdateProfilInfo>(`${this.apiServerUrl}/utilisateurs/update/${userId}`, userDTO);
  }

  updateCustomerProfil(item: UpdateProfilInfo): Observable<UpdateProfilInfo> {
    const urlUpdateUserProfile = (`${this.baseUrl_1}/utilisateurs/updateCustomerProfileByUsername/`);
    return this.http.patch<UpdateProfilInfo>(urlUpdateUserProfile, {
      id: item.id,
      oldUsername: item.oldUsername,
      name: item.name,
      username: item.username,
      email: item.email,
      mobile: item.mobile,
    }, httpOptions);

  }


  updateUsername(item: UpdateUsernameInfo): Observable<UpdateUsernameInfo> {
    const urlUpdateUsername = (`${this.baseUrl_1}/utilisateurs/updateUsernameOfUserByUsername`);
  //  return this.http.patch<UpdateUsernameInfo>("//localhost:8081/alAmine/updateUsername", {
    return this.http.patch<UpdateUsernameInfo>(urlUpdateUsername, {
      username: item.username,
      newUsername: item.newUsername
    }, httpOptions);

  }

  updateUsernameByUserId(item: UpdateUsernameUser): Observable<UpdateUsernameUser> {
    const urlUpdateUsername = (`${this.baseUrl_1}/utilisateurs/updateUsernameOfUserById`);
    return this.http.patch<UpdateUsernameUser>(urlUpdateUsername, {
      id: item.id,
      newUsername: item.newUsername
    }, httpOptions);

  }

  updatePassword(item: UpdatePasswordInfo): Observable<UpdatePasswordInfo> {
    const urlUpdatePassword = (`${this.baseUrl_1}/utilisateurs/updatePasswordByUsername`);
    return this.http.patch<UpdatePasswordInfo>(urlUpdatePassword, {
      username: item.username,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }

  updatePasswordByUserId(item: UpdatePasswordUser): Observable<UpdatePasswordUser> {
    const urlUpdatePassword = (`${this.baseUrl_1}/utilisateurs/updatePasswordByUserId`);
    return this.http.patch<UpdatePasswordUser>(urlUpdatePassword, {
      userId: item.id,
      oldPassword: item.oldPassword,
      newPassword: item.newPassword
    }, httpOptions);
  }


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
