import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UpdatePasswordInfo } from 'src/app/auth/services/profile-info';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  formDataProfile: UpdatePasswordInfo = new UpdatePasswordInfo();

  constructor(public crudApi: AuthService,
              private tokenService: TokenStorageService,
              public toastr: ToastrService,
              public fb: FormBuilder,
              private router : Router,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<UpdatePasswordComponent>,
  ) { }

  ngOnInit() {
  }

  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      username: [this.crudApi.dataForm.value.id,  [Validators.required]],
      oldPassword: [this.crudApi.dataForm.value.oldPassword, [Validators.required]],
      newPassword: [this.crudApi.dataForm.value.newPassword, [Validators.required]],
    });
  }
/*
  infoForm(form?: any) {
    if(form = null)
      form.ResetForm();
    this.formDataProfile = {
      username: '',
      oldPassword: '',
      newPassword: '',
    };
  }
  */

  ResetForm() {
    this.crudApi.dataForm.reset();
  }

  onSubmit() {
    console.log(this.formDataProfile);
    this.crudApi.updatePassword(this.formDataProfile).
    subscribe( data => {
      this.toastr.warning('veuillez vous reconnectez','Votre Mot de pqsse a ete modifie avec success', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
      });
      this.logout();
      this.router.navigateByUrl("/").then(() => {
        window.location.reload();
      });
    });

  }

  logout(){
    this.tokenService.signOut();
  }


}
