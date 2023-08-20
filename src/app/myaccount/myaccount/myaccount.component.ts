import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CommandeDto } from 'src/app/models/commande';
import { UtilisateurDto } from 'src/app/models/utilisateur';
import { orderservice } from 'src/app/services/commande.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import { UpdatePasswordComponent } from '../update-password/update-password.component';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  listCommandeDataDTO!: CommandeDto[];
  listDataProfil: UtilisateurDto = new UtilisateurDto();

  currentPage: number = 1;
  totalPages!: number;
  pages!: Array<number>;

  private roles!: string[];

  currentTime: number = 0;
  isLoggedIn = false;
  username!: string;
  email!: string;
  userId:any;

  customerName!: string;
  customerUsername!: string;
  customerEmail!: string;
  customerMobile!: string;
  customerPassword!: string;

  currentUser:any;

  id!: number;
  p:number=1;
  searchText:any;
  paramId :any = 0;
  comId!:number;
  Errors = {status:false, msg:''};
  mySubscription: any;

  constructor(private crudApi: orderservice,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
              public authService: AuthService,
              public userService: UtilisateurService,
              private modalService: NgbModal,
              public fb: FormBuilder,
              private router: Router,
              public matDialog: MatDialog,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<UpdatePasswordComponent>,
  ) {
    //--for reload componant
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getCommandeDTOByUserId(this.paramId);
      this.getUtilisateurDTOById(this.paramId);
    }
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.userId = user.id;
      this.currentUser = this.authService.getCurrentUser();
      const loginUser = this.authService.getCurrentLogginUser();
    }

  }

  getCommandeDTOByUserId(id: number) {
    this.crudApi.getCommandeDtoByUserIdOrderDesc(id).subscribe(
      (response: CommandeDto[]) => {
        this.listCommandeDataDTO = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getUtilisateurDTOById(id: number) {
    this.userService.getUtilisateurDtoById(id).subscribe(
      (response: UtilisateurDto) => {
        this.listDataProfil = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }

  getEmploye() {
    const user = this.tokenService.getUser();
    this.userService.getUtilisateurDtoById(user.id).subscribe(
      response => {
        this.listDataProfil = response;
        this.customerName = this.listDataProfil.name;
        this.customerUsername = this.listDataProfil.username;
        this.customerEmail = this.listDataProfil.email;
        this.customerMobile = this.listDataProfil.mobile;
      }
    );
  }

  addEditCustomerUsername(item: UtilisateurDto) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.authService.listData = Object.assign({}, item);
    this.matDialog.open(UpdateAccountComponent, dialogConfig);
  }

  addEditCustomerPassword(item : UtilisateurDto) {
    this.authService.choixmenu == 'M';
    this.authService.dataForm = this.fb.group(Object.assign({},item));
    this.router.navigate(['/account/my-account/'+this.userId+'/update-password', this.authService.dataForm]);
  }
  
  update() {
    this.userService.updateUtilisateurDto(this.listDataProfil.id, this.listDataProfil).subscribe(
      (response: UtilisateurDto) => {
        this.toastr.warning('avec succès','Informations Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("account/my-account/" + this.userId).then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  } 

  viewInvoice(item: CommandeDto) {
    this.router.navigateByUrl('account/facture/' + item.id);
  }

  viewCommande(item: CommandeDto) {
    this.router.navigateByUrl('account/my-account/' + item.id);
  }

  logout(){
    this.tokenService.signOut();
    this.toastr.success('au revoir','Vous etes deconnecter', {
      timeOut: 800,
      positionClass: 'toast-top-right',
    });
    this.router.navigateByUrl("/").then(() => {
      window.location.reload();
    });
  }

  deleteAccount() {
    this.userService.deleteUtilisateurDto(this.paramId).subscribe(
      (response) => {
        this.toastr.success('avec succès','Votre compte a été supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.logout();
      },
      error => {
        console.log(error.error.message);
      }
    )
  }

  openDelete(targetModal:any, user: UtilisateurDto) {
    const deleteId = user.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

}
