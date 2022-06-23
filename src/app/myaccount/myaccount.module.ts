import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaccountRoutingModule } from './myaccount-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUsernameComponent } from './update-username/update-username.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
/*
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
*/
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MyaccountComponent,
    InvoiceComponent,
    UpdatePasswordComponent,
    UpdateUsernameComponent,
    UpdateAccountComponent
  ],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
    SharedModule,
    /*
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
    */
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} },
  ],

  entryComponents: [
    UpdateAccountComponent, UpdatePasswordComponent, UpdateUsernameComponent, InvoiceComponent
  ]
})
export class MyaccountModule { }
