import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.scss']
})
export class SuccessOrderComponent implements OnInit {

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
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.userId = user.id;
    }
  }

  getUserOrder() {
    this.router.navigate(['/account/my-account/' + this.userId]);
  }

  getTS() {
    return this.currentTime;
  }


}
