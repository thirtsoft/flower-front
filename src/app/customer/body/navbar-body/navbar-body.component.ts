import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-navbar-body',
  templateUrl: './navbar-body.component.html',
  styleUrls: ['./navbar-body.component.scss']
})
export class NavbarBodyComponent implements OnInit {

  info: any;
  private roles!: string[];

  currentTime: number = 0;

  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showVendeurBoard = false;

  username!: string;
  email!: string;
  userId:any;
  photo:any;
  img!: boolean;
  currentUser:any;

  constructor(private tokenService: TokenStorageService,
              public userService: UtilisateurService,
              public autService: AuthService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showVendeurBoard = this.roles.includes("ROLE_VENDEUR");
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.userId = user.id;
      this.photo = user.photo;

      this.currentUser = this.autService.getCurrentUser();
      const loginUser = this.autService.getCurrentLogginUser();
    }
  }

  logout() {
    this.tokenService.signOut();
    window.location.reload();
    this.router.navigateByUrl("");
  }

  getUserOrder() {
    this.router.navigate(['/account/my-account/' + this.userId]);
  }

  getProfile() {
    this.router.navigate(['/home/profile/' + this.userId]);
  }

  getTS() {
    return this.currentTime;
  }

}
