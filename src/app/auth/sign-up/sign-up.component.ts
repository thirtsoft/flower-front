import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Register } from '../services/register';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registrationForm!: FormGroup;
  user = new Register('','','','',[]);
  submitted = false;
  isRegistered = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: any = [
    { name: 'User', id:1, selected: true },
    { name: 'Vendeur', id:2, selected: false },
    { name: 'Admin', id:3, selected: false },
  ];
  selectedRoles!: string[];

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private router : Router
  ){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      isChecked: ['', Validators.required],
      roleSelection: this.createRoles(this.roles),
    });

  }
  
  createRoles(rolesList:any): FormArray {
    const arr = rolesList.map((role:any) => {
      return new FormControl(role.selected)
    });
    console.log("CreateRole:" +arr);
    return new FormArray(arr);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }else {
      this.user.name = this.registrationForm.value.name;
      this.user.username = this.registrationForm.value.username;
      this.user.email = this.registrationForm.value.email;
      this.user.password = this.registrationForm.value.password;
      console.log("SelectedRole: " +this.getSelectedRoles());
      this.user.roles = this.getSelectedRoles();
      this.registerUser();
    }
  }

  registerUser() {
    this.authService.signUp(this.user)
    .subscribe(response=> {
      this.isRegistered = true;
      this.isSignUpFailed = false;
      this.toastr.success('avec succès','Vote compte est crée', {
        timeOut: 1500,
        positionClass: 'toast-top-right',
      });
      this.router.navigateByUrl("auth/success-register");
    },
    error => {
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
      this.toastr.error("Aucun compte crée veuillez rééssayer encore");
    }
    );

  }

  getSelectedRoles():string[]  {
    this.selectedRoles = this.registrationForm.value.roleSelection.map((selected:any, i:any) => {
      console.log("IsSelected: " +selected);
      if(selected){
        return this.roles[i].name;
      }else {
        return '';
      }
    });
    // return selected roles
    return this.selectedRoles.filter(function(element:any) {
      if (element !== '') {
        console.log("ElementReturn: " +element);
        return element;
      }
    });
  }


}
